import React from 'react'
import { ClipboardCheck, Rocket, Users, AlertTriangle } from 'lucide-react'

const points = [
  'MRP accuracy from live email signals',
  'AI agents reading systems + emails',
  '48h confirmations, no integrations',
  '30–50% fewer expedites',
  "Suppliers don’t need to log in",
  'Fix issues before escalation',
]

const cards = [
  { title: 'Fast confirmations', icon: ClipboardCheck },
  { title: 'Early risk flags', icon: AlertTriangle },
  { title: 'No supplier onboarding', icon: Users },
  { title: 'Issue routing automation', icon: Rocket },
]

export default function SupplyPlanning() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_10%_20%,rgba(59,130,246,0.12),transparent),radial-gradient(800px_400px_at_90%_80%,rgba(147,51,234,0.12),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PO-level truth without supplier portals</h2>
            <ul className="space-y-3 text-blue-200/90">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map(({ title, icon: Icon }, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:bg-white/10 transition">
                <Icon className="w-6 h-6 text-emerald-400" />
                <p className="mt-4 text-blue-100 font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
