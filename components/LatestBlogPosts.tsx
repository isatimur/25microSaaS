"use client";

import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export function LatestBlogPosts() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Latest from the Build Log
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center text-brand-blue hover:text-brand-yellow transition-colors font-medium"
          >
            Read All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-colors"
            >
              <div className="h-2 bg-gradient-to-r from-brand-blue to-brand-yellow" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-brand-yellow">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-50 mb-2 group-hover:text-brand-yellow transition-colors line-clamp-2">
                  {index === 0 && (
                    <span className="text-[10px] bg-green-400/10 text-green-400 px-1.5 py-0.5 rounded-full mr-2 uppercase tracking-wider">
                      New
                    </span>
                  )}
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm text-brand-blue group-hover:text-brand-yellow transition-colors flex items-center gap-1">
                  Read more
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
