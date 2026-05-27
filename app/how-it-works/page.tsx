import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'The HouseRx audit process: WhatsApp, on-site inspection, diagnostic report. Simple, calm, thorough.',
};

const steps = [
  {
    n: '01',
    title: 'WhatsApp us',
    duration: 'Same day',
    body: 'Share your address, approximate carpet area, and a convenient time slot. Within an hour we confirm a price and a slot. No forms, no app, no booking dance.',
    detail: [
      'We respond on WhatsApp within business hours, usually within 60 minutes',
      'Payment is 100% advance via UPI, sent on WhatsApp',
      'Slot confirmed only after payment received',
    ],
  },
  {
    n: '02',
    title: 'Inspection day',
    duration: '2-4 hours on site',
    body: 'Our inspector arrives with full equipment — moisture meter, voltage tester, multimeter, borescope, and thermal imager on request. They will need access to every room, every bathroom, the terrace if applicable, and the utility meters.',
    detail: [
      'Inspector arrives within a 30-minute window of confirmed slot',
      'Customer or representative should be present',
      'Inspector documents every finding with photographs',
      'Brief walk-through with the customer at the end of the inspection',
    ],
  },
  {
    n: '03',
    title: 'The report arrives',
    duration: 'Within 48 hours',
    body: 'A PDF report built like a hospital diagnostic. House Health Score, section-wise breakdown, severity-coded findings, photo evidence, cost estimates, and a 12-month maintenance roadmap (or negotiation brief, depending on the audit).',
    detail: [
      'Delivered as a PDF on WhatsApp and email',
      'Includes full 127-point methodology coverage',
      'Each finding tagged Critical, Watch, Fix, or Pass',
      'Cost estimates use current South Delhi market rates',
    ],
  },
  {
    n: '04',
    title: 'You decide what to do',
    duration: 'Your timeline',
    body: 'Repairs, negotiations, postponements, ignoring minor findings — those decisions stay with you. We do not call you to upsell. We do not refer you to contractors we earn from. The report is yours, and so are the choices.',
    detail: [
      'Optional 30-minute walk-through call with the inspector',
      'One free re-inspection within 30 days if requested',
      'No vendor referrals unless you specifically ask',
    ],
  },
];

const equipment = [
  { name: 'Moisture meter', use: 'Detects damp behind painted walls before it becomes visible' },
  { name: 'Voltage tester', use: 'Confirms socket polarity and earth integrity' },
  { name: 'Multimeter', use: 'Measures earthing resistance and circuit health' },
  { name: 'Borescope', use: 'Inspects inside walls and behind cabinets without breaking anything' },
  { name: 'Thermal imager (on request)', use: 'Surfaces hidden seepage and electrical hotspots' },
  { name: 'Pressure gauge', use: 'Verifies water pressure across all taps and fittings' },
];

const principles = [
  {
    title: 'We do not open walls',
    body: 'Our audit is non-destructive. Every finding is based on visual evidence, instrument readings, and pattern recognition. If destructive testing is needed, we say so and recommend a structural engineer.',
  },
  {
    title: 'We do not certify',
    body: 'We are not a structural engineering firm. We diagnose. For load-bearing certifications or DDA submissions, you need a registered structural engineer or architect.',
  },
  {
    title: 'We do not chase customers',
    body: 'You will not get sales calls from us after the report. If you need a follow-up, you reach out. This is a deliberate boundary.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">How It Works</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            Simple,
            <br />
            <span className="italic text-teal">calm, thorough.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-text-mid">
            No app. No login. No payment gateway maze. We work over WhatsApp,
            in your home, and on paper. The process takes a week from first
            message to final report.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="The process"
            title="Four steps. One week."
          />

          <div className="mt-16 space-y-16 md:space-y-20">
            {steps.map((step) => (
              <div
                key={step.n}
                className="grid gap-8 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-4">
                  <p className="font-display text-display-md italic text-teal tabular">
                    {step.n}
                  </p>
                  <h3 className="mt-4 font-display text-h1 text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-caption text-text-mute">
                    {step.duration}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-body-lg text-text-mid">{step.body}</p>
                  <ul className="mt-8 space-y-3">
                    {step.detail.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Check
                          size={18}
                          strokeWidth={1.5}
                          className="mt-1 flex-none text-teal"
                        />
                        <span className="text-body text-ink">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="The equipment"
            title="What an inspector arrives with."
            description="We do not arrive with a clipboard and an opinion. Every finding is backed by measurements."
          />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {equipment.map((item) => (
              <div key={item.name} className="bg-paper p-8">
                <h3 className="font-display text-h3 text-ink">{item.name}</h3>
                <p className="mt-2 text-body text-text-mid">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="What we don't do"
            title="The boundaries that protect the work."
            description="A clear scope is a feature, not a limitation. Knowing what we are not is how we stay good at what we are."
          />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="bg-cream p-8 md:p-10">
                <h3 className="font-display text-h2 text-ink">{p.title}</h3>
                <p className="mt-3 text-body text-text-mid">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
