import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  eyebrow?: string;
  title: string;
  description: string;
  priceLabel: string;
  href: string;
  highlight?: boolean;
}

export default function ServiceCard({
  eyebrow,
  title,
  description,
  priceLabel,
  href,
  highlight = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col border bg-paper p-8 transition-all duration-200 hover:border-ink md:p-10 ${
        highlight ? 'border-ink' : 'border-line'
      }`}
    >
      {eyebrow && (
        <p className="eyebrow mb-5">{eyebrow}</p>
      )}
      <h3 className="font-display text-h1 leading-tight text-ink">{title}</h3>
      <p className="mt-4 flex-1 text-body text-text-mid">{description}</p>
      <div className="mt-8 flex items-end justify-between border-t border-line pt-6">
        <div>
          <p className="text-caption text-text-mute">Starting from</p>
          <p className="font-display text-h2 text-ink tabular">{priceLabel}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center border border-ink transition-colors group-hover:bg-ink group-hover:text-paper">
          <ArrowRight size={16} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}
