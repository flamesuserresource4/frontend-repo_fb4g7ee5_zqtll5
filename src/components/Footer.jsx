import React from 'react'
import { Linkedin } from 'lucide-react'

const links = [
  ['EPOCH', '#'],
  ['ERA', '#'],
  ['EON', '#'],
  ['Raw Material Inventory', '#'],
  ['Supplier Reliability', '#'],
  ['Plant Utilization', '#'],
  ['Direct Material Costs', '#'],
  ['About', '#'],
  ['Why Holocene', '#'],
  ['Careers', '#'],
  ['Contact', '#'],
  ['Blog', '#'],
  ['Legal', '#'],
]

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-blue-200/80">
          {links.map(([label, href], i) => (
            <a key={i} href={href} className="hover:text-white transition">{label}</a>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between text-blue-300/70">
          <div>Copyright © 2025</div>
          <a href="#" aria-label="LinkedIn" className="text-blue-200 hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
