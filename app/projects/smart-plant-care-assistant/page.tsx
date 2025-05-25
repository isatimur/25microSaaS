"use client";

import { Leaf, ScanLine, CalendarClock, BellRing, SearchHeart, SunMoon, Sprout, Flower2, NotebookText, UserRoundPlus } from "lucide-react"; // Removed ArrowRight, Star, Cloud, Bell, Palette, Lock as they are unused.
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
                            <span className="text-brand-yellow mr-2">Project #10</span>
                            <span className="text-neutral-400">Utility Web App</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            Smart Plant Care Assistant
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Bring your houseplants to life! Get personalized care schedules, timely reminders, AI-powered diagnostics, and identify new additions with ease.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Leaf className="w-5 h-5 mr-2" />
                                Get Started - Grow Happier Plants
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
                                alt="Smart Plant Care Assistant app dashboard showing plant list and care reminders"
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
                            Nurture Your Plants Like a Pro
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: ScanLine,
                                    title: "Plant Identification (Beta)",
                                    description: "Upload a photo and let our AI help you identify your plants."
                                },
                                {
                                    icon: CalendarClock,
                                    title: "Personalized Care Schedules",
                                    description: "Custom watering, fertilizing, and misting schedules based on plant type and conditions."
                                },
                                {
                                    icon: BellRing, // Assuming BellRing is the correct icon name from lucide-react
                                    title: "Timely Reminders",
                                    description: "Never forget to water again! Get convenient reminders for all care tasks."
                                },
                                {
                                    icon: SearchHeart,
                                    title: "AI Plant Doctor (Premium)",
                                    description: "Worried about a droopy leaf? Get AI-powered diagnostics and care advice."
                                },
                                {
                                    icon: SunMoon,
                                    title: "Light & Placement Tips",
                                    description: "Learn the best lighting conditions for your plants to thrive."
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
                            Green Tech for Your Green Friends
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "React/Next.js (PWA)",
                                "Tailwind CSS",
                                "Firebase/Supabase (for user data, plant DB)",
                                "Python/Flask (for AI identification/diagnostics backend)",
                                "TensorFlow Lite/ONNX (for on-device model option)",
                                "Push API (for reminders)",
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

                {/* Go Premium for Greener Thumbs Section */}
                <section className="py-20 px-4 bg-neutral-900">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Unlock Advanced Plant Care
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Supercharge Your Plant Parenting Skills</h3>
                                <p className="text-neutral-300 mb-4">Our free plan helps you get started. Go premium for more plants and powerful AI features.</p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: Sprout, text: "Free Plan: Manage up to 5 plants, basic schedules & reminders." },
                                        { icon: Flower2, text: "Premium Plan (Subscription): Unlimited plants, AI Plant Doctor, seasonal care guides, weather integration (for outdoor plants), advanced analytics." },
                                        { icon: NotebookText, text: "Plant Journal (Premium): Keep detailed notes and photos of your plant's progress." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <item.icon className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    Explore Premium Features
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Comparison of free vs premium plant care features"
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
                            Cultivating a Community of Plant Lovers
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We're passionate about making plant care easy and enjoyable for everyone, from beginners to experienced horticulturalists. This app combines our love for plants with smart technology.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Building image recognition models for plant identification</li>
                                <li>Developing complex scheduling and reminder systems</li>
                                <li>Creating a user-friendly interface for managing plant collections</li>
                                <li>Integrating AI for diagnostic purposes</li>
                                <li>Data privacy for user-uploaded plant images and data</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Watch Your Plants Flourish?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Sign up for the Smart Plant Care Assistant and give your plants the love and attention they deserve.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <UserRoundPlus className="w-6 h-6 mr-2" />
                                Sign Up Free
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                Learn More About Plant Care
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
                        name: "Smart Plant Care Assistant",
                        applicationCategory: "LifestyleApplication",
                        operatingSystem: "Web (Mobile-Optimized PWA)",
                        url: "https://25microsaas.com/projects/smart-plant-care-assistant", // Updated URL
                        offers: {
                            "@type": "AggregateOffer",
                            lowPrice: "0", // Free plan
                            highPrice: "4.99", // Placeholder for monthly premium
                            priceCurrency: "USD",
                            offers: [
                                { "@type": "Offer", name: "Free Plan", price: "0", priceCurrency: "USD", description: "Manage up to 5 plants, basic schedules & reminders." },
                                { "@type": "Offer", name: "Premium Plan", price: "4.99", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", billingIncrement: "Month" }, description: "Unlimited plants, AI Plant Doctor, seasonal care guides, advanced analytics, plant journal." } // Example price
                            ]
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.5", // Placeholder
                            ratingCount: "85"   // Placeholder
                        },
                        description: "Bring your houseplants to life! Get personalized care schedules, timely reminders, AI-powered diagnostics, and identify new additions with ease.",
                        featureList: [
                            "Plant Identification (Beta)",
                            "Personalized Care Schedules",
                            "Timely Reminders",
                            "AI Plant Doctor (Premium)",
                            "Light & Placement Tips",
                            "Plant Journal (Premium)"
                        ],
                        releaseNotes: "Initial launch of the Smart Plant Care Assistant."
                    })
                }}
            />
        </>
    );
}