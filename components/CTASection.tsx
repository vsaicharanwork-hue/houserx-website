import { MessageCircle, Phone } from 'lucide-react';
import { site, waUrl, whatsappMessages } from '@/lib/site';

interface CTASectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
  variant?: 'default' | 'dark';
}

export default function CTASection({
  title = 'Ready to know your home?',
  description = 'Most South Delhi homes carry ₹50k-₹2L of hidden issues. The audit takes 2-3 hours. The report stays with you forever.',
  whatsappMessage = whatsappMessages.default,
  variant = 'default',
}: CTASectionProps) {
  const isDark = variant === 'dark';
  return (
    <section
      className={`section ${isDark ? 'bg-ink text-paper' : 'bg-cream'}`}
    >
      <div className="container-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={`font-display text-display-md md:text-display-lg ${
              isDark ? 'text-paper' : 'text-ink'
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-6 text-body-lg ${
              isDark ? 'text-cream/80' : 'text-text-mid'
            }`}
          >
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isDark
                  ? 'btn bg-paper text-ink hover:bg-cream'
                  : 'btn-primary'
              }
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              WhatsApp Us
            </a>
            <a
              href={`tel:${site.phoneLink}`}
              className={
                isDark
                  ? 'btn border border-paper/30 text-paper hover:bg-paper/10'
                  : 'btn-secondary'
              }
            >
              <Phone size={16} strokeWidth={1.75} />
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
