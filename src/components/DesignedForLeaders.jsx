import React from 'react'

export default function DesignedForLeaders() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Designed for Leaders Who Can’t Afford Surprises</h2>
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-blue-200/90">Brand</div>
              <div className="text-white font-semibold text-xl">Land Rover Jaguar</div>
            </div>
            <div>
              <div className="text-blue-200/90">Role</div>
              <div className="text-white font-semibold text-xl">Manager, Supply Chain</div>
            </div>
          </div>
          <p className="mt-6 text-blue-100/90 italic">“Increases bandwidth… focus on management instead of documentation.”</p>
        </div>
      </div>
    </section>
  )
}
