import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { site, waUrl, whatsappMessages } from '@/lib/site';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import StatBlock from '@/components/StatBlock';
import TrustSignals from '@/components/TrustSignals';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream pt-12 md:pt-20 lg:pt-24">
        <div className="container-wrap">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-6 fade-in">
                Independent Home Health Audits · South Delhi
              </p>
              <h1 className="font-display text-display-md leading-[1.05] text-ink md:text-display-lg lg:text-display-xl">
                The doctor for
                <br />
                <span className="italic text-teal">your home.</span>
              </h1>
              <p className="mt-8 max-w-xl text-body-lg text-text-mid">
                You spent ₹1–5 crore on your home. You should know what is
                quietly breaking inside it. We inspect 127 points across civil,
                plumbing, electrical, waterproofing, and structural systems.
                You get a full diagnostic report.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waUrl(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={16} strokeWidth={1.75} />
                  Book an Audit on WhatsApp
                </a>
                <Link href="/sample-report" className="btn-secondary">
                  See a Sample Report
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>

              <p className="mt-6 max-w-md text-caption text-text-mute">
                We diagnose. You decide. No commissions, no repairs, no
                conflicts of interest.
              </p>
            </div>

            {/* Right rail - signature mark */}
            <div className="hidden lg:col-span-4 lg:block">
              <div className="border border-line bg-paper p-10">
                <p className="eyebrow mb-6">Health Score Sample</p>
                <div className="font-display text-display-lg text-ink tabular">
                  72
                  <span className="text-h2 text-text-mute">/100</span>
                </div>
                <p className="mt-2 text-body italic text-teal">
                  Healthy with treatable issues
                </p>
                <div className="mt-8 space-y-3 border-t border-line pt-6">
                  <StatRow label="Civil & Structural" value={85} status="ok" />
                  <StatRow label="Waterproofing" value={55} status="low" />
                  <StatRow label="Plumbing" value={70} status="mid" />
                  <StatRow label="Electrical" value={65} status="mid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container-wrap mt-24 border-t border-line pt-14 md:mt-32">
          <div className="grid gap-10 md:grid-cols-4">
            <StatBlock value="127" label="Diagnostic points per audit" />
            <StatBlock value="48hr" label="From inspection to PDF report" />
            <StatBlock value="₹0" label="Commission earned on any repair" />
            <StatBlock value="South Delhi" label="Service area, with depth" />
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="The Problem"
            title="Most homes silently lose money. Their owners never know."
            description="In a typical South Delhi premium home, ₹2-5 lakh of damage accumulates over three years from issues that were visible — if anyone had looked."
          />

          <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
            {[
              {
                stat: '₹2-5L',
                title: 'Hidden defects',
                copy: 'Average damage in a 3-year-old premium home, undetected until renovation or transaction.',
              },
              {
                stat: '65%',
                title: 'Affected homeowners',
                copy: 'Premium South Delhi homes hit at least one major defect in the first year of ownership.',
              },
              {
                stat: '0',
                title: 'Annual checkups',
                copy: 'Number of routine inspections Indians do for the ₹2-5 crore homes they live in.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-10 md:p-12">
                <p className="font-display text-display-md text-ink tabular">
                  {item.stat}
                </p>
                <h3 className="mt-6 font-display text-h2 text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-body text-text-mid">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section bg-paper">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="Our Services"
            title="Three audits. One uncompromising standard."
            description="Whether you are buying, living in, or recovering from monsoon — the inspection is the same, the report is the same, the independence is the same."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <ServiceCard
              eyebrow="Pre-Purchase"
              title="Buyer Audit"
              description="For homes you are about to purchase. Full 127-point inspection plus a negotiation brief. Most buyers recover the audit fee within the first counter-offer."
              priceLabel="₹9,999"
              href="/services/buyer-audit"
              highlight
            />
            <ServiceCard
              eyebrow="For Owners"
              title="Annual Health Check"
              description="For homes you already own. The annual checkup your house deserves. A preventive diagnostic and a 12-month maintenance roadmap."
              priceLabel="₹6,999"
              href="/services/annual-audit"
            />
            <ServiceCard
              eyebrow="July to October"
              title="Monsoon Special"
              description="A focused 90-minute audit of seepage, waterproofing, and damp-prone zones. Catch monsoon damage before it becomes structural."
              priceLabel="₹4,999"
              href="/services/monsoon-audit"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-ghost">
              Compare all services
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <TrustSignals />

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container-wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="How It Works"
                title="Simple, calm, thorough."
                description="No app to download. No login to remember. We work over WhatsApp, in your home, and on paper."
              />
              <Link
                href="/how-it-works"
                className="btn-ghost mt-8 inline-flex"
              >
                Read the full process
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-10">
                {[
                  {
                    n: '01',
                    title: 'WhatsApp us',
                    copy: 'Share your address, approximate area, and a convenient slot. We confirm pricing within an hour.',
                  },
                  {
                    n: '02',
                    title: 'On-site audit',
                    copy: 'Our inspector arrives with full equipment — moisture meter, thermal imager on request, voltage tester. 2-3 hours on site.',
                  },
                  {
                    n: '03',
                    title: 'PDF report',
                    copy: 'A diagnostic report built like a hospital report, sent on WhatsApp within 48 hours. Severity-coded findings with cost estimates.',
                  },
                  {
                    n: '04',
                    title: 'You decide',
                    copy: 'Negotiate with the seller. Plan repairs. Ignore minor issues. The decisions stay yours; we do not chase you.',
                  },
                ].map((step) => (
                  <li key={step.n} className="grid grid-cols-[64px_1fr] gap-6">
                    <span className="font-display text-h1 italic text-teal tabular">
                      {step.n}
                    </span>
                    <div className="border-t border-line pt-2">
                      <h3 className="font-display text-h2 text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-body text-text-mid">
                        {step.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE / METHODOLOGY */}
      <section className="section bg-ink text-paper">
        <div className="container-wrap">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6">Our methodology</p>
            <h2 className="font-display text-display-md text-paper md:text-display-lg">
              <span className="italic text-teal/90">127 points.</span> Every
              audit. Every home. Every time.
            </h2>
            <p className="mt-8 text-body-lg text-cream/80">
              Civil. Structural. Waterproofing. Plumbing. Electrical. HVAC.
              Documentation. Hidden cost projection. Severity-coded, photo-
              documented, locality-aware. The same rigour for a ₹1 crore
              builder floor as for a ₹5 crore independent house.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/sample-report"
                className="btn bg-paper text-ink hover:bg-cream"
              >
                See what the report looks like
              </Link>
              <Link
                href="/how-it-works"
                className="btn border border-paper/30 text-paper hover:bg-paper/10"
              >
                The full methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS WE COVER */}
      <section className="section">
        <div className="container-wrap">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Service area</p>
              <h2 className="font-display text-display-md text-ink">
                Depth in
                <br />
                <span className="italic text-teal">South Delhi.</span>
              </h2>
              <p className="mt-6 max-w-md text-body-lg text-text-mid">
                We do not cover all of Delhi. We cover South Delhi deeply.
                That is how we build locality-specific knowledge — which
                builder used inferior waterproofing in 2009, which lanes have
                rising-damp issues, which buildings have wiring patterns
                that fail in monsoon.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
                {site.serviceAreas.map((area) => (
                  <div key={area} className="bg-cream p-6">
                    <p className="font-display text-h3 text-ink">{area}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-caption text-text-mute">
                Not in this list?{' '}
                <Link href="/contact" className="link">
                  Tell us where
                </Link>{' '}
                — we may still be able to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="default" />
    </>
  );
}

/* Small inline component for hero stat rows */
function StatRow({
  label,
  value,
  status,
}: {
  label: string;
  value: number;
  status: 'ok' | 'mid' | 'low';
}) {
  const colorMap = {
    ok: 'bg-teal',
    mid: 'bg-ink-soft',
    low: 'bg-rust',
  };
  return (
    <div>
      <div className="flex items-center justify-between text-caption">
        <span className="text-text-mid">{label}</span>
        <span className="font-medium text-ink tabular">{value}/100</span>
      </div>
      <div className="mt-2 h-1 w-full bg-line">
        <div
          className={`h-1 ${colorMap[status]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
