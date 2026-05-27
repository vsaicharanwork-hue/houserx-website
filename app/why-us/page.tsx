import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, UserX, Eye, FileCheck, MapPin, Microscope } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Why HouseRx',
  description:
    'Why HouseRx is the only independent home audit company in South Delhi. No commissions, no contractors, no conflicts.',
};

const differentiators = [
  {
    icon: Shield,
    title: 'Diagnostic-only by design',
    body: 'We do not execute a single repair. We do not partner with contractors who pay us. We do not sell waterproofing kits. Our entire business is the diagnosis. That is the model — and the moat.',
  },
  {
    icon: UserX,
    title: 'No vendor commissions',
    body: 'Most "inspection" companies in India are quietly funded by their repair partners. Some are owned by construction firms. We earn zero from any contractor, ever. The report is the product.',
  },
  {
    icon: Eye,
    title: 'Full disclosure to you',
    body: 'The report we hand to the buyer is the report the inspector wrote. We do not soften findings for brokers. We do not coordinate with sellers. If a broker asks us to dilute a finding, we end the relationship.',
  },
  {
    icon: FileCheck,
    title: 'Service guarantee',
    body: 'If a defect we should have identified surfaces within 90 days, we refund up to the inspection fee. One free re-inspection within 30 days, no questions asked. Accountability is part of the price.',
  },
  {
    icon: MapPin,
    title: 'South Delhi depth',
    body: 'We cover one geography deeply, not all of India shallowly. Every inspection feeds locality-specific knowledge — builder patterns, monsoon failure points, locality-specific defects. National players cannot match this depth.',
  },
  {
    icon: Microscope,
    title: '127-point methodology',
    body: 'Civil, structural, waterproofing, plumbing, electrical, HVAC, documentation, hidden costs. Same rigour for a ₹1 crore floor as for a ₹5 crore villa. Methodology does not flex with property size.',
  },
];

const competitors = [
  {
    type: 'Marketplace inspection services',
    promise: 'Quick, cheap, app-based',
    reality:
      'Inspector quality varies wildly. Reports are templated. Revenue model often involves upselling repairs or vendor commissions.',
  },
  {
    type: 'Construction-firm-owned inspectors',
    promise: 'Engineering credibility',
    reality:
      'Parent companies build and repair. Conflicting incentive. Reports can be optimised for the repair side of the business.',
  },
  {
    type: 'Independent contractors offering "inspections"',
    promise: 'Local expertise',
    reality:
      'Most are seeking the repair job. The inspection is a sales call. You get a list of work, not a diagnosis.',
  },
  {
    type: 'HouseRx',
    promise: 'Diagnosis only. Nothing else.',
    reality:
      'Same business model from Day 1 to Year 10. Zero repair revenue. Zero vendor commissions. The report is the product.',
    highlight: true,
  },
];

export default function WhyUsPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">Why HouseRx</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            Independence
            <br />
            <span className="italic text-teal">is the whole point.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-text-mid">
            The reason home audits in India have a trust problem is that
            almost every player has a financial incentive to find more
            problems. We do not. That single fact changes everything about
            how we work, what we say, and what we never do.
          </p>
        </div>
      </section>

      {/* The six differentiators */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="Six things that set us apart"
            title="Each one is structural, not cosmetic."
          />

          <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="bg-paper p-8 md:p-10">
                  <Icon size={28} strokeWidth={1.25} className="text-teal" />
                  <h3 className="mt-6 font-display text-h2 text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-body text-text-mid">{d.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-paper">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="How we compare"
            title="The honest picture."
            description="The home inspection market in India is small and competitive. Most players have an incentive structure that conflicts with the buyer's interest. We have laid it out, plainly."
          />

          <div className="mt-12 space-y-4">
            {competitors.map((c) => (
              <div
                key={c.type}
                className={`grid gap-6 border p-8 md:grid-cols-12 md:gap-8 md:p-10 ${
                  c.highlight
                    ? 'border-ink bg-cream'
                    : 'border-line bg-paper'
                }`}
              >
                <div className="md:col-span-3">
                  <h3 className="font-display text-h3 text-ink">{c.type}</h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-caption uppercase tracking-wider text-text-mute">
                    What they promise
                  </p>
                  <p className="mt-2 text-body text-ink">{c.promise}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-caption uppercase tracking-wider text-text-mute">
                    {c.highlight ? 'What we actually do' : 'What often happens'}
                  </p>
                  <p
                    className={`mt-2 text-body ${
                      c.highlight ? 'italic text-ink' : 'text-text-mid'
                    }`}
                  >
                    {c.reality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The pact */}
      <section className="section bg-ink text-paper">
        <div className="container-wrap">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6">Our pact with you</p>
            <h2 className="font-display text-display-md text-paper md:text-display-lg">
              The day we
              <br />
              <span className="italic text-teal/90">accept a commission</span>
              <br />
              is the day we close.
            </h2>
            <p className="mt-8 text-body-lg text-cream/85">
              This is not a marketing slogan. It is the actual business model.
              We have written it into our partner agreements with brokers. Our
              report is the product, not a sales tool for someone else's
              services. The day we lose that, we lose the entire business.
            </p>
            <Link
              href="/contact"
              className="btn mt-10 bg-paper text-ink hover:bg-cream"
            >
              Have questions? Talk to us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
