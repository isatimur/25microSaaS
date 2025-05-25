"use client";

import { ArrowRight, Star, Palette, Users, LayoutGrid, ShieldCheck, MessageSquare } from "lucide-react"; // Removed Lock, Cloud, Bell as they are unused.
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
                            <span className="text-brand-yellow mr-2">Project #3</span>
                            <span className="text-neutral-400">SaaS Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            Niche Community Forum Builder
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Launch your own vibrant online forum for any passion, profession, or local group. Simple to set up, powerful to manage.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Create Your Forum Free
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
                                alt="Niche Community Forum Builder Dashboard Preview"
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
                            Everything You Need to Build & Grow
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Users,
                                    title: "Easy User Management",
                                    description: "Intuitive tools for member registration, roles, permissions, and moderation."
                                },
                                {
                                    icon: LayoutGrid,
                                    title: "Customizable Categories",
                                    description: "Organize discussions with flexible categories, sub-forums, and tagging."
                                },
                                {
                                    icon: Palette,
                                    title: "Simple Theming",
                                    description: "Customize the look and feel to match your community's brand. (Basic themes on free, advanced on paid)."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Moderation Tools",
                                    description: "Keep your community healthy with content flagging, keyword filters, and user warnings/bans."
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Rich Discussion Features",
                                    description: "Support for rich text, image/video embeds, polls, and private messaging."
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
                            Reliable & Scalable Infrastructure
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "React/Next.js",
                                "Node.js",
                                "PostgreSQL",
                                "Tailwind CSS",
                                "Pusher (Real-time)",
                                "Redis",
                                "Docker",
                                "AWS/Google Cloud"
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
                            Go Further with Premium
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Unlock Advanced Community Features</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Unlimited members & forums",
                                        "Custom domain mapping (yourforum.com)",
                                        "Advanced theming & CSS customization",
                                        "Detailed analytics & reporting",
                                        "Priority email support",
                                        "Integration with other tools (e.g., Mailchimp, Zapier - future)"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <Star className="w-5 h-5 text-brand-yellow mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    Explore Premium Plans
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Premium Forum Customization Options"
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
                            Fostering Connections, One Forum at a Time
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We believe in the power of niche communities. This platform is built to make it easy for anyone to create a dedicated space for shared interests and meaningful discussions.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Building multi-tenant architectures</li>
                                <li>Designing robust user permission systems</li>
                                <li>Implementing real-time communication features</li>
                                <li>Balancing free features with valuable premium offerings</li>
                                <li>Community management best practices</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Start Your Own Community?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Join hundreds of creators who have built their unique online spaces. Sign up free and launch your forum in minutes.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Sign Up & Build
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                See Demo
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
                        name: "Niche Community Forum Builder",
                        applicationCategory: "SocialNetworkingApplication",
                        operatingSystem: "Web",
                        url: "https://25microsaas.com/projects/niche-community-forum-builder", // Assuming this will be the URL
                        offers: {
                            "@type": "Offer",
                            price: "0", // For the free tier
                            priceCurrency: "USD",
                            description: "Free tier with basic features. Premium plans available for advanced functionality."
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.7", // Placeholder
                            ratingCount: "250"   // Placeholder
                        },
                        description: "Launch your own vibrant online forum for any passion, profession, or local group. Simple to set up, powerful to manage.",
                        featureList: [
                            "Easy User Management",
                            "Customizable Categories",
                            "Simple Theming",
                            "Moderation Tools",
                            "Rich Discussion Features",
                            "Freemium model with Premium upgrades"
                        ],
                        releaseNotes: "Initial launch of the Niche Community Forum Builder platform."
                    })
                }}
            />
        </>
    );
}