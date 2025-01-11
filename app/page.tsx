import { ArrowRight, Code, Rocket, Users, Calendar, Trophy, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SignUpForm } from "@/components/SignUpForm"
import { ProjectTracker } from "@/components/ProjectTracker"
import { Countdown } from "@/components/Countdown"
import { Newsletter } from "@/components/Newsletter"
import { Statistics } from "@/components/Statistics"
import { Testimonials } from "@/components/Testimonials"
import { Header } from '@/components/Header'
import { addDays, startOfDay, isBefore } from 'date-fns'
import { BackgroundBeams } from "@/components/ui/background-beams"



export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="space-y-32">
        {/* Hero Section */}
        <section className="h-[40rem] w-full bg-brand-blue relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-4xl mx-auto p-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-brand-yellow/90 mb-8">
              25 microSaaS in 50 Weeks
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-center mb-8">
              Transform your ideas into reality, even if you&apos;re not a full-time coder!
            </p>
            <div className="max-w-md mx-auto">
              <SignUpForm />
            </div>
          </div>

          <BackgroundBeams/>
        </section>

        <div className="container  mx-auto px-10 space-y-32">
          {/* Countdown Section */}
          <section className="text-center space-y-8 animate-slide-up">
            <h2 className="text-4xl font-bold text-brand-blue">Next Challenge Starts In</h2>
            <NextProjectCountdown />
          </section>

          {/* Statistics Section */}
          <Statistics />

          {/* Project Tracker */}
          <section className="animate-fade-in">
            <ProjectTracker />
          </section>

          {/* Challenge Explanation */}
          <section className="space-y-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-center text-brand-blue">What&apos;s the Challenge?</h2>
            <p className="text-xl text-center text-brand-gray max-w-3xl mx-auto">
              Build 25 micro Software-as-a-Service (SaaS) projects over the course of 50 weeks.
              Perfect for aspiring entrepreneurs, hobbyist coders, and anyone looking to boost their tech skills!
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="w-12 h-12 text-blue-500" />}
                title="Learn by Doing"
                description="Gain hands-on experience in coding, design, and product development."
              />
              <FeatureCard
                icon={<Rocket className="w-12 h-12 text-blue-500" />}
                title="Launch Real Products"
                description="Turn your ideas into live, functional microSaaS projects."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-blue-500" />}
                title="Join a Community"
                description="Connect with like-minded individuals and get support along the way."
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-white shadow-xl rounded-2xl p-12 space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-brand-blue">Why Participate?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <BenefitItem icon={<Zap className="w-6 h-6 text-blue-500" />} text="Develop a diverse portfolio of projects" />
              <BenefitItem icon={<Code className="w-6 h-6 text-blue-500" />} text="Learn new technologies and best practices" />
              <BenefitItem icon={<Trophy className="w-6 h-6 text-blue-500" />} text="Potentially generate passive income streams" />
              <BenefitItem icon={<Rocket className="w-6 h-6 text-blue-500" />} text="Boost your problem-solving skills" />
              <BenefitItem icon={<Users className="w-6 h-6 text-blue-500" />} text="Network with other aspiring SaaS creators" />
              <BenefitItem icon={<Calendar className="w-6 h-6 text-blue-500" />} text="Get expert guidance and resources" />
            </div>
          </section>

          {/* How it Works */}
          <section className="space-y-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-center text-brand-blue">How it Works</h2>
            <div className="grid md:grid-cols-5 gap-8">
              <StepItem number={1} text="Sign up for the challenge" />
              <StepItem number={2} text="Receive bi-weekly project prompts" />
              <StepItem number={3} text="Build your microSaaS project" />
              <StepItem number={4} text="Share progress & get feedback" />
              <StepItem number={5} text="Launch & move to the next one!" />
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials />

          {/* FAQ Section */}
          <section className="space-y-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-center text-brand-blue">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FAQItem
                question="Do I need to be an experienced programmer to participate?"
                answer="Not at all! This challenge is designed for individuals at all skill levels, including those who are new to coding."
              />
              <FAQItem
                question="How much time do I need to commit each week?"
                answer="We recommend setting aside at least 10-15 hours per week, but you can adjust based on your schedule and goals."
              />
              <FAQItem
                question="What kind of support will I receive?"
                answer="You'll have access to a community forum, bi-weekly live Q&A sessions, and a resource library to help you along the way."
              />
              <FAQItem
                question="Can I use any programming language or framework?"
                answer="Yes, you can use any language or framework you're comfortable with. We provide resources for popular choices, but the choice is yours."
              />
            </div>
          </section>

          {/* Newsletter Section */}
          <Newsletter />

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 rounded-2xl space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join now and turn your coding hobby into a portfolio of real, working products!
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 font-semibold text-lg px-8 py-3">
              Start the 50-Week Challenge <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </div>
      </main>

      <footer className="bg-gray-100 py-12 mt-32">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-4">&copy; 2025 MicroSaaS Challenge. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            <a href="#" className="text-blue-600 hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center space-x-4 group">
      <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{text}</span>
    </div>
  )
}

function StepItem({ number, text }: { number: number, text: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-blue-700 transition-colors duration-300">
        {number}
      </div>
      <p className="text-lg text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{text}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4 text-blue-600">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}

function NextProjectCountdown() {
  const START_DATE = new Date('2025-01-14')
  const DAYS_PER_PROJECT = 14
  const TOTAL_PROJECTS = 25

  const calculateNextProjectStart = () => {
    const today = startOfDay(Date.now())
    let projectStart = START_DATE

    for (let i = 0; i < TOTAL_PROJECTS; i++) {
      if (isBefore(today, projectStart)) {
        return projectStart
      }
      projectStart = addDays(projectStart, DAYS_PER_PROJECT)
    }

    return null // All projects have started
  }

  const nextProjectStart = calculateNextProjectStart()

  if (!nextProjectStart) {
    return <p className="text-2xl text-gray-600">All projects have started!</p>
  }

  return <Countdown targetDate={nextProjectStart.toISOString()} />
}

