import Image from 'next/image'

export function Testimonials() {
  return (
    <section className="space-y-12 animate-fade-in">
      <h2 className="text-4xl font-bold text-center text-blue-600">What Participants Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="This challenge pushed me to finally turn my ideas into reality. I've learned so much!"
          author="Sarah K., Web Developer"
          image="/placeholder.svg?height=100&width=100"
        />
        <TestimonialCard 
          quote="As a non-coder, I was hesitant at first. But the community support made all the difference."
          author="Mike R., Entrepreneur"
          image="/placeholder.svg?height=100&width=100"
        />
        <TestimonialCard 
          quote="I've launched 3 profitable microSaaS products thanks to this challenge. It's been life-changing!"
          author="Emily L., Designer"
          image="/placeholder.svg?height=100&width=100"
        />
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, image }: { quote: string, author: string, image: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow duration-300">
      <p className="italic mb-6 text-gray-600">&quot;{quote}&quot;</p>
      <div className="flex items-center">
        <Image src={image} alt={author} width={50} height={50} className="rounded-full mr-4" />
        <span className="font-semibold text-gray-800">{author}</span>
      </div>
    </div>
  )
}

