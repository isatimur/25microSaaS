"use client";

import { Star, Search, Filter, Sparkles, MessageCircle, Gift, Heart, Link, Users, Box } from "lucide-react"; // Removed ArrowRight, Cloud, Bell, Palette, Lock as they are unused.
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
                            <span className="text-brand-yellow mr-2">Project #5</span>
                            <span className="text-neutral-400">Discovery Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            Subscription Box Discovery Hub
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Explore hundreds of unique subscription boxes tailored to your interests. Filter by category, price, and read real user reviews to find your perfect match.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Search className="w-5 h-5 mr-2" />
                                Discover Boxes Now
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
                                alt="Subscription Box Discovery Platform Interface"
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
                            Find Your Perfect Box, Effortlessly
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Filter,
                                    title: "Advanced Search & Filters",
                                    description: "Easily narrow down your search by category, price range, shipping location, and more."
                                },
                                {
                                    icon: Sparkles,
                                    title: "Curated Collections",
                                    description: "Explore hand-picked collections for various interests like 'Eco-Friendly', 'For Pet Lovers', or 'Gamer Gear'."
                                },
                                {
                                    icon: MessageCircle,
                                    title: "User Reviews & Ratings",
                                    description: "Read authentic reviews from other subscribers before you commit."
                                },
                                {
                                    icon: Gift,
                                    title: "Exclusive Deals & Coupons",
                                    description: "Access special discounts and coupon codes for many featured boxes."
                                },
                                {
                                    icon: Heart,
                                    title: "Personalized Wishlist",
                                    description: "Save your favorite boxes to a wishlist and get notified of new deals."
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
                            Built for Discovery and Performance
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "Next.js/React",
                                "Tailwind CSS",
                                "Algolia (or Elasticsearch for search)",
                                "Supabase (or Firebase for DB/auth)",
                                "Node.js (for backend/scraping if needed)",
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

                {/* Monetization Model Section */}
                <section className="py-20 px-4 bg-neutral-900">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            How We Support This Platform
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Bringing You the Best Discoveries</h3>
                                <p className="text-neutral-300 mb-4">To keep our discovery platform running and free for users, we use a few methods:</p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: Link, text: "Affiliate Links: When you subscribe to a box through our links, we may earn a small commission at no extra cost to you." },
                                        { icon: Star, text: "Featured Listings: Box companies can choose to feature their boxes for better visibility." },
                                        { icon: Users, text: "Curated Recommendations (Future): We may offer a premium service for highly personalized box recommendations based on your detailed preferences." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <item.icon className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    Partner With Us
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Various Subscription Boxes"
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
                            Connecting You to Your Next Favorite Thing
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We love the joy of discovering something new and exciting. This platform is built to make it easier for everyone to find subscription boxes that match their unique tastes and interests.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Designing effective search and filtering UX</li>
                                <li>Managing and categorizing large datasets of products</li>
                                <li>Implementing affiliate marketing models</li>
                                <li>Building trust through transparent reviews and ratings</li>
                                <li>Web scraping ethics and techniques (if applicable for data gathering)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Unbox Some Happiness?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Start exploring our curated selection of subscription boxes today. Your next favorite discovery is just a click away!
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Box className="w-6 h-6 mr-2" />
                                Explore All Boxes
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                Suggest a Box
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
                        "@type": "WebSite", // Changed from SoftwareApplication
                        name: "Subscription Box Discovery Hub",
                        url: "https://25microsaas.com/projects/subscription-box-discovery", // Updated URL
                        description: "Explore hundreds of unique subscription boxes tailored to your interests. Filter by category, price, and read real user reviews to find your perfect match.",
                        provider: {
                            "@type": "Organization",
                            name: "25 MicroSaaS Challenge" // Assuming this is the provider
                        },
                        // Potential for ItemList if categories/boxes are directly listed on this page
                        // mainEntity: {
                        //     "@type": "ItemList",
                        //     "itemListElement": [
                        //         // { "@type": "ListItem", "position": 1, "name": "Beauty Boxes" },
                        //         // { "@type": "ListItem", "position": 2, "name": "Food Boxes" }
                        //     ]
                        // }
                    })
                }}
            />
        </>
    );
}