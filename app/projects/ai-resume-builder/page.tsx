"use client";

import { Palette, FileText, Wand2, ScanSearch, Sparkles, Download, FileCheck, Award, Briefcase, PlusCircle } from "lucide-react"; // Removed ArrowRight, Star, Cloud, Bell, Lock as they are unused. Palette was already there and is used.
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function DailyAffirmationsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-neutral-950 text-neutral-50 relative pt-16">
                {/* Hero Section */}
                <section className="relative h-[40rem] flex flex-col items-center justify-center overflow-hidden">
                    <BackgroundBeams className="opacity-40" />
                    <div className="p-4 relative z-10 w-full container mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm mb-4">
                            <span className="text-brand-yellow mr-2">Project #7</span>
                            <span className="text-neutral-400">Career Tool</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            AI-Powered Resume Builder & Reviewer
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Craft a compelling, ATS-friendly resume that gets noticed. Our AI guides you through content, keywords, formatting, and provides instant feedback.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <FileText className="w-5 h-5 mr-2" />
                                Build Your Resume Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* Preview Section */}
                <section className="py-20 px-4 bg-neutral-900/50">
                    <div className="container mx-auto">
                        <div className="relative h-[600px] rounded-2xl overflow-hidden border border-neutral-800">
                            <Image
                                src="/palm-leaf.png"
                                alt="AI Resume Builder Interface with Template Options"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Features to Fast-Track Your Job Search
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Wand2,
                                    title: "AI Content Suggestions",
                                    description: "Get AI-generated bullet points and summaries based on your roles and skills."
                                },
                                {
                                    icon: ScanSearch,
                                    title: "ATS Keyword Optimization",
                                    description: "Ensure your resume passes through Applicant Tracking Systems with relevant keywords."
                                },
                                {
                                    icon: Palette,
                                    title: "Professional Templates",
                                    description: "Choose from a variety of modern, recruiter-approved resume templates."
                                },
                                {
                                    icon: Sparkles,
                                    title: "Instant AI Review",
                                    description: "Receive immediate feedback on clarity, impact, grammar, and ATS compatibility."
                                },
                                {
                                    icon: Download,
                                    title: "Easy Export (PDF/DOCX)",
                                    description: "Download your resume in popular formats, ready to send."
                                }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors"
                                >
                                    <feature.icon className="w-12 h-12 mb-4 text-brand-yellow" />
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
                            Leveraging AI for Career Success
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "React/Next.js",
                                "Tailwind CSS",
                                "Python/Flask (for AI backend)",
                                "OpenAI API (or similar LLM for text generation/review)",
                                "PDFLib (or similar for PDF generation)",
                                "Supabase/Firebase (for user accounts & storage)",
                                "Vercel"
                            ].map((tech, index) => (
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

                {/* Pricing & Plans Section */}
                <section className="py-20 px-4 bg-neutral-900">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Choose Your Path to a Better Resume
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Flexible Options for Every Job Seeker</h3>
                                <p className="text-neutral-300 mb-4">We offer straightforward pricing to help you create the perfect resume.</p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: FileCheck, text: "Basic Resume: One-time fee for a single resume download with standard templates and AI suggestions." },
                                        { icon: Award, text: "Pro Subscription: Monthly/annual access to all premium templates, unlimited AI reviews, cover letter generator, and interview tips." },
                                        { icon: Briefcase, text: "Career Pack (Future): One-time purchase including resume, cover letter, and LinkedIn profile review." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <item.icon className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    View Pricing Details
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Resume Templates and AI Review Score"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Journey */}
                <section className="py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Helping You Put Your Best Foot Forward
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                The job market is competitive. We built this tool to level the playing field, providing job seekers with AI-powered assistance to create truly effective resumes.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Integrating LLMs for content generation and analysis</li>
                                <li>Designing intuitive UI for complex resume editing</li>
                                <li>Understanding ATS algorithms and resume best practices</li>
                                <li>Handling PDF generation and formatting challenges</li>
                                <li>Balancing free/paid features in a career tool</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Create a Job-Winning Resume?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Start building your professional resume today with the help of AI and land your dream job faster.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <PlusCircle className="w-6 h-6 mr-2" />
                                Start Building Free
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                See Template Gallery
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
                        name: "AI Resume Builder & Reviewer",
                        applicationCategory: "ProductivityTool",
                        operatingSystem: "Web",
                        url: "https://25microsaas.com/projects/ai-resume-builder", // Updated URL
                        offers: {
                            "@type": "AggregateOffer", // Changed to AggregateOffer to list multiple plans
                            lowPrice: "0", // Assuming free basic version or trial
                            highPrice: "49", // Placeholder for highest price (e.g. annual pro)
                            priceCurrency: "USD",
                            offers: [
                                { "@type": "Offer", name: "Basic Resume", price: "15", priceCurrency: "USD", description: "One-time fee for a single resume download." }, // Example price
                                { "@type": "Offer", name: "Pro Subscription", price: "29", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", billingIncrement: "Month" }, description: "Monthly access to all premium features." } // Example price
                            ]
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.7", // Placeholder
                            ratingCount: "350"   // Placeholder
                        },
                        description: "Craft a compelling, ATS-friendly resume that gets noticed. Our AI guides you through content, keywords, formatting, and provides instant feedback.",
                        featureList: [
                            "AI Content Suggestions",
                            "ATS Keyword Optimization",
                            "Professional Templates",
                            "Instant AI Review",
                            "Easy Export (PDF/DOCX)"
                        ],
                        releaseNotes: "Launch of the AI Resume Builder & Reviewer."
                    })
                }}
            />
        </>
    );
}