import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How HouseRx collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-cream pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">Legal</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            Privacy Policy
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
              <Block title="1. Who we are">
                <p>
                  HouseRx is an independent home audit service based in South
                  Delhi, India. When this policy refers to "we," "us," or
                  "our," it refers to HouseRx and its operating team.
                </p>
              </Block>

              <Block title="2. What we collect">
                <p>We collect only what we need to deliver the service:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Your name, phone number, email, and property address
                  </li>
                  <li>
                    Property details you share (size, age, type, ownership
                    status)
                  </li>
                  <li>
                    Findings and photographs from the audit we conduct
                  </li>
                  <li>
                    UPI payment reference (we do not store full card details)
                  </li>
                </ul>
              </Block>

              <Block title="3. How we use it">
                <p>
                  Your information is used only to deliver the audit you
                  booked, prepare your report, and follow up on warranty
                  matters if applicable. We do not sell your data to anyone.
                  We do not share your audit report with brokers, sellers,
                  contractors, or any third party without your explicit
                  written consent.
                </p>
              </Block>

              <Block title="4. Aggregated and anonymised data">
                <p>
                  Over time, we may compile fully anonymised, aggregate
                  insights — for example, "x% of South Delhi builder floors
                  built before 2010 show waterproofing issues." This
                  aggregated data cannot identify you or your property and
                  may be used in our internal research and external
                  publications.
                </p>
              </Block>

              <Block title="5. Where it is stored">
                <p>
                  Customer data is stored in encrypted cloud services hosted
                  in India and Singapore. Reports are stored for seven years
                  to support the service guarantee and any later inquiries
                  you may have.
                </p>
              </Block>

              <Block title="6. Your rights">
                <p>
                  You may request a copy of your data, request deletion
                  (subject to legal record-keeping obligations), or correct
                  any inaccuracies, by writing to {site.email}. We respond
                  to such requests within 14 working days.
                </p>
              </Block>

              <Block title="7. Cookies and analytics">
                <p>
                  Our website does not currently use tracking cookies or
                  third-party analytics that profile individual visitors. If
                  this changes in future, this policy will be updated and
                  prominent notice will be given.
                </p>
              </Block>

              <Block title="8. Contact">
                <p>
                  For privacy matters write to{' '}
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
