import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { waUrl, whatsappMessages } from '@/lib/site';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Monsoon Seepage & Waterproofing Audit',
  description:
    'Focused 90-minute monsoon damage audit for South Delhi homes. 40-point waterproofing diagnostic. Starting ₹4,999.',
};

const pricing = [
  { size: 'Up to 1,800 sqft', price: '₹4,999' },
  { size: '1,801 - 3,000 sqft', price: '₹6,999' },
  { size: '3,000+ sqft', price: '₹8,999' },
];

const whatYouGet = [
  '40-point waterproofing and seepage diagnostic',
  'Moisture meter readings across all suspect zones',
  'Source identification — where the water is actually coming from',
  'Photo-documented findings with severity rating',
  'Cost estimates for waterproofing remediation',
  '24-hour PDF report turnaround',
  'WhatsApp walkthrough with the inspector',
  'Thermal imaging available as add-on (₹3,500)',
];

export default function MonsoonAuditPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <Link href="/services" className="text-caption text-text-mute hover:text-ink">
            ← All Services
          </Link>
          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">Monsoon Special · July to October</p>
              <h1 className="font-display text-display-md text-ink md:text-display-lg">
                Seepage,
                <br />
                <span className="italic text-teal">solved at the source.</span>
              </h1>
              <p className="mt-8 max-w-xl text-body-lg text-text-mid">
                A damp wall is a symptom. The source is usually somewhere else
                — a cracked terrace membrane, a shared bathroom slab, a hidden
                pipe joint. Our 90-minute focused audit finds the source, not
                just the patch.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waUrl(whatsappMessages.monsoon)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book Monsoon Audit
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
                  ₹4,999
                </p>
                <p className="mt-2 text-caption text-text-mute">
                  90 minutes on site. Report in 24 hours.
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
            title="A focused diagnostic of every water-vulnerable zone."
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

      <section className="section bg-ink text-paper">
        <div className="container-wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6">Why source matters</p>
              <h2 className="font-display text-display-md text-paper md:text-display-lg">
                Patches fail.
                <br />
                <span className="italic text-teal/90">Sources don't.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-body-lg text-cream/85">
                A waterproofing contractor will fix the visible damp patch.
                Within twelve months — sometimes faster — the patch reappears,
                a few feet to the left. Because the source was never
                identified.
              </p>
              <p className="mt-5 text-body-lg text-cream/85">
                We do not do the repair. We find the source. Then you hire any
                contractor you trust — and they fix it once. Permanently.
              </p>
              <p className="mt-5 text-body-lg italic text-teal/90">
                One audit can save you three rounds of repeat repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="Common South Delhi monsoon issues"
            title="The patterns we see."
          />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {[
              {
                title: 'Builder-floor terraces',
                copy: 'Shared terraces with poor original waterproofing. Top-floor units face cumulative damage every year.',
              },
              {
                title: 'Common bathroom walls',
                copy: 'Wet zones in stacked bathrooms cause moisture to migrate to adjacent dry rooms via shared walls.',
              },
              {
                title: 'AC drain and balcony slope',
                copy: 'Incorrect slope or backflow at balcony drains causes water to pool against external walls.',
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
        title="Catch it before it becomes structural."
        description="A monsoon audit takes 90 minutes. Untreated seepage compounds at 30-40% per year. The math is straightforward."
        whatsappMessage={whatsappMessages.monsoon}
      />
    </>
  );
}
