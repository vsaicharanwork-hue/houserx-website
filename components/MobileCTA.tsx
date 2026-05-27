'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { site, waUrl, whatsappMessages } from '@/lib/site';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-cream p-3 lg:hidden">
      <a
        href={`tel:${site.phoneLink}`}
        className="flex items-center justify-center gap-2 rounded border border-ink py-3 text-body font-medium text-ink"
        aria-label="Call HouseRx"
      >
        <Phone size={16} strokeWidth={1.75} />
        Call
      </a>
      <a
        href={waUrl(whatsappMessages.default)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded bg-ink py-3 text-body font-medium text-paper"
        aria-label="WhatsApp HouseRx"
      >
        <MessageCircle size={16} strokeWidth={1.75} />
        WhatsApp
      </a>
    </div>
  );
}
