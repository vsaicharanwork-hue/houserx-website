import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { waUrl, whatsappMessages } from '@/lib/site';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Annual Home Health Check',
  description:
    'Yearly preventive home audit for South Delhi homeowners. 127-point inspection plus a 12-month maintenance roadmap. Starting ₹6,999.',
};

const pricing = [
  { size: 'Up to 1,000 sqft', price: '₹6,999' },
  { size: '1,001 - 1,800 sqft', price: '₹8,999' },
  { size: '1,801 - 2,800 sqft', price: '₹11,999' },
  { size: '2,801 - 4,000 sqft', price: '₹14,999' },
  { size: '4,000+ sqft', price: '₹17,999 + ₹3/sqft beyond' },
];

const whatYouGet = [
  'Full 127-point physical inspection',
  'Photo-documented findings, severity-coded',
  'Cost estimates for every issue identified',
  '12-month maintenance roadmap with priorities',
  'WhatsApp walkthrough call with the inspector',
  '48-hour PDF report turnaround',
  '30-day free re-inspection on request',
  'Locality-specific warnings (builder patterns, monsoon zones)',
];

export default function AnnualAuditPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <Link href="/services" className="text-caption text-text-mute hover:text-ink">
            ← All Services
          </Link>
          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">Annual Health Check</p>
              <h1 className="font-display text-display-md text-ink md:text-display-lg">
                A checkup.
                <br />
                <span className="italic text-teal">For your home.</span>
              </h1>
              <p className="mt-8 max-w-xl text-body-lg text-text-mid">
                You see a doctor once a year because catching things early
                costs less than treating them late. Homes work the same way.
                Once a year, we walk through everything — and tell you what
                to fix now, what can wait, and what is fine.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waUrl(whatsappMessages.annual)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book an Annual Audit
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
                  ₹6,999
                </p>
                <p className="mt-2 text-caption text-text-mute">
                  For homes up to 1,000 sqft.
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

      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="What's included"
            title="A complete preventive diagnosis, plus a year-long plan."
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

      <section className="section bg-paper">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="The best time"
            title="When to schedule your annual."
            description="Most homeowners book post-monsoon. By then, the year's biggest test has happened — and any damage is visible."
          />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {[
              {
                month: 'September',
                title: 'Post-monsoon',
                copy: 'The single best window. Monsoon damage is fresh, fixable, and not yet hidden by repainting.',
              },
              {
                month: 'February',
                title: 'Pre-summer',
                copy: 'Catch electrical issues before peak AC season. Verify cooling-system readiness.',
              },
              {
                month: 'On purchase anniversary',
                title: 'Annually',
                copy: 'A simple habit. Same week every year. You will know the trajectory of your home over time.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-8 md:p-10">
                <p className="eyebrow mb-3">{item.month}</p>
                <h3 className="font-display text-h2 text-ink">{item.title}</h3>
                <p className="mt-3 text-body text-text-mid">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="The smallest preventive habit your home will ever need."
        description="A few thousand rupees, once a year, against ₹2-5 lakh of damage that quietly compounds."
        whatsappMessage={whatsappMessages.annual}
      />
    </>
  );
}
