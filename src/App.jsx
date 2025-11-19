import React from 'react'
import Hero from './components/Hero'
import SupplyPlanning from './components/SupplyPlanning'
import InboundTransport from './components/InboundTransport'
import Impact from './components/Impact'
import ProductSuite from './components/ProductSuite'
import DesignedForLeaders from './components/DesignedForLeaders'
import ImpactTwoWeeks from './components/ImpactTwoWeeks'
import ResourceCards from './components/ResourceCards'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* background gradients */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_110%_110%,rgba(147,51,234,0.12),transparent_70%)]" />

      <header className="relative z-20">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-white font-semibold tracking-tight">Holocene-inspired</div>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">Book a Demo</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <SupplyPlanning />
        <InboundTransport />
        <Impact />
        <ProductSuite />
        <DesignedForLeaders />
        <ImpactTwoWeeks />
        <ResourceCards />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
