export function Statistics() {
  return (
    <section className="py-12 bg-white rounded-2xl shadow-lg animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem number="500+" label="Active Participants" />
          <StatItem number="12,500+" label="Projects Launched" />
          <StatItem number="$1M+" label="Revenue Generated" />
        </div>
      </div>
    </section>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-xl text-gray-600">{label}</div>
    </div>
  )
}

