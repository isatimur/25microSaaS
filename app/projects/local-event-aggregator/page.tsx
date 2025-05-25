/* eslint-disable react/no-unescaped-entities */
"use client";

import { Star, MapPin, Search, CalendarDays, Users, Mail, Newspaper, Megaphone, Building, Heart, CalendarSearch, MailOpen } from "lucide-react"; // Removed ArrowRight, Cloud, Bell, Palette, Lock as they are unused.
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
                            <span className="text-brand-yellow mr-2">Project #6</span>
                            <span className="text-neutral-400">Community Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            Your City&apos;s Event Hub
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Discover the best local events, from concerts and workshops to meetups and markets. Never miss out on what&apos;s happening in your area!
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <MapPin className="w-5 h-5 mr-2" />
                                Find Events Near You
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
                                alt="Local Event Aggregator Platform Interface"
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
                            Explore Your Local Scene
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Search,
                                    title: "Comprehensive Event Search",
                                    description: "Easily find events by date, category, location, or keyword."
                                },
                                {
                                    icon: CalendarDays,
                                    title: "Up-to-Date Listings",
                                    description: "We aggregate events from multiple sources to provide fresh and current information."
                                },
                                {
                                    icon: Users,
                                    title: "Community Submissions",
                                    description: "Local organizers can easily submit their events to reach a wider audience."
                                },
                                {
                                    icon: Mail,
                                    title: "Weekly Newsletter",
                                    description: "Subscribe for a curated list of the week&apos;s top events delivered to your inbox."
                                },
                                {
                                    icon: Star,
                                    title: "Featured Events & Venues",
                                    description: "Discover highlighted events and popular local venues."
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
                            Connecting Communities with Technology
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "Next.js/React",
                                "Tailwind CSS",
                                "Mapbox/Leaflet (for map views)",
                                "Node.js/Python (for aggregation/backend)",
                                "PostgreSQL (with PostGIS for geo-queries)",
                                "SendGrid (or similar for newsletters)",
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

                {/* Monetization & Support Section */}
                <section className="py-20 px-4 bg-neutral-900">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Keeping Our Local Hub Thriving
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">How We Operate</h3>
                                <p className="text-neutral-300 mb-4">Our goal is to connect our community. Here’s how we support the platform:</p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: Newspaper, text: "Premium Newsletter: Subscribers get early access, exclusive content, or discounts." },
                                        { icon: Megaphone, text: "Featured Event Listings: Organizers can pay a small fee to highlight their events." },
                                        { icon: Building, text: "Local Business Sponsorships: Local businesses can sponsor newsletter sections or website categories." },
                                        { icon: Heart, text: "Community Donations (Optional): Users who love the service can contribute." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <item.icon className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    Advertise With Us
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Local Community Event Promotion"
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
                            Bringing People Together, Locally
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We're passionate about local communities and the events that make them vibrant. This platform is our way of helping people discover and connect with what's happening right in their neighborhood.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Aggregating data from diverse online sources (APIs, web scraping)</li>
                                <li>Geospatial data management and search</li>
                                <li>Building effective newsletter subscription and delivery systems</li>
                                <li>Working with local event organizers and businesses</li>
                                <li>Designing for community engagement and local discovery</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Don&apos;t Miss Out on What&apos;s Next!
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Explore events happening in your city and subscribe to our newsletter to stay in the loop.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <CalendarSearch className="w-6 h-6 mr-2" />
                                Browse Local Events
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                <MailOpen className="w-6 h-6 mr-2" />
                                Subscribe to Newsletter
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
                        "@type": "WebSite",
                        name: "Your City's Event Hub",
                        url: "https://25microsaas.com/projects/local-event-aggregator", // Updated URL
                        description: "Discover the best local events, from concerts and workshops to meetups and markets. Never miss out on what's happening in your area!",
                        provider: {
                            "@type": "Organization",
                            name: "25 MicroSaaS Challenge"
                        },
                        potentialAction: {
                            "@type": "SearchAction",
                            target: "https://25microsaas.com/projects/local-event-aggregator/search?q={search_term_string}", // Example search URL
                            "query-input": "required name=search_term_string"
                        }
                    })
                }}
            />
        </>
    );
}