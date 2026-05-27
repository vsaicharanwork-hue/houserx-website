import { Shield, FileCheck, UserX, Eye } from 'lucide-react';

const signals = [
  {
    icon: Shield,
    title: 'No commissions on repairs',
    description:
      'We do not earn a single rupee from contractors, vendors, or any repair you choose to do.',
  },
  {
    icon: UserX,
    title: 'No contractors on payroll',
    description:
      'We are inspectors, not a marketplace. We diagnose. Whom you hire next is your decision.',
  },
  {
    icon: Eye,
    title: 'Full disclosure to you',
    description:
      'The report we deliver is the report you receive. We do not soften findings for sellers or brokers.',
  },
  {
    icon: FileCheck,
    title: 'Service guarantee',
    description:
      'If a defect we should have identified surfaces within 90 days, we refund up to your inspection fee.',
  },
];

export default function TrustSignals() {
  return (
    <section className="section bg-paper">
      <div className="container-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Why we are different</p>
          <h2 className="font-display text-display-md text-ink">
            Independence is our entire business.
          </h2>
          <p className="mt-5 text-body-lg text-text-mid">
            Every other player in this space has a financial interest in
            finding more problems. We do not. That is the moat.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="bg-paper p-8 md:p-10"
              >
                <Icon size={28} strokeWidth={1.25} className="text-teal" />
                <h3 className="mt-6 font-display text-h2 text-ink">
                  {signal.title}
                </h3>
                <p className="mt-3 text-body text-text-mid">
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
