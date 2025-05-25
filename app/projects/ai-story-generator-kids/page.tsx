"use client";

import { Palette, BookOpen, UserPlus, Sparkles, Bot, Printer, Gift, BookMarked, Library, Wand2 } from "lucide-react"; // Removed ArrowRight, Star, Cloud, Bell, Lock as they are unused. Palette was already imported and is used.
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
                            <span className="text-neutral-400">Creative AI Tool</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            AI Personalized Story Generator for Kids
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Unlock a world of imagination! Create unique, AI-generated stories for your child by choosing their name, favorite things, and a special theme.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <BookOpen className="w-5 h-5 mr-2" />
                                Create a Story Now
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
                                alt="AI Story Generator for Kids Interface showing story creation form"
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
                            Endless Adventures at Your Fingertips
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: UserPlus,
                                    title: "Personalized Characters",
                                    description: "Make your child the star of their own story! Add their name and friends."
                                },
                                {
                                    icon: Sparkles,
                                    title: "Choose Interests & Themes",
                                    description: "Select from dinosaurs, space, magic, friendship, courage, and more to shape the tale."
                                },
                                {
                                    icon: Bot,
                                    title: "Unique AI-Generated Content",
                                    description: "Every story is crafted by AI, ensuring a fresh and original adventure each time."
                                },
                                {
                                    icon: Palette, // Palette is already imported
                                    title: "Age-Appropriate Language",
                                    description: "Stories are tailored to be suitable and engaging for different age groups."
                                },
                                {
                                    icon: Printer,
                                    title: "Save & Print Stories (Premium)",
                                    description: "Keep your favorite generated stories to read again and again."
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
                            Built with Imagination and Code
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "React/Next.js",
                                "Tailwind CSS",
                                "Python/Flask (for AI backend)",
                                "OpenAI API (or similar LLM for story generation)",
                                "Supabase/Firebase (for user accounts, saved stories)",
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

                {/* Pricing & Story Packs Section */}
                <section className="py-20 px-4 bg-neutral-900">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Choose Your Storytelling Adventure
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Simple Plans for Endless Fun</h3>
                                <p className="text-neutral-300 mb-4">Start creating stories for free, or subscribe for more features and unlimited tales.</p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: Gift, text: "Free Explorer: Generate 1-2 free stories per month to try it out." },
                                        { icon: BookMarked, text: "Storyteller Plus (Subscription): Unlimited stories, save/print stories, access to AI-generated illustrations (coming soon)." },
                                        { icon: Library, text: "Story Starters Library (Subscription): Access a growing library of pre-written story prompts and ideas." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <item.icon className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    View Plans & Pricing
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Examples of AI-generated story illustrations for kids"
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
                            Fostering Creativity, One Story at a Time
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We believe in the power of stories to educate, entertain, and inspire. This tool is designed to make storytelling accessible and exciting for every child and parent.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Prompt engineering for creative and coherent AI text generation</li>
                                <li>Designing for a young audience (UI/UX)</li>
                                <li>Content filtering and safety for AI-generated kid&apos;s content</li>
                                <li>Managing costs of LLM API calls for a freemium product</li>
                                <li>Potential for AI image generation integration</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Write Your Child&apos;s Next Favorite Story?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Start the adventure today and watch your child&apos;s imagination soar with a story made just for them.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Wand2 className="w-6 h-6 mr-2" />
                                Start Creating Now
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                See Example Stories
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
                        name: "AI Personalized Story Generator for Kids",
                        applicationCategory: "EntertainmentApplication", // Or "EducationApplication"
                        operatingSystem: "Web",
                        url: "https://25microsaas.com/projects/ai-story-generator-kids", // Updated URL
                        offers: {
                            "@type": "AggregateOffer",
                            lowPrice: "0", // Free stories
                            highPrice: "19.99", // Placeholder for highest plan (e.g. annual)
                            priceCurrency: "USD",
                            offers: [
                                { "@type": "Offer", name: "Free Explorer", price: "0", priceCurrency: "USD", description: "Generate 1-2 free stories per month." },
                                { "@type": "Offer", name: "Storyteller Plus", price: "9.99", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", billingIncrement: "Month" }, description: "Unlimited stories, save/print, AI illustrations (coming soon)." } // Example price
                            ]
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.8", // Placeholder
                            ratingCount: "150"   // Placeholder
                        },
                        description: "Unlock a world of imagination! Create unique, AI-generated stories for your child by choosing their name, favorite things, and a special theme.",
                        featureList: [
                            "Personalized Characters (child&apos;s name, friends)",
                            "Choose Interests & Themes (dinosaurs, space, magic, etc.)",
                            "Unique AI-Generated Content for each story",
                            "Age-Appropriate Language",
                            "Save & Print Stories (Premium Feature)"
                        ],
                        releaseNotes: "Launch of the AI Personalized Story Generator for Kids."
                    })
                }}
            />
        </>
    );
}