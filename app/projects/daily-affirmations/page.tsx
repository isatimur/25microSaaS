"use client";

import { ArrowRight, Chrome, Star, Cloud, Bell, Palette, Lock, Github, Globe } from "lucide-react";
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
                            <span className="text-brand-yellow mr-2">Project #1</span>
                            <span className="text-neutral-400">Chrome Extension</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            Daily Affirmations
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Transform your new tab into a daily source of inspiration with our beautiful, customizable Chrome extension.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="https://chromewebstore.google.com/detail/daily-affirmations/nhhicimcipdgjckacooendaikhjhenle" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Chrome className="w-5 h-5 mr-2" />
                                Add to Chrome
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href="https://github.com/25microsaas/daily-affirmations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                View Source
                            </a>
                            <a
                                href="https://www.daily-affirmation.today"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                <Globe className="w-5 h-5 mr-2" />
                                Visit Website
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
                                alt="Daily Affirmations Extension Preview"
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
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Star,
                                    title: "Daily Inspiration",
                                    description: "Curated affirmations that inspire and motivate you every day"
                                },
                                {
                                    icon: Cloud,
                                    title: "Weather Widget",
                                    description: "Stay informed with a beautiful, draggable weather display"
                                },
                                {
                                    icon: Bell,
                                    title: "Smart Reminders",
                                    description: "Set custom reminders to keep your positive mindset"
                                },
                                {
                                    icon: Palette,
                                    title: "Customizable Themes",
                                    description: "Personalize your experience with beautiful themes and backgrounds"
                                },
                                {
                                    icon: Lock,
                                    title: "Premium Features",
                                    description: "Unlock advanced features like custom affirmations and cloud sync"
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
                            Tech Stack
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "Manifest V3",
                                "TypeScript",
                                "Tailwind CSS",
                                "Chrome Storage API",
                                "Weather API",
                                "Service Workers",
                                "Web Components",
                                "IndexedDB"
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
                            Premium Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Unlock More Power</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Custom affirmations library",
                                        "Cloud sync across devices",
                                        "Advanced theme customization",
                                        "Priority support",
                                        "No advertisements"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <Star className="w-5 h-5 text-brand-yellow mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    Upgrade to Premium
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Premium features showcase"
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
                            Development Journey
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                The Daily Affirmations Chrome extension was developed as the first project in our 25 MicroSaaS challenge.
                                Built with modern web technologies and following Chrome&apos;s latest Manifest V3 guidelines, it demonstrates
                                how a simple idea can be transformed into a polished product.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Implementing Chrome&apos;s Manifest V3 architecture</li>
                                <li>Building performant service workers</li>
                                <li>Creating draggable UI components</li>
                                <li>Managing local and cloud storage sync</li>
                                <li>Implementing a freemium business model</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Start Your Journey Today
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Join thousands of users who have transformed their daily browsing experience into moments of inspiration.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="https://chromewebstore.google.com/detail/daily-affirmations/nhhicimcipdgjckacooendaikhjhenle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Chrome className="w-6 h-6 mr-2" />
                                Install Extension
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </a>
                            <a
                                href="https://github.com/25microsaas/daily-affirmations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                <Github className="w-6 h-6 mr-2" />
                                View Source
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
                        name: "Daily Affirmations",
                        applicationCategory: "BrowserExtension",
                        operatingSystem: "Chrome",
                        url: "https://www.daily-affirmation.today",
                        downloadUrl: "https://chromewebstore.google.com/detail/daily-affirmations/nhhicimcipdgjckacooendaikhjhenle",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "USD"
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            ratingCount: "1500"
                        },
                        description: "Transform your new tab into a daily source of inspiration with beautiful affirmations and customizable themes.",
                        applicationSuite: "Chrome Web Store",
                        featureList: [
                            "Daily inspirational affirmations",
                            "Customizable themes",
                            "Weather widget",
                            "Smart reminders",
                            "Cloud sync"
                        ],
                        releaseNotes: "First public release of Daily Affirmations Chrome Extension"
                    })
                }}
            />
        </>
    );
}