import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the HouseRx audit service.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-cream pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">Legal</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            Terms of Service
          </h1>
          <p className="mt-6 text-caption text-text-mute">
            Last updated: 1 January 2026
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-wrap">
          <div className="mx-auto max-w-prose">
            <div className="space-y-10">
              <Block title="1. The service">
                <p>
                  HouseRx provides non-destructive, independent home audits.
                  Our deliverable is a written diagnostic report. We do not
                  execute repairs, do not certify structures, and do not
                  provide legal title opinions.
                </p>
              </Block>

              <Block title="2. Booking and payment">
                <p>
                  Bookings are confirmed only after full advance payment via
                  UPI. Quoted prices are based on property size declared by
                  the customer. If actual size differs materially on
                  inspection day, pricing may be revised — we discuss this
                  with you before proceeding.
                </p>
              </Block>

              <Block title="3. Cancellations and refunds">
                <p>
                  Cancellations made at least 24 hours before the inspection
                  slot are refunded in full. Cancellations within 24 hours
                  may incur a 25% retention fee. Once an inspection begins,
                  the fee is non-refundable.
                </p>
                <p>
                  Service guarantee: if a defect we should have identified
                  within the scope of our audit surfaces within 90 days of
                  the report date, we will refund up to the inspection fee.
                  This is the limit of our financial liability.
                </p>
              </Block>

              <Block title="4. Scope and limitations">
                <p>The audit covers what was visually accessible and instrument-testable on the inspection date. The audit does not cover:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Areas not made accessible (sealed, locked, behind furniture or fixtures)</li>
                  <li>Conditions inside walls, floors, or ceilings without destructive opening</li>
                  <li>Future conditions or degradation after the inspection date</li>
                  <li>Legal title verification, valuation, or structural certification</li>
                  <li>Pest, mould species identification, or environmental hazard testing beyond what is named in the report</li>
                </ul>
              </Block>

              <Block title="5. Customer obligations">
                <p>
                  The customer is responsible for ensuring access to the
                  property on the inspection date. Repeated visits caused by
                  access denial may incur a re-visit charge. The customer
                  agrees that the audit does not replace independent legal
                  or engineering advice where such advice is warranted.
                </p>
              </Block>

              <Block title="6. Use of the report">
                <p>
                  The report is provided to the named customer for personal
                  decision-making and negotiation. The customer may share
                  the report with relevant parties (lawyers, sellers,
                  brokers) at their discretion. HouseRx does not assume any
                  liability for downstream decisions made by third parties
                  on the basis of our report.
                </p>
              </Block>

              <Block title="7. Independence and disclosures">
                <p>
                  HouseRx earns revenue solely from inspection fees. We do
                  not receive commissions, kickbacks, or referral fees from
                  any contractor, vendor, or repair business. If a broker
                  refers a customer to us, we disclose the referral fee
                  arrangement to the customer in writing before commencing
                  work.
                </p>
              </Block>

              <Block title="8. Governing law">
                <p>
                  These terms are governed by the laws of India. Any
                  disputes are subject to the exclusive jurisdiction of the
                  courts of New Delhi.
                </p>
              </Block>

              <Block title="9. Contact">
                <p>
                  For any clarifications or disputes, write to{' '}
                  <a href={`mailto:${site.email}`} className="link">
                    {site.email}
                  </a>{' '}
                  or call us at {site.phone}.
                </p>
              </Block>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-h2 text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-body text-text-mid">{children}</div>
    </div>
  );
}
