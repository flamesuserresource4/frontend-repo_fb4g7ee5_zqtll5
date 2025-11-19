import React from 'react'

const faqs = [
  {
    q: 'Why use Holocene if we already use RPA?',
    a: 'Traditional RPA is brittle with email variability. We use AI agents built for unstructured, multi-party threads to maintain context, reason over changes, and trigger workflows without custom scripts.'
  },
  {
    q: 'How does this help if we use SAP / GTS?',
    a: 'We sit around your core systems to capture signals missed between modules. Email-native orchestration fills gaps, reconciles mismatches, and pushes verified updates back to your teams.'
  },
  {
    q: 'We outsource to 3PLs — can you still help?',
    a: 'Yes. We ingest forwarder communications directly, track exceptions, and escalate with routing rules — without needing your partners to adopt new tools.'
  },
  {
    q: 'Do suppliers need to log in?',
    a: 'No logins required. Suppliers stay in email; our agents read, extract, and confirm so adoption is immediate.'
  },
  {
    q: 'Is Holocene needed if we use EDI?',
    a: 'EDI covers steady-state flows. The messy middle — changes, delays, partials — happens in email. We turn that chaos into structured, actionable data.'
  },
  {
    q: 'Is this a Transport Management System?',
    a: 'We complement TMS by orchestrating upstream signals and exceptions. Use us to prevent bad data from entering your TMS and to automate human-in-the-loop steps.'
  },
  {
    q: 'What is the ROI?',
    a: 'Fewer expedites and shortages, higher planner throughput, and faster confirmations. Typical results: 30–50% fewer expedites and measurable service level improvement.'
  },
  {
    q: 'Does it work across multiple manufacturing locations?',
    a: 'Yes. We support multi-plant structures with shared visibility and site-specific logic, templates, and routing.'
  }
]

export default function FAQ() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <h3 className="text-white font-semibold">{f.q}</h3>
              <p className="mt-3 text-blue-200/90">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
