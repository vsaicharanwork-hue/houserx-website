import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about HouseRx home audits — coverage, pricing, payment, trust, and process.',
};

const faqs = [
  {
    category: 'About the audit',
    items: [
      {
        q: 'What exactly does a HouseRx audit cover?',
        a: 'A 127-point inspection across six systems: civil and structural, waterproofing and seepage, plumbing, electrical, HVAC and appliances, and external and documentation. Every finding is photographed, severity-coded, and accompanied by a cost estimate. You receive a PDF report within 48 hours.',
      },
      {
        q: 'How long does the inspection take?',
        a: 'A Buyer Audit takes 3-4 hours on site. An Annual Health Check takes 2-3 hours. A Monsoon Special takes 90 minutes. The inspector will need access to every room, every bathroom, the kitchen, the terrace if accessible, and the meter rooms.',
      },
      {
        q: 'Do we need to open walls or break tiles?',
        a: 'No. The audit is entirely non-destructive. We use moisture meters, borescopes, thermal imagers, and other instruments to detect issues without breaking anything. If a finding requires destructive testing to confirm, we say so and recommend a structural engineer.',
      },
      {
        q: 'What is included in the report?',
        a: 'Executive summary with House Health Score, section-wise breakdown, severity-coded findings with photographs, cost estimates for every issue, a maintenance roadmap (or negotiation brief for Buyer Audits), scope and limitations, and the service guarantee terms.',
      },
    ],
  },
  {
    category: 'Pricing and payment',
    items: [
      {
        q: 'How is pricing calculated?',
        a: 'By property size and audit type. Pricing tiers are published on each service page. Add-ons like thermal imaging are priced separately. We send a written WhatsApp quote before any booking — no surprises.',
      },
      {
        q: 'How do I pay?',
        a: 'UPI advance, sent on WhatsApp before the slot is confirmed. This protects both sides and lets us schedule properly. We do not accept cash on site for first-time customers.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No. The quote we send on WhatsApp is the final amount. The only items that can change are add-ons you explicitly request (thermal imaging, borescope, water testing, etc.), and those are quoted before they happen.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Yes, in two scenarios. (1) If you cancel before the inspection starts, full refund. (2) If a defect that we should have identified surfaces within 90 days, we refund up to the inspection fee. Once an inspection is complete and the report is delivered, the fee is non-refundable.',
      },
    ],
  },
  {
    category: 'Trust and independence',
    items: [
      {
        q: 'Will you try to sell me repairs?',
        a: 'No. We do not execute any repairs. We do not partner with contractors who pay us referral fees. We do not maintain a panel of paid vendors. If you ask us to suggest someone, we may share names of independent contractors past customers have used — but we earn nothing from any choice you make.',
      },
      {
        q: 'How do I know you will not soften findings if a broker refers me?',
        a: 'Brokers who refer buyers to us sign an agreement that explicitly prohibits this. If a broker asks us to dilute a finding, we end the relationship. The buyer is always our customer, regardless of who introduced you to us. Every buyer also receives a written disclosure of any broker referral fee.',
      },
      {
        q: 'What if you miss something?',
        a: 'No inspection finds everything, and we say so in the report. But we stand behind the work: if you discover within 90 days a defect that should have been identified during inspection, we refund up to the inspection fee. We also re-inspect once free of charge within 30 days, no questions asked.',
      },
      {
        q: 'Are you certified?',
        a: 'Our inspectors carry civil engineering qualifications and field experience. HouseRx is not a structural engineering firm — we do not issue load-bearing certificates or DDA submissions, and we are transparent about this in every report. For certifications, we refer you to registered structural engineers.',
      },
    ],
  },
  {
    category: 'Process and logistics',
    items: [
      {
        q: 'How do I book?',
        a: 'WhatsApp us with your address, approximate carpet area, and 2-3 time slots that work. We confirm a quote within an hour during business hours. After UPI payment, the slot is locked.',
      },
      {
        q: 'Do you serve outside South Delhi?',
        a: 'Not in v1. We focus on South Delhi to build genuine locality-specific knowledge. If you are nearby and the property fits our profile (premium homeowner, ₹1 crore+ value), WhatsApp us anyway — we may make exceptions case by case.',
      },
      {
        q: 'I am abroad and cannot be present. Can you still inspect?',
        a: 'Yes. NRI buyers and remote owners are a significant share of our customers. The seller or their representative must grant access for the inspection slot. We can do a 60-minute video walkthrough on call after the inspection.',
      },
      {
        q: 'What if the seller does not allow access for 3 hours?',
        a: 'A common challenge with resale audits. We can adapt — usually the buyer can negotiate access in coordination with the broker. If access is limited, we run a shorter focused inspection and note the limitation in the report.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">Frequently Asked Questions</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            Questions,
            <br />
            <span className="italic text-teal">honestly answered.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-text-mid">
            If your question is not here, WhatsApp us. We reply personally,
            usually within an hour during business hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question we haven't answered?"
        description="WhatsApp us. We respond personally, usually within an hour."
      />
    </>
  );
}
