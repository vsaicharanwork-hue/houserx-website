import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight, FileText, AlertTriangle, Eye, CheckCircle } from 'lucide-react';
import { waUrl, whatsappMessages } from '@/lib/site';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Sample Report',
  description:
    'See exactly what a HouseRx diagnostic report looks like. Severity-coded findings, photo evidence, cost estimates, and a 12-month roadmap.',
};

const sections = [
  { name: 'Civil & Structural', score: 85, status: 'ok' },
  { name: 'Waterproofing', score: 55, status: 'low' },
  { name: 'Plumbing', score: 70, status: 'mid' },
  { name: 'Electrical', score: 65, status: 'mid' },
  { name: 'HVAC & Appliances', score: 75, status: 'ok' },
  { name: 'External & Documentation', score: 80, status: 'ok' },
];

const findings = [
  {
    severity: 'Critical',
    section: 'Waterproofing',
    location: 'Master bedroom, north wall',
    summary:
      'Moisture meter reading 28% along lower 2 feet. Paint bubbling visible. Efflorescence starting on external face.',
    cost: '₹18,000 – ₹25,000',
    icon: AlertTriangle,
    color: 'rust',
  },
  {
    severity: 'Critical',
    section: 'Electrical',
    location: 'Distribution Board',
    summary:
      'Earthing resistance measured at 9.2 ohms (safe limit: under 5). Risk to all appliances and personal safety.',
    cost: '₹10,000 – ₹15,000',
    icon: AlertTriangle,
    color: 'rust',
  },
  {
    severity: 'Watch',
    section: 'Plumbing',
    location: 'Guest bathroom geyser',
    summary:
      'Geyser is 8+ years old, beyond typical service life. Visible rust on bracket. No active leak yet.',
    cost: '₹15,000 – ₹20,000',
    icon: Eye,
    color: 'watch',
  },
  {
    severity: 'Pass',
    section: 'Civil & Structural',
    location: 'Whole property',
    summary:
      'No structural cracks. Walls plumb. Tile lippage minimal. Main door and frames in excellent condition.',
    cost: 'No action needed',
    icon: CheckCircle,
    color: 'teal',
  },
];

