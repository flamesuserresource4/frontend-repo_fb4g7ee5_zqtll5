import React from 'react'

const products = [
  {
    name: 'EPOCH — daily execution',
    points: [
      'Solve inbound challenges',
      'No supplier logins or integration overhead',
      'AI agents automate reminders, validations, checks',
      'Catch delays early',
    ],
  },
  {
    name: 'ERA — mid-term planning',
    points: [
      'Align constraints + forecasts',
      'Multi-scenario planning',
      'Keep teams connected',
    ],
  },
  {
    name: 'EON — long-term risk visibility',
    points: [
      'Highlights dependencies',
      'Strategic foresight',
      'Identify long-term risks',
    ],
  },
]

function Card({ name, points }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:bg-white/10 transition">
      <h3 className="text-white font-semibold text-xl">{name}</h3>
      <ul className="mt-4 space-y-2 text-blue-200/90">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProductSuite() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Three Solutions (Product Suite)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
