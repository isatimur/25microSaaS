"use client";

import {
  ArrowRight,
  Bot,
  Rocket,
  Users,
  DollarSign,
  Trophy,
  Zap,
  CheckCircle2,
  Loader2,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignUpForm } from "@/components/SignUpForm";
import { ProjectTracker } from "@/components/ProjectTracker";
import { Countdown } from "@/components/Countdown";
import { Newsletter } from "@/components/Newsletter";
import { Statistics } from "@/components/Statistics";
import { Header } from "@/components/Header";
import { addDays, startOfDay, isBefore } from "date-fns";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { projects } from "@/lib/projects";

const statusConfig = {
  launched: {
    icon: CheckCircle2,
    color: "text-green-400",
  },
  "in-progress": {
    icon: Loader2,
    color: "text-yellow-400",
  },
  upcoming: { icon: Clock, color: "text-neutral-500" },
};

export default function LandingPage() {
  const featuredProjects = projects.slice(0, 9);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="space-y-32">
        {/* Hero Section */}
        <section className="h-[40rem] w-full bg-brand-blue relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-4xl mx-auto p-4 relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white text-sm">
                100% Agentic AI
              </span>
              <span className="px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-sm">
                $200+/mo per agent
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-brand-yellow/90 mb-6">
              25 AI Agents in 50 Weeks
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-center mb-8">
              Building 25 autonomous AI agents that generate real revenue.
              Each one solves a $200+/month problem using agentic AI.
            </p>
            <div className="max-w-md mx-auto">
              <SignUpForm />
            </div>
          </div>

          <BackgroundBeams />
        </section>

        <div className="container mx-auto px-10 space-y-32">
          {/* Countdown Section */}
          <section className="text-center space-y-8 animate-slide-up">
            <h2 className="text-4xl font-bold text-brand-blue">
              Next AI Agent Launch
            </h2>
            <NextProjectCountdown />
          </section>

          {/* Statistics Section */}
          <Statistics />

          {/* Project Tracker */}
          <section className="animate-fade-in">
            <ProjectTracker />
          </section>

          {/* What We Build */}
          <section className="space-y-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-center text-brand-blue">
              What Are AI Agents?
            </h2>
            <p className="text-xl text-center text-brand-gray max-w-3xl mx-auto">
              Agentic AI goes beyond chatbots. These are autonomous systems that research,
              decide, and act on your behalf — writing content, managing outreach, analyzing
              data, and more. Each agent we build is a standalone micro-SaaS business.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Bot className="w-12 h-12 text-blue-500" />}
                title="Autonomous Agents"
                description="AI that doesn't just respond — it researches, plans, and executes multi-step tasks independently."
              />
              <FeatureCard
                icon={<DollarSign className="w-12 h-12 text-blue-500" />}
                title="Revenue-First Design"
                description="Every project targets $200+/month. Real pricing, real customers, real revenue."
              />
              <FeatureCard
                icon={<Rocket className="w-12 h-12 text-blue-500" />}
                title="Ship in 2 Weeks"
                description="Each agent goes from idea to launched SaaS in a 2-week sprint. Fast, focused, profitable."
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-white shadow-xl rounded-2xl p-12 space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-brand-blue">
              Why AI Agents Are the Future
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <BenefitItem
                icon={<TrendingUp className="w-6 h-6 text-blue-500" />}
                text="AI agent market projected at $65B by 2030"
              />
              <BenefitItem
                icon={<Bot className="w-6 h-6 text-blue-500" />}
                text="LangChain, CrewAI, and AutoGPT are unlocking new possibilities"
              />
              <BenefitItem
                icon={<DollarSign className="w-6 h-6 text-blue-500" />}
                text="Each agent replaces $500-5,000/mo of human labor"
              />
              <BenefitItem
                icon={<Zap className="w-6 h-6 text-blue-500" />}
                text="GPT-4, Claude, and open-source models are production-ready"
              />
              <BenefitItem
                icon={<Users className="w-6 h-6 text-blue-500" />}
                text="Solopreneurs can build & run multiple AI businesses"
              />
              <BenefitItem
                icon={<Trophy className="w-6 h-6 text-blue-500" />}
                text="First movers in AI niches capture massive market share"
              />
            </div>
          </section>

          {/* How it Works */}
          <section className="space-y-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-center text-brand-blue">
              Our Build Process
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              <StepItem number={1} text="Identify a $200+/mo problem" />
              <StepItem number={2} text="Design the AI agent architecture" />
              <StepItem number={3} text="Build with LangChain + GPT-4" />
              <StepItem number={4} text="Launch & get first paying users" />
              <StepItem number={5} text="Optimize revenue & move on" />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-center text-brand-blue">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FAQItem
                question="What makes these 'agentic' AI?"
                answer="Unlike simple chatbots, these AI agents autonomously plan, research, and execute multi-step tasks. They use tools, make decisions, and complete complex workflows without human intervention."
              />
              <FAQItem
                question="Can each agent really make $200+/month?"
                answer="Yes. Each project targets a specific pain point where businesses currently pay $500-5,000/mo for human labor. An AI agent that replaces even 10% of that is worth $200+/mo to customers."
              />
              <FAQItem
                question="What tech stack do you use?"
                answer="Next.js + TypeScript for the frontend, LangChain/CrewAI for agent orchestration, OpenAI GPT-4 for intelligence, Supabase for data, and Stripe for payments. All deployed on Vercel."
              />
              <FAQItem
                question="How do I follow along or participate?"
                answer="Subscribe to our newsletter for weekly build logs and revenue updates. Each project is documented start to finish — from idea validation to first paying customer."
              />
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-20 px-4" id="newsletter">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-blue">
                  Follow the Build Journey
                </h2>
                <p className="text-xl text-center text-neutral-400 mb-8">
                  Get weekly updates: what we shipped, revenue numbers, and lessons learned
                  building 25 AI agents.
                </p>
                <div className="mt-8">
                  <Newsletter />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  The AI Agents
                </h2>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-brand-blue hover:text-brand-yellow transition-colors font-medium"
                >
                  View All 25 Agents
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => {
                  const Icon = project.icon;
                  const cfg = statusConfig[project.status];
                  const StatusIcon = cfg.icon;
                  return (
                    <Link
                      key={project.id}
                      href={project.projectPageUrl}
                      className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 hover:bg-neutral-900/80 transition-colors"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Icon className="w-5 h-5 text-brand-yellow" />
                            <span className="text-brand-yellow text-sm font-medium">
                              #{project.number}
                            </span>
                            <span className="text-neutral-400 text-sm">
                              {project.type}
                            </span>
                          </div>
                          <StatusIcon className={`w-4 h-4 ${cfg.color}`} />
                        </div>
                        <h3 className="text-xl font-semibold mb-1 text-neutral-50 group-hover:text-gradient transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-500 italic mb-3">{project.tagline}</p>
                        <p className="text-neutral-400 text-sm line-clamp-2">
                          {project.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <span className="text-green-400 flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            {project.monthlyRevenuePotential}/mo
                          </span>
                          <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                >
                  See All 25 AI Agents
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 rounded-2xl space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">
              Build AI Agents That Print Money
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join the challenge and watch us build 25 AI agents, each generating
              $200+/month. Follow along, learn the playbook, and build your own.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 font-semibold text-lg px-8 py-3"
            >
              Join the AI Agent Challenge{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </div>
      </main>

      <footer className="bg-gray-100 py-12 mt-32">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-4">
            &copy; 2025 AI Agent Challenge by MicroSaaS. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-4 group">
      <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{text}</span>
    </div>
  );
}

function StepItem({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-blue-700 transition-colors duration-300">
        {number}
      </div>
      <p className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{text}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4 text-blue-600">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

function NextProjectCountdown() {
  const START_DATE = new Date("2025-01-14");
  const DAYS_PER_PROJECT = 14;
  const TOTAL_PROJECTS = 25;

  const calculateNextProjectStart = () => {
    const today = startOfDay(Date.now());
    let projectStart = START_DATE;
    for (let i = 0; i < TOTAL_PROJECTS; i++) {
      if (isBefore(today, projectStart)) return projectStart;
      projectStart = addDays(projectStart, DAYS_PER_PROJECT);
    }
    return null;
  };

  const nextProjectStart = calculateNextProjectStart();
  if (!nextProjectStart) {
    return <p className="text-2xl text-gray-600">All 25 agents launched!</p>;
  }
  return <Countdown targetDate={nextProjectStart.toISOString()} />;
}