export default function SampleReportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">Sample Report</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            See exactly
            <br />
            <span className="italic text-teal">what you'll receive.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-text-mid">
            We do not believe in keeping our work secret. Below is a
            walkthrough of an actual HouseRx report — anonymised — showing
            the structure, the severity coding, and the depth of detail you
            can expect.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={waUrl(
                'Hi HouseRx, please share a sample audit report with me.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download size={16} strokeWidth={1.75} />
              Request Full Sample PDF
            </a>
            <Link href="/services" className="btn-secondary">
              See Service Options
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mock report — page 1 */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="Page 1"
            title="The Executive Summary"
            description="Everything important on one page. Health score, critical findings, total estimated cost. Designed for the buyer who has 90 seconds before a negotiation call."
          />

          <div className="mt-12 border border-line bg-paper p-8 md:p-12">
            {/* Mock report header */}
            <div className="flex items-center justify-between border-b border-line pb-6">
              <div>
                <p className="font-display text-h2 text-ink">HouseRx</p>
                <p className="text-caption text-text-mute">
                  Home Health Diagnostic · Report HRx/2026/00037
                </p>
              </div>
              <div className="text-right">
                <p className="text-caption text-text-mute">Inspection date</p>
                <p className="text-body text-ink">14 May 2026</p>
              </div>
            </div>

            {/* Score block */}
            <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <p className="eyebrow mb-3">House Health Score</p>
                <p className="font-display text-display-lg text-ink tabular">
                  72
                  <span className="text-display-md text-text-mute">/100</span>
                </p>
                <p className="mt-3 text-body-lg italic text-teal">
                  Healthy with treatable issues
                </p>
                <p className="mt-4 text-body text-text-mid">
                  1,850 sqft builder floor in GK-2. Structurally sound. 14
                  issues across plumbing, electrical, and waterproofing. Three
                  need attention before next monsoon.
                </p>
              </div>

              <div className="md:col-span-7">
                <p className="eyebrow mb-3">Section breakdown</p>
                <div className="space-y-3">
                  {sections.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-caption">
                        <span className="text-ink">{s.name}</span>
                        <span className="font-medium text-ink tabular">
                          {s.score}/100
                        </span>
                      </div>
                      <div className="mt-2 h-1 w-full bg-line">
                        <div
                          className={`h-1 ${
                            s.status === 'ok'
                              ? 'bg-teal'
                              : s.status === 'mid'
                                ? 'bg-ink-soft'
                                : 'bg-rust'
                          }`}
                          style={{ width: `${s.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Total cost */}
            <div className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-3">
              <div>
                <p className="text-caption text-text-mute">Immediate (3 mo)</p>
                <p className="font-display text-h1 text-ink tabular">
                  ₹52k–78k
                </p>
              </div>
              <div>
                <p className="text-caption text-text-mute">Medium-term (12 mo)</p>
                <p className="font-display text-h1 text-ink tabular">
                  ₹35k–60k
                </p>
              </div>
              <div>
                <p className="text-caption text-text-mute">Total projected</p>
                <p className="font-display text-h1 text-ink tabular">
                  ₹1.67L–2.58L
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="Sample Findings"
            title="Each finding, documented like a clinical note."
            description="Severity. Location. Evidence. Cost. Action. Every finding answers all five questions — never fewer."
          />

          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {findings.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="bg-paper p-8 md:p-10"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-2 text-caption font-medium uppercase tracking-wider ${
                        f.color === 'rust'
                          ? 'text-rust'
                          : f.color === 'watch'
                            ? 'text-ink-soft'
                            : 'text-teal'
                      }`}
                    >
                      <Icon size={14} strokeWidth={1.75} />
                      {f.severity}
                    </span>
                    <span className="text-caption text-text-mute">
                      {f.section}
                    </span>
                  </div>
                  <h3 className="font-display text-h2 text-ink">
                    {f.location}
                  </h3>
                  <p className="mt-3 text-body text-text-mid">{f.summary}</p>
                  <div className="mt-6 flex items-baseline justify-between border-t border-line pt-4">
                    <span className="text-caption text-text-mute">
                      Estimated cost
                    </span>
                    <span className="text-body font-medium text-ink tabular">
                      {f.cost}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="section bg-paper">
        <div className="container-wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The full report"
                title="What you actually receive."
              />
            </div>
            <div className="lg:col-span-7">
              <ol className="space-y-6">
                {[
                  ['Cover & property details', 'Property info, inspector credentials, methodology summary.'],
                  ['Executive summary', 'House Health Score, critical findings, cost projection.'],
                  ['Section scores', 'Six sections graded individually with visual bars.'],
                  ['Detailed findings', 'Each issue: photo, severity, cost, urgency, action.'],
                  ['Cost projection', 'Immediate, medium-term, year-2-3 estimates.'],
                  ['Negotiation brief or maintenance roadmap', 'Buyer audits get a negotiation brief; annual audits get a 12-month roadmap.'],
                  ['Scope & limitations', 'What was tested. What was not. What we did not open.'],
                  ['Service guarantee', '30-day free re-inspection. 90-day refund clause for missed defects.'],
                ].map(([title, body], i) => (
                  <li
                    key={title}
                    className="grid grid-cols-[40px_1fr] gap-4 border-t border-line pt-5"
                  >
                    <span className="font-display text-h3 italic text-teal tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-display text-h3 text-ink">{title}</p>
                      <p className="mt-1 text-body text-text-mid">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations honesty */}
      <section className="section">
        <div className="container-wrap">
          <div className="mx-auto max-w-3xl border border-line bg-cream p-8 md:p-12">
            <div className="flex items-start gap-4">
              <FileText
                size={28}
                strokeWidth={1.5}
                className="mt-1 flex-none text-teal"
              />
              <div>
                <h3 className="font-display text-h2 text-ink">
                  What this report isn't.
                </h3>
                <p className="mt-4 text-body text-text-mid">
                  A HouseRx report is a diagnostic. It is not a structural
                  engineering certificate. It is not a legal title opinion. It
                  is not a property valuation. We do not open walls, floors,
                  or ceilings — every finding is from non-destructive
                  inspection.
                </p>
                <p className="mt-4 text-body text-text-mid">
                  For structural certification, you need a registered
                  engineer. For title verification, you need a real estate
                  lawyer. For documentation issues (sanctioned plan mismatch,
                  OC/CC), we refer you to independent specialists who carry
                  their own professional indemnity.
                </p>
                <p className="mt-4 text-body italic text-ink">
                  Knowing where our work ends is part of how we keep it
                  honest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get the full sample on WhatsApp."
        description="We'll send you a complete anonymised report so you can read every section before you book."
        whatsappMessage="Hi HouseRx, please share a sample audit report with me."
      />
    </>
  );
}
