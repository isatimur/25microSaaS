"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
        <section className="relative h-[28rem] flex flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams className="opacity-40" />
          <div className="p-4 relative z-10 w-full container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Build Log
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto">
              Weekly updates on building 25 AI agents. Architecture, code,
              revenue, and lessons learned.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-brand-yellow">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-neutral-50 group-hover:text-brand-yellow transition-colors">
                    {index === 0 && (
                      <span className="text-xs bg-brand-yellow/10 text-brand-yellow px-2 py-1 rounded-full mr-3">
                        Latest
                      </span>
                    )}
                    {post.title}
                  </h2>
                  <p className="text-neutral-400 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center text-sm text-brand-blue group-hover:text-brand-yellow transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
