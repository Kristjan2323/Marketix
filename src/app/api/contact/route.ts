import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  company: z.string().optional(),
  budget: z.enum(["under-500", "1000-plus", "5000-plus"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, company, budget, message } = result.data;

    const budgetLabels: Record<string, string> = {
      "under-5k": "Under $5,000",
      "5k-10k": "$5,000 – $10,000",
      "10k-25k": "$10,000 – $25,000",
      "25k-plus": "$25,000+",
    };

    // Notification email to Marketix
    await transporter.sendMail({
      from: `"Marketix Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER,
      subject: `New Contact: ${name} — ${company || "No company"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budgetLabels[budget]}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to the sender
    await transporter.sendMail({
      from: `"Marketix" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out — Marketix",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting Marketix! We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The Marketix Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
