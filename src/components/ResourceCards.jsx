import React from 'react'

const resources = [
  { title: 'Avoid stockouts' },
  { title: 'Proactive planning beats firefighting' },
  { title: 'How to assess ROI in supply chain visibility' },
]

export default function ResourceCards() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Resources</h2>
          <a href="#" className="text-emerald-300 hover:text-emerald-200">View all →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <a key={i} href="#" className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl hover:bg-white/10 transition block">
              <div className="h-36 rounded-xl bg-gradient-to-br from-blue-600/30 to-emerald-500/30 border border-white/10" />
              <h3 className="mt-4 text-white font-semibold">{r.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
