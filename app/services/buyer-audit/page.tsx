import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { waUrl, whatsappMessages } from '@/lib/site';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Pre-Purchase Audit (Buyer Audit)',
  description:
    'Independent 127-point home audit for buyers in South Delhi. Full PDF report with negotiation brief. Starting ₹9,999.',
};

const pricing = [
  { size: 'Up to 1,000 sqft', price: '₹9,999' },
  { size: '1,001 - 1,800 sqft', price: '₹12,999' },
  { size: '1,801 - 2,800 sqft', price: '₹16,999' },
  { size: '2,801 - 4,000 sqft', price: '₹21,999' },
  { size: '4,000+ sqft', price: '₹25,999 + ₹4/sqft beyond' },
];

const whatYouGet = [
  'Full 127-point physical inspection',
  'Photo-documented findings, severity-coded',
  'Cost estimates for every issue identified',
  'Negotiation brief — defensible items for price reduction',
  'Document health flags (sanctioned plan, OC/CC)',
  'WhatsApp walkthrough call with the inspector',
  '48-hour PDF report turnaround',
  '30-day free re-inspection on request',
];

export default function BuyerAuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <Link href="/services" className="text-caption text-text-mute hover:text-ink">
            ← All Services
          </Link>
          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">Pre-Purchase Audit</p>
              <h1 className="font-display text-display-md text-ink md:text-display-lg">
                Know before
                <br />
                <span className="italic text-teal">you buy.</span>
              </h1>
              <p className="mt-8 max-w-xl text-body-lg text-text-mid">
                Token money paid. Closing in two weeks. This is exactly the
                moment to know what you are buying. Our buyer audit gives you
                the independent verdict — and a negotiation brief that
                typically pays for the audit several times over.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waUrl(whatsappMessages.buyer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Buyer Audit
                  <ArrowRight size={16} strokeWidth={1.5} />
                </a>
                <Link href="/sample-report" className="btn-secondary">
                  See a Sample Report
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-line bg-paper p-8">
                <p className="eyebrow mb-4">Starting at</p>
                <p className="font-display text-display-md text-ink tabular">
                  ₹9,999
                </p>
                <p className="mt-2 text-caption text-text-mute">
                  For homes up to 1,000 sqft. Larger homes priced below.
                </p>
                <div className="mt-8 space-y-3 border-t border-line pt-6">
                  {pricing.map((row) => (
                    <div
                      key={row.size}
                      className="flex items-baseline justify-between text-body"
                    >
                      <span className="text-text-mid">{row.size}</span>
                      <span className="font-medium text-ink tabular">
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="What's included"
            title="A complete diagnosis of the home you are about to buy."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {whatYouGet.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border-t border-line py-5"
              >
                <Check
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 flex-none text-teal"
                />
                <p className="text-body text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Negotiation value */}
      <section className="section bg-ink text-paper">
        <div className="container-wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">The math</p>
              <h2 className="font-display text-display-md text-paper md:text-display-lg">
                Most buyers
                <br />
                <span className="italic text-teal/90">recover the fee.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-body-lg text-cream/85">
                A typical buyer audit surfaces ₹50,000 to ₹2,00,000 of
                documented, defensible defects — items the seller would
                reasonably be expected to address or absorb in price.
              </p>
              <p className="mt-5 text-body-lg text-cream/85">
                Our negotiation brief itemises these clearly. Buyers use it
                directly at the table. Sellers respect documented findings far
                more than verbal observations.
              </p>
              <p className="mt-5 text-body-lg italic text-teal/90">
                The fee is ₹9,999. The leverage often runs into lakhs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to book */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="When to book"
            title="The right moment to audit."
          />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {[
              {
                title: 'After token, before payment',
                copy: 'You have shortlisted. You are within 14 days of closing. This is the highest-leverage moment.',
              },
              {
                title: 'Resale property',
                copy: 'Resale homes carry inherited issues. New construction defects are easier to argue. Always audit resale.',
              },
              {
                title: 'Buying from abroad',
                copy: 'NRI buyers should never close without an independent audit. We can do a video walkthrough on call.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-8 md:p-10">
                <h3 className="font-display text-h2 text-ink">{item.title}</h3>
                <p className="mt-3 text-body text-text-mid">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't close without knowing."
        description="The audit takes one afternoon. The leverage lasts the entire negotiation."
        whatsappMessage={whatsappMessages.buyer}
      />
    </>
  );
}
