import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Three independent home audit services for South Delhi: pre-purchase, annual health check, and monsoon special. Transparent pricing.',
};

const comparison = [
  {
    feature: 'Inspection points covered',
    buyer: '127',
    annual: '127',
    monsoon: '40 (focused)',
  },
  {
    feature: 'Time on site',
    buyer: '3-4 hours',
    annual: '2-3 hours',
    monsoon: '90 minutes',
  },
  {
    feature: 'Report turnaround',
    buyer: '48 hours',
    annual: '48 hours',
    monsoon: '24 hours',
  },
  {
    feature: 'Negotiation brief included',
    buyer: true,
    annual: false,
    monsoon: false,
  },
  {
    feature: '12-month maintenance roadmap',
    buyer: false,
    annual: true,
    monsoon: false,
  },
  {
    feature: 'Re-inspection within 30 days',
    buyer: true,
    annual: true,
    monsoon: true,
  },
  {
    feature: 'Independent — no commissions',
    buyer: true,
    annual: true,
    monsoon: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">Our Services</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            Three audits.
            <br />
            <span className="italic text-teal">One uncompromising standard.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-text-mid">
            Choose by when you need it. Pre-purchase, post-monsoon, or as part
            of caring for a home you already love. The methodology stays the
            same. The independence stays the same.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="section-sm">
        <div className="container-wrap">
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              eyebrow="Pre-Purchase"
              title="Buyer Audit"
              description="For homes you are about to buy. The most popular and most consequential audit we run. Most buyers recover the fee in the first counter-offer."
              priceLabel="₹9,999"
              href="/services/buyer-audit"
              highlight
            />
            <ServiceCard
              eyebrow="For Owners"
              title="Annual Health Check"
              description="The annual checkup your home deserves. Find issues before they become expensive. Plan repairs on your timeline, not the contractor's."
              priceLabel="₹6,999"
              href="/services/annual-audit"
            />
            <ServiceCard
              eyebrow="July to October"
              title="Monsoon Special"
              description="A focused 90-minute deep dive into seepage, waterproofing, and damp-prone zones. Run it post-monsoon, before damage compounds."
              priceLabel="₹4,999"
              href="/services/monsoon-audit"
            />
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="Compare"
            title="At a glance."
            description="Which audit fits your moment?"
          />

          <p className="mt-6 text-caption text-text-mute md:hidden">
            ← Scroll table sideways to compare →
          </p>

          <div className="mt-4 overflow-x-auto md:mt-12">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th className="py-5 text-left text-caption uppercase tracking-wider text-text-mute"></th>
                  <th className="py-5 text-left">
                    <p className="font-display text-h3 text-ink">Buyer</p>
                    <p className="text-caption text-text-mute">₹9,999+</p>
                  </th>
                  <th className="py-5 text-left">
                    <p className="font-display text-h3 text-ink">Annual</p>
                    <p className="text-caption text-text-mute">₹6,999+</p>
                  </th>
                  <th className="py-5 text-left">
                    <p className="font-display text-h3 text-ink">Monsoon</p>
                    <p className="text-caption text-text-mute">₹4,999+</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-line">
                    <td className="py-5 pr-4 text-body text-text-mid">
                      {row.feature}
                    </td>
                    <td className="py-5 pr-4 text-body text-ink">
                      <Cell value={row.buyer} />
                    </td>
                    <td className="py-5 pr-4 text-body text-ink">
                      <Cell value={row.annual} />
                    </td>
                    <td className="py-5 pr-4 text-body text-ink">
                      <Cell value={row.monsoon} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-prose text-caption text-text-mute">
            Prices shown are starting points for homes up to 1,000 sqft.
            Pricing scales with property size. Full pricing on each service
            page. We confirm an exact quote on WhatsApp within an hour of
            receiving your address.
          </p>
        </div>
      </section>

      {/* Which one for you */}
      <section className="section bg-paper">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="Not sure?"
            title="Which audit is right for you?"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'You are buying a property',
                copy: 'Choose the Buyer Audit. It includes a negotiation brief — most buyers use it to recover the fee at the negotiation table.',
                href: '/services/buyer-audit',
                cta: 'See Buyer Audit',
              },
              {
                title: 'You already own and live here',
                copy: 'Choose the Annual Health Check. Preventive diagnosis plus a 12-month maintenance roadmap. Best done after monsoon.',
                href: '/services/annual-audit',
                cta: 'See Annual Audit',
              },
              {
                title: 'You see seepage or damp patches',
                copy: 'Choose the Monsoon Special. A focused, faster audit that gets to the source of water damage before it spreads.',
                href: '/services/monsoon-audit',
                cta: 'See Monsoon Audit',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-line bg-paper p-8"
              >
                <h3 className="font-display text-h2 text-ink">{item.title}</h3>
                <p className="mt-4 text-body text-text-mid">{item.copy}</p>
                <Link href={item.href} className="btn-ghost mt-6 inline-flex">
                  {item.cta}
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={20} strokeWidth={1.5} className="text-teal" />
    ) : (
      <span className="text-text-mute">—</span>
    );
  }
  return <span>{value}</span>;
}
