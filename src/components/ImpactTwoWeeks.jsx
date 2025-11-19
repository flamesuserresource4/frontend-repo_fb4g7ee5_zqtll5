import React from 'react'

const steps = [
  {
    title: 'Connect without disruption',
    desc: 'No supplier or forwarder onboarding, no integrations.',
  },
  {
    title: 'Configure with purpose',
    desc: 'Align workflows, logic, templates.',
  },
  {
    title: 'Launch with support',
    desc: 'Fast rollout, pilot → scale.',
  },
]

export default function ImpactTwoWeeks() {
  return (
    <section id="pilot" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Impact in 2 Weeks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-emerald-300">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-300/30 text-emerald-200 font-semibold">{i + 1}</span>
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-blue-200/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
