import React from 'react'
import { Map, FileCheck, Route, Crosshair } from 'lucide-react'

const bullets = [
  'AI agents track exceptions',
  'Auto-capture forwarder emails',
  'Documentation checks for customs',
  'Daily dock load forecasts',
  'Heal transit deviations before they mislead',
  'Pickup-based triggering logic',
]

export default function InboundTransport() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_20%_10%,rgba(6,182,212,0.12),transparent),radial-gradient(800px_400px_at_80%_90%,rgba(99,102,241,0.12),transparent)]" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Inbound transport that runs itself</h2>
          <ul className="space-y-3 text-blue-200/90">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white/5 p-4 text-blue-100 flex flex-col items-center">
                <Map className="w-8 h-8 text-emerald-400" />
                <span className="mt-2 text-sm">Live Map</span>
              </div>
              <div className="rounded-xl bg-white/5 p-4 text-blue-100 flex flex-col items-center">
                <Route className="w-8 h-8 text-blue-400" />
                <span className="mt-2 text-sm">Timeline</span>
              </div>
              <div className="rounded-xl bg-white/5 p-4 text-blue-100 flex flex-col items-center">
                <FileCheck className="w-8 h-8 text-purple-400" />
                <span className="mt-2 text-sm">Docs</span>
              </div>
            </div>
            <div className="mt-6 h-2 rounded-full bg-gradient-to-r from-emerald-400/60 via-blue-400/60 to-purple-400/60" />
            <div className="mt-2 flex items-center gap-2 text-blue-200/80 text-sm">
              <Crosshair className="w-4 h-4 text-emerald-400" />
              Agents scanning emails for exceptions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
