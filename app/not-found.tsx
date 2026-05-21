import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center pt-16">
        <div className="text-center px-4">
          <p className="text-8xl font-extrabold text-gradient mb-6">404</p>
          <h1 className="text-3xl font-bold mb-4 text-neutral-100">
            Agent Not Found
          </h1>
          <p className="text-neutral-400 max-w-md mx-auto mb-8">
            This page doesn&apos;t exist yet — but maybe it should be AI Agent #26.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors text-neutral-200"
            >
              View All Agents
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
