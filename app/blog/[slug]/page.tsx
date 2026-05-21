"use client";

import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 pt-16">
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Build Log
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6 text-sm text-neutral-400">
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
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-50 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-neutral-300">{post.excerpt}</p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {paragraphs.map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-neutral-50 mt-12 mb-6"
                    >
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                }
                if (trimmed.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-neutral-100 mt-8 mb-4"
                    >
                      {trimmed.replace("### ", "")}
                    </h3>
                  );
                }
                if (trimmed.startsWith("| ")) {
                  const rows = trimmed.split("\n").filter((r) => !r.match(/^\|[\s-|]+\|$/));
                  return (
                    <div key={index} className="overflow-x-auto my-6">
                      <table className="w-full text-sm border border-neutral-800 rounded-lg overflow-hidden">
                        <tbody>
                          {rows.map((row, ri) => (
                            <tr key={ri} className={ri === 0 ? "bg-neutral-800/50 font-semibold" : "border-t border-neutral-800"}>
                              {row.split("|").filter(Boolean).map((cell, ci) => (
                                <td key={ci} className="px-4 py-3 text-neutral-300">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (trimmed.startsWith("```")) {
                  const lines = trimmed.split("\n");
                  const lang = lines[0].replace("```", "").trim();
                  const code = lines.slice(1, -1).join("\n");
                  return (
                    <div key={index} className="my-6 rounded-xl overflow-hidden border border-neutral-800">
                      {lang && (
                        <div className="px-4 py-2 bg-neutral-800/80 text-xs text-neutral-400 font-mono">
                          {lang}
                        </div>
                      )}
                      <pre className="p-4 bg-neutral-900/80 overflow-x-auto text-sm">
                        <code className="text-neutral-300 font-mono">{code}</code>
                      </pre>
                    </div>
                  );
                }
                if (trimmed.startsWith("> ")) {
                  const quoteText = trimmed.replace(/^> /gm, "");
                  return (
                    <blockquote
                      key={index}
                      className="my-6 pl-6 border-l-4 border-brand-yellow/50 italic text-neutral-300"
                    >
                      {quoteText}
                    </blockquote>
                  );
                }
                if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
                  const items = trimmed.split("\n");
                  return (
                    <ul key={index} className="space-y-2 my-4">
                      {items.map((item, ii) => (
                        <li
                          key={ii}
                          className="text-neutral-300 pl-4 border-l-2 border-brand-yellow/30"
                        >
                          <InlineFormatted text={item.replace(/^[-\d.]\s*/, "")} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (!trimmed) return null;
                return (
                  <p key={index} className="text-neutral-300 leading-relaxed mb-6">
                    <InlineFormatted text={trimmed} />
                  </p>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-neutral-800">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  ← {prevPost.title}
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors text-right"
                >
                  {nextPost.title} →
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16">
              <Newsletter />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function InlineFormatted({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-neutral-50 font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="px-1.5 py-0.5 rounded bg-neutral-800 text-brand-yellow text-sm font-mono"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
