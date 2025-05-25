"use client";

import { Globe, GraduationCap, Edit3, Users, DollarSign, BarChart3, Rocket, School, Award, Edit } from "lucide-react"; // Removed ArrowRight, Star, Cloud, Bell, Palette, Lock as they are unused. Globe is used.
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
                            <span className="text-brand-yellow mr-2">Project #9</span>
                            <span className="text-neutral-400">Creator SaaS Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
                            Niche Online Course Platform Builder
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
                            Empower yourself to teach online! Our platform makes it simple to create, market, and sell your unique courses to a dedicated audience.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Start Building Your Course
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
                                alt="Niche Online Course Platform Builder dashboard showing course creation interface"
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
                            Everything You Need to Teach Successfully
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Edit3,
                                    title: "Intuitive Course Builder",
                                    description: "Easily upload videos, PDFs, quizzes, and text lessons with our drag-and-drop interface."
                                },
                                {
                                    icon: Users,
                                    title: "Student Management",
                                    description: "Track student progress, manage enrollments, and communicate with your learners."
                                },
                                {
                                    icon: DollarSign,
                                    title: "Integrated Payments",
                                    description: "Connect Stripe or PayPal to sell your courses with one-time payments or subscriptions."
                                },
                                {
                                    icon: Globe,
                                    title: "Customizable Course Pages",
                                    description: "Create beautiful, branded landing pages for your courses to attract students."
                                },
                                {
                                    icon: BarChart3,
                                    title: "Sales & Analytics",
                                    description: "Monitor your course sales, revenue, and student engagement with simple analytics."
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
                            Reliable Technology for Educators
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {[
                                "Next.js/React",
                                "Tailwind CSS",
                                "Node.js/Express (or Ruby on Rails)",
                                "PostgreSQL/MongoDB",
                                "Stripe API",
                                "Vimeo/Wistia API (for video hosting option)",
                                "Vercel/Heroku"
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

                {/* Pricing Tiers Section */}
                <section className="py-20 px-4 bg-neutral-900">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
                            Plans for Every Creator
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold mb-4">Choose the Right Fit for Your Teaching Business</h3>
                                <p className="text-neutral-300 mb-4">Start for free and scale as you grow. All paid plans offer zero transaction fees on your sales.</p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: Rocket, text: "Starter (Free Tier): 1 course, up to 25 students, 5% transaction fee." },
                                        { icon: School, text: "Creator Plan (Subscription): Unlimited courses & students, custom domain, basic quizzing, 0% transaction fee." },
                                        { icon: Award, text: "Pro Plan (Subscription): All Creator features plus advanced quizzing, certificates, affiliate tools, priority support." }
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <item.icon className="w-5 h-5 text-brand-yellow mr-2 mt-1 flex-shrink-0" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity">
                                    Compare All Plans
                                </button>
                            </div>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/premium-feature.png"
                                    alt="Example of a course sales dashboard"
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
                            Empowering Niche Educators
                        </h2>
                        <div className="max-w-4xl mx-auto prose prose-invert">
                            <p className="text-lg text-neutral-300">
                                We believe everyone has valuable knowledge to share. Our platform is designed to lower the barrier to entry for creating and selling online courses, especially for those focusing on specific niches.
                            </p>
                            <h3 className="text-xl font-semibold mt-8 mb-4">Key Learnings</h3>
                            <ul className="space-y-2">
                                <li>Building a multi-tenant SaaS application</li>
                                <li>Integrating with payment gateways securely</li>
                                <li>Designing a flexible course and lesson structure</li>
                                <li>Video processing and hosting considerations</li>
                                <li>Balancing feature richness with ease of use for non-technical creators</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
                            Ready to Share Your Passion & Expertise?
                        </h2>
                        <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-12">
                            Join our community of creators and start building your online teaching business today. It&apos;s easier than you think!
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Edit className="w-6 h-6 mr-2" />
                                Sign Up & Create a Course
                            </a>
                            <a
                                href="#" // Link to be updated
                                className="inline-flex items-center px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
                            >
                                See Platform Demo
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
                        name: "Niche Online Course Platform Builder",
                        applicationCategory: "EducationalApplication",
                        operatingSystem: "Web",
                        url: "https://25microsaas.com/projects/niche-course-platform-builder", // Updated URL
                        offers: {
                            "@type": "AggregateOffer",
                            lowPrice: "0", // Starter tier is free
                            highPrice: "99", // Placeholder for highest price (e.g. annual pro)
                            priceCurrency: "USD",
                            offers: [
                                { "@type": "Offer", name: "Starter (Free Tier)", price: "0", priceCurrency: "USD", description: "1 course, up to 25 students, 5% transaction fee." },
                                { "@type": "Offer", name: "Creator Plan", price: "49", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", billingIncrement: "Month" }, description: "Unlimited courses & students, custom domain, 0% transaction fee." }, // Example price
                                { "@type": "Offer", name: "Pro Plan", price: "99", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", billingIncrement: "Month" }, description: "All Creator features plus advanced quizzing, certificates, affiliate tools." } // Example price
                            ]
                        },
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.7", // Placeholder
                            ratingCount: "120"   // Placeholder
                        },
                        description: "Empower yourself to teach online! Our platform makes it simple to create, market, and sell your unique courses to a dedicated audience.",
                        featureList: [
                            "Intuitive Course Builder",
                            "Student Management",
                            "Integrated Payments (Stripe, PayPal)",
                            "Customizable Course Pages",
                            "Sales & Analytics",
                            "Freemium and Subscription Tiers"
                        ],
                        releaseNotes: "Launch of the Niche Online Course Platform Builder."
                    })
                }}
            />
        </>
    );
}