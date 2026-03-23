"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { PageTransition } from "@/components/shared/PageTransition";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  company: z.string().optional(),
  budget: z.enum(["under-500", "1000-plus", "5000-plus"], {
    message: "Please select a budget range",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Contact: ${data.name} — ${data.company || "No company"}`,
          from_name: data.name,
          ...data,
        }),
      });

      const result = await res.json();
      if (!result.success) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: siteConfig.address },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: Clock, label: "Hours", value: siteConfig.hours },
  ];

  return (
    <PageTransition>
      <section className="pt-36 pb-24 lg:pt-44">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight leading-[0.95] text-fg">
              Let&apos;s Work Together
            </h1>
            <p className="mt-6 text-lg text-muted md:text-xl max-w-xl mx-auto">
              Ready to accelerate your growth? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <AnimateOnScroll className="lg:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    label="Name"
                    placeholder="John Doe"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="john@company.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>

                <Input
                  label="Company"
                  placeholder="Your company name (optional)"
                  error={errors.company?.message}
                  {...register("company")}
                />

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-fg">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className={cn(
                      "w-full rounded-xl border border-white/[0.08] bg-card px-4 py-3.5 text-fg transition-all duration-200",
                      "focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/10",
                      errors.budget && "border-accent2"
                    )}
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="1000-plus">$1,000+</option>
                    <option value="5000-plus">$5,000+</option>
                  </select>
                  {errors.budget && (
                    <p className="text-sm text-accent2">{errors.budget.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-fg">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project and goals..."
                    className={cn(
                      "w-full rounded-xl border border-white/[0.08] bg-card px-4 py-3.5 text-fg placeholder:text-muted/50 transition-all duration-200 resize-none",
                      "focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/10",
                      errors.message && "border-accent2"
                    )}
                  />
                  {errors.message && (
                    <p className="text-sm text-accent2">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-xl bg-accent/10 border border-accent/20 p-4 text-accent"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span className="text-sm">Message sent successfully! We&apos;ll be in touch soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-xl bg-accent2/10 border border-accent2/20 p-4 text-accent2"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span className="text-sm">Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll className="lg:col-span-2" delay={0.2}>
              <div className="rounded-card border border-white/[0.04] bg-card p-8 space-y-8">
                <h3 className="font-display text-xl font-bold text-fg mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-[10px] border border-accent/10 bg-glass text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-fg">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-sm text-accent hover:text-accent-dark transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-muted">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
