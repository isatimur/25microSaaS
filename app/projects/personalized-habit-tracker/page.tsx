"use client";

import { ArrowRight, Star, ListChecks, BellRing, TrendingUp, Brain, Sparkles } from "lucide-react"; // Removed Cloud, Bell, Palette, Lock as they are unused.
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
                            <span className="text-brand-yellow mr-2">Project #4</span>
                            <span className="text-neutral-400">Mobile Web App</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            Personalized Habit Tracker & Coach
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Build lasting positive habits and achieve your personal goals with our intelligent tracker and AI-powered motivational coach.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Start Tracking Free
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
                                alt="Personalized Habit Tracker App Interface Preview"
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
                            Features to Help You Succeed
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: ListChecks,
                                    title: "Easy Habit Logging",
                                    description: "Quickly log your daily habits with a simple and intuitive interface."
                                },
                                {
                                    icon: BellRing,
                                    title: "Smart Reminders",
                                    description: "Set customizable reminders to stay on track throughout your day."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Progress Visualization",
                                    description: "Track your streaks and see your progress over time with beautiful charts and stats."
                                },
                                {
                                    icon: Brain,
                                    title: "AI-Powered Insights",
                                    description: "Get personalized tips and motivation from our AI coach based on your progress."
                                },
                                {
                                    icon: Sparkles,
                                    title: "Motivational Messages",
                                    description: "Receive daily affirmations and motivational quotes to keep you inspired."
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
                            Built for a Seamless Mobile Experience
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "React/Next.js (PWA focus)",
                                "Tailwind CSS",
                                "Firebase (for auth & DB)",
                                "Node.js (for backend logic/AI integration)",
                                "TensorFlow.js (or similar for on-device AI)",
                                "Push Notifications API",
                                "Vercel/Netlify"
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
                            Unlock Your Full Potential with Premium
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Go Beyond Basic Tracking</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Track unlimited habits",
                                        "Advanced analytics & reports (e.g., habit correlations, best times)",
                                        "Unlock all AI Coach features (deeper insights, custom goal setting)",
                                        "Cloud backup & sync across devices",
                                        "Export your data",
                                        "Access to exclusive themes & sounds"
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
                                    alt="Habit Tracker Premium Analytics View"
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
                            Empowering Your Personal Growth Journey
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We believe that small, consistent actions lead to big results. This app is designed to be your supportive partner in building a better you, one habit at a time.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Designing for mobile-first user experience</li>
                                <li>Implementing effective notification strategies</li>
                                <li>Leveraging browser storage for offline capabilities (PWA)</li>
                                <li>Integrating simple AI for personalized feedback</li>
                                <li>Balancing user privacy with data-driven insights</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Build Habits That Stick?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Take the first step towards achieving your goals. Sign up free and discover the power of personalized habit tracking.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Sign Up - It&apos;s Free
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                How It Works
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
                        name: "Personalized Habit Tracker & Coach",
                        applicationCategory: "LifestyleApplication",
                        operatingSystem: "Web (Mobile-Optimized)",
                        url: "https://25microsaas.com/projects/personalized-habit-tracker", // Assuming this will be the URL
                        offers: {
                            "@type": "Offer",
                            price: "0", // For the free tier
                            priceCurrency: "USD",
                            description: "Free basic habit tracking. Premium for unlimited habits, AI coach, and advanced features."
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.6", // Placeholder
                            ratingCount: "180"   // Placeholder
                        },
                        description: "Build lasting positive habits and achieve your personal goals with our intelligent tracker and AI-powered motivational coach.",
                        featureList: [
                            "Easy Habit Logging",
                            "Smart Reminders",
                            "Progress Visualization",
                            "AI-Powered Insights",
                            "Motivational Messages",
                            "Freemium model with Premium AI Coach"
                        ],
                        releaseNotes: "Launch of the Personalized Habit Tracker & Coach app."
                    })
                }}
            />
        </>
    );
}