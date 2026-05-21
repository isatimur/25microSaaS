import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-lg font-bold text-neutral-50 mb-4">AI Agent Challenge</h3>
            <p className="text-sm text-neutral-400">
              Building 25 autonomous AI agents in 50 weeks.
              Each one generates $200+/month in real revenue.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-neutral-400 hover:text-neutral-50 transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-neutral-400 hover:text-neutral-50 transition-colors">All Projects</Link></li>
              <li><Link href="/roadmap" className="text-neutral-400 hover:text-neutral-50 transition-colors">Roadmap</Link></li>
              <li><Link href="/compare" className="text-neutral-400 hover:text-neutral-50 transition-colors">Compare</Link></li>
              <li><Link href="/stack" className="text-neutral-400 hover:text-neutral-50 transition-colors">Tech Stack</Link></li>
              <li><Link href="/blog" className="text-neutral-400 hover:text-neutral-50 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-neutral-50 transition-colors">About</Link></li>
              <li><Link href="/faq" className="text-neutral-400 hover:text-neutral-50 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-4 uppercase tracking-wider">Featured Agents</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects/ai-seo-content-agent" className="text-neutral-400 hover:text-neutral-50 transition-colors">AI SEO Content Agent</Link></li>
              <li><Link href="/projects/ai-cold-email-agent" className="text-neutral-400 hover:text-neutral-50 transition-colors">AI Cold Outreach Agent</Link></li>
              <li><Link href="/projects/ai-support-agent" className="text-neutral-400 hover:text-neutral-50 transition-colors">AI Support Agent</Link></li>
              <li><Link href="/projects/ai-code-review-agent" className="text-neutral-400 hover:text-neutral-50 transition-colors">AI Code Review Agent</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-200 mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/25microsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-neutral-50 hover:border-neutral-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/25microsaas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-neutral-50 hover:border-neutral-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} AI Agent Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
