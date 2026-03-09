export function Statistics() {
  return (
    <section className="py-12 bg-white rounded-2xl shadow-lg animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatItem number="25" label="AI Agent Projects" />
          <StatItem number="$200+" label="Revenue per Agent/mo" />
          <StatItem number="50" label="Weeks to Build All" />
          <StatItem number="$60K+" label="Portfolio Revenue/yr" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
}
