import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function GlassCard({ delay = 0, rotate = 0, blur = 'blur-lg' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${blur}`}
      aria-hidden
    >
      <motion.div
        initial={{ rotate }}
        animate={{ rotate: [rotate, rotate + 2, rotate - 2, rotate] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl w-[700px] max-w-[82vw] h-[380px]"
        style={{ boxShadow: '0 40px 120px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)' }}
      >
        <div className="w-full h-full bg-[radial-gradient(1200px_500px_at_50%_-20%,rgba(34,197,94,0.15),transparent),radial-gradient(1200px_500px_at_20%_120%,rgba(59,130,246,0.15),transparent)] rounded-3xl" />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_10%,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_120%,rgba(168,85,247,0.18),transparent_65%)]" />

      {/* Glass UI stack */}
      <GlassCard delay={0.2} rotate={-4} blur="blur-0" />
      <GlassCard delay={0.35} rotate={2} blur="blur-sm" />
      <GlassCard delay={0.5} rotate={-1} blur="blur-md" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-200/80 backdrop-blur-md mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.8)]" />
            Trusted by teams turning complexity into clarity.
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Email Native Supply Chain Orchestration Solution
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-200/90 max-w-3xl mx-auto">
            From signal to structure — get complete visibility of your inbound supply chain from emails.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-[0_10px_40px_rgba(16,185,129,0.3)] border border-white/10"
            >
              Book a Demo
            </motion.a>
            <a href="#pilot" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-blue-100 font-semibold border border-white/10">
              See 6-week pilot plan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
