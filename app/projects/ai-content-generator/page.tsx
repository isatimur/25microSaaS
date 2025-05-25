"use client";

import { ArrowRight, Palette, Brain, Zap, Languages, Settings2, Star } from "lucide-react"; // Removed Cloud, Bell, Lock as they are unused.
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
                            <span className="text-brand-yellow mr-2">Project #2</span>
                            <span className="text-neutral-400">Web Application</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            AI Content Generator
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Effortlessly generate high-quality blog posts, articles, social media updates, and more with our cutting-edge AI-powered content creation tool.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated later
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Get Started - It&apos;s Free
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
                                src="/palm-leaf.png"
                                alt="AI Content Generator Interface Preview"
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
                            Features to Revolutionize Your Workflow
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Brain,
                                    title: "Multiple Content Types",
                                    description: "Generate various content formats: blog posts, ad copy, email subject lines, product descriptions, and more."
                                },
                                {
                                    icon: Zap,
                                    title: "Fast & Efficient",
                                    description: "Create high-quality content in minutes, not hours. Break through writer's block and boost productivity."
                                },
                                {
                                    icon: Palette,
                                    title: "Tone & Style Customization",
                                    description: "Adjust the tone and style of your generated content to perfectly match your brand voice."
                                },
                                {
                                    icon: Languages,
                                    title: "Multilingual Support",
                                    description: "Generate content in multiple languages to reach a global audience."
                                },
                                {
                                    icon: Settings2,
                                    title: "Advanced Editing Tools",
                                    description: "Refine and perfect your AI-generated content with our intuitive built-in editor."
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
                            Built With Powerful Technologies
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "Next.js",
                                "TypeScript",
                                "Tailwind CSS",
                                "Python (for AI backend)",
                                "FastAPI",
                                "OpenAI API",
                                "Stripe",
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

                {/* Premium Features */}
                <section className="py-20 px-4 bg-neutral-900">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Unlock Premium Power
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Supercharge Your Content Creation</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Higher generation limits (more words/month)",
                                        "Access to advanced AI models",
                                        "Team collaboration features",
                                        "Plagiarism checker integration",
                                        "Priority support"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <Star className="w-5 h-5 text-brand-yellow mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    View Pricing Plans
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="AI Content Generator Premium Features"
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
                            Our Content Generation Philosophy
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We believe AI can empower creators by automating repetitive tasks and sparking new ideas. Our AI Content Generator is designed to be a versatile assistant, helping you produce better content, faster.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Integrating with large language models (LLMs)</li>
                                <li>Designing intuitive user interfaces for AI tools</li>
                                <li>Managing API costs and usage quotas</li>
                                <li>Developing a fair and scalable freemium model</li>
                                <li>Ensuring responsible AI use and content quality</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Transform Your Content Strategy?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Sign up today and experience the future of content creation. Start generating high-impact content with ease.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated later
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Sign Up Now
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </a>
                            <a
                                href="#" // Link to be updated later
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                Learn More
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
                        name: "AI Content Generator",
                        applicationCategory: "ProductivityTool",
                        operatingSystem: "Web",
                        url: "https://25microsaas.com/projects/ai-content-generator", // Assuming this will be the URL
                        offers: {
                            "@type": "Offer",
                            price: "0", // For the free tier
                            priceCurrency: "USD"
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.8", // Placeholder
                            ratingCount: "500"   // Placeholder
                        },
                        description: "Effortlessly generate high-quality blog posts, articles, social media updates, and more with our cutting-edge AI-powered content creation tool.",
                        featureList: [
                            "Multiple Content Types (blog posts, ad copy, etc.)",
                            "Fast & Efficient Content Creation",
                            "Tone & Style Customization",
                            "Multilingual Support",
                            "Advanced Editing Tools",
                            "Freemium Model with Premium Options"
                        ],
                        releaseNotes: "Initial release of the AI Content Generator by 25 MicroSaaS." // Added project name
                    })
                }}
            />
        </>
    );
}