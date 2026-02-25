"use client";

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Header } from "@/components/Header";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  const statusLabel =
    project.status === "launched"
      ? "Launched"
      : project.status === "in-progress"
      ? "In Progress"
      : "Coming Soon";

  const statusColor =
    project.status === "launched"
      ? "text-green-400"
      : project.status === "in-progress"
      ? "text-brand-yellow"
      : "text-neutral-400";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        {/* Hero Section */}
        <section className="relative h-[40rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm mb-4">
              <span className="text-brand-yellow mr-2">
                Project #{project.number}
              </span>
              <span className="text-neutral-400">{project.type}</span>
              <span className={`ml-3 ${statusColor}`}>{statusLabel}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
              {project.heroSubtitle}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
              >
                <Icon className="w-5 h-5 mr-2" />
                {project.ctaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-20 px-4 bg-neutral-900/50">
          <div className="container mx-auto">
            <div className="relative h-[600px] rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={project.imageUrl}
                alt={`${project.title} Preview`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
                >
                  <Star className="w-12 h-12 mb-4 text-brand-yellow" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4 bg-neutral-900/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 text-center hover:bg-neutral-900/80 transition-colors"
                >
                  <span className="text-neutral-200">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Journey */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Development Journey
            </h2>
            <div className="max-w-4xl mx-auto prose prose-invert">
              <p className="text-lg text-neutral-300">
                {project.description}
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4">
                Key Learnings
              </h3>
              <ul className="space-y-2">
                {project.keyLearnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
              Interested in {project.title}?
            </h2>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
              {project.status === "launched"
                ? "Try it out today and see what it can do for you."
                : project.status === "in-progress"
                ? "This project is currently being built. Stay tuned for updates!"
                : "This project is coming soon. Subscribe to our newsletter to be the first to know!"}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
              >
                <ArrowRight className="w-6 h-6 mr-2" />
                Back to All Projects
              </a>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: project.title,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            url: `https://25microsaas.com/projects/${project.id}`,
            description: project.description,
            featureList: project.features.map((f) => f.title),
          }),
        }}
      />
    </>
  );
}
