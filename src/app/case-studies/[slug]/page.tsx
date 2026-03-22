import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/constants";
import { CaseStudyDetail } from "./CaseStudyDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};

  return {
    title: `${study.client} — ${study.title}`,
    description: study.tagline,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((s) => s.slug === params.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return <CaseStudyDetail study={study} nextStudy={nextStudy} />;
}
