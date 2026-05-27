import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'HouseRx was founded to bring honest, independent home audits to premium Indian homeowners. Read the founding story.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">About</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            We started this
            <br />
            <span className="italic text-teal">because we had to.</span>
          </h1>
        </div>
      </section>

      {/* The story */}
      <section className="section">
        <div className="container-wrap">
          <div className="mx-auto max-w-prose">
            <div className="prose-content">
              <p>
                Most people in South Delhi have a story about a home that
                looked perfect on the day of purchase and started revealing
                its problems six months later. Seepage from above. Wiring
                that tripped every monsoon. A bathroom slab quietly leaking
                into the flat below.
              </p>
              <p>
                In every one of those stories, the homeowner had asked
                someone they trusted — a contractor, a broker, an
                architect-friend, a relative who "knew building work" — to
                walk through the property before they signed. And in every
                one of those stories, the trusted person had missed the
                issues that mattered most.
              </p>
              <p>
                Not because they were dishonest. Because the inspection was
                a favour, not a profession. And because the people who
                actually knew where to look — civil engineers, structural
                surveyors, electrical specialists — were either too
                expensive, too slow, or quietly attached to a repair
                business that benefitted from looking the other way.
              </p>
              <p>
                HouseRx was started to fix exactly this gap. An independent
                home audit, run by trained inspectors, with one explicit
                rule: we do not earn anything from repairs. Not directly.
                Not through partners. Not through silent commissions. The
                report is the entire product.
              </p>
              <p>
                That sounds like a small thing to build a business around.
                In this market, it turns out to be the most important thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder card */}
      <section className="section bg-paper">
        <div className="container-wrap">
          <div className="mx-auto max-w-4xl border border-line bg-cream p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-4">
                <div
                  className="flex aspect-square w-full items-center justify-center bg-ink"
                  aria-label="Founder portrait placeholder"
                >
                  <span className="font-display text-display-md italic text-teal/80">
                    Sai
                  </span>
                </div>
                <p className="mt-4 text-caption text-text-mute">
                  {/* DEVELOPER NOTE: Replace the styled placeholder above with a real founder portrait
                      before launch. Use an Image component with a 1:1 cropped photo. */}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="eyebrow mb-3">Founder</p>
                <h2 className="font-display text-h1 text-ink">Sai</h2>
                <p className="mt-1 text-body italic text-teal">
                  Founder, HouseRx
                </p>
                <p className="mt-6 text-body text-text-mid">
                  Sai is a South Delhi resident and a long-time builder of
                  premium consumer-services businesses. He started HouseRx
                  after watching close friends and family go through painful
                  surprises with homes they had bought after due diligence
                  that, in hindsight, was no diligence at all.
                </p>
                <p className="mt-4 text-body text-text-mid">
                  He runs HouseRx personally — every audit in the first
                  months passes through his oversight — and is reachable
                  directly via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-wrap">
          <SectionHeader
            eyebrow="What we believe"
            title="Five quiet principles."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Diagnosis is the product.',
                body: 'Not the lead. Not the sales call. Not the upsell. The diagnosis itself is what we sell, and what we will only ever sell.',
              },
              {
                n: '02',
                title: 'Independence is structural.',
                body: 'Trust is not a marketing message. It comes from the business model. Ours is built so that finding more problems earns us nothing.',
              },
              {
                n: '03',
                title: 'Depth beats coverage.',
                body: 'We work in South Delhi only. We will not expand for vanity. We will expand only when the next geography can be served at the same depth.',
              },
              {
                n: '04',
                title: 'Customers decide. Always.',
                body: 'We do not chase. We do not upsell. We do not refer you to vendors we earn from. Your home, your money, your call.',
              },
              {
                n: '05',
                title: 'Boring beats clever.',
                body: 'We do not invent new methodologies every quarter. We do the same 127-point inspection every time. Consistency is a feature.',
              },
            ].map((v) => (
              <div key={v.n} className="border-t border-line pt-6">
                <p className="font-display text-h2 italic text-teal tabular">
                  {v.n}
                </p>
                <h3 className="mt-3 font-display text-h2 text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-body text-text-mid">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to know more before you book?"
        description="The fastest way to assess us is a quick conversation. Drop us a message — we'll respond personally."
      />
    </>
  );
}
