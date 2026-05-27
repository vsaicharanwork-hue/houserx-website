import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { site, waUrl, whatsappMessages } from '@/lib/site';

const footerNav = {
  Services: [
    { label: 'Pre-Purchase Audit', href: '/services/buyer-audit' },
    { label: 'Annual Home Check', href: '/services/annual-audit' },
    { label: 'Monsoon Special', href: '/services/monsoon-audit' },
    { label: 'Sample Report', href: '/sample-report' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Why HouseRx', href: '/why-us' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'FAQ', href: '/faq' },
  ],
  Contact: [
    { label: 'Get in Touch', href: '/contact' },
    { label: 'Book an Audit', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="container-wrap py-16 md:py-20">
        {/* Top: brand promise */}
        <div className="grid gap-12 border-b border-line pb-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-baseline gap-1 font-display text-3xl text-ink"
            >
              <span className="font-medium">House</span>
              <span className="italic text-teal">Rx</span>
            </Link>
            <p className="mt-4 max-w-sm font-display text-h2 leading-tight text-ink">
              The independent home health audit.
            </p>
            <p className="mt-3 text-body text-text-mid">
              We diagnose. You decide. No commissions, no repairs, no conflicts
              of interest.
            </p>
            <a
              href={waUrl(whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              Book an Audit
            </a>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {Object.entries(footerNav).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="eyebrow mb-5">{heading}</h4>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-body text-text-mid transition-colors hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: contact strip */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Phone
              size={18}
              strokeWidth={1.5}
              className="mt-1 flex-none text-teal"
            />
            <div>
              <p className="text-caption text-text-mute">Call us</p>
              <a
                href={`tel:${site.phoneLink}`}
                className="text-body text-ink hover:text-teal"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail
              size={18}
              strokeWidth={1.5}
              className="mt-1 flex-none text-teal"
            />
            <div>
              <p className="text-caption text-text-mute">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="text-body text-ink hover:text-teal"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin
              size={18}
              strokeWidth={1.5}
              className="mt-1 flex-none text-teal"
            />
            <div>
              <p className="text-caption text-text-mute">Service area</p>
              <p className="text-body text-ink">South Delhi</p>
            </div>
          </div>
        </div>

        {/* Bottom: legal strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-caption text-text-mute md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-ink">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
