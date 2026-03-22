"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { teamMembers } from "@/lib/constants";

const avatarGradients = [
  "from-accent to-[#7b61ff]",
  "from-accent2 to-[#ff9a5c]",
  "from-[#7b61ff] to-[#61b5ff]",
  "from-accent to-accent2",
  "from-[#61b5ff] to-accent",
  "from-accent2 to-[#7b61ff]",
  "from-accent to-[#61b5ff]",
  "from-[#ff9a5c] to-accent",
];

export function Team() {
  return (
    <section className="py-32">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the experts."
            subtitle="A passionate team of marketers, strategists, and creatives dedicated to your growth."
            centered
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 0.08}>
              <div className="group text-center">
                <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-card bg-card">
                  <div className="flex h-full items-center justify-center">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} text-2xl font-bold text-bg font-display`}>
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  {/* Hover overlay */}
                  {member.socials && (
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-accent/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="rounded-full bg-bg/20 px-3 py-1 text-xs font-semibold text-bg hover:bg-bg/30 transition-colors">
                          LinkedIn
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="rounded-full bg-bg/20 px-3 py-1 text-xs font-semibold text-bg hover:bg-bg/30 transition-colors">
                          Twitter
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <h3 className="font-display text-lg font-bold text-fg">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
