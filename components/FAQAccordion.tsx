'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQAccordionProps {
  faqs: {
    category: string;
    items: { q: string; a: string }[];
  }[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <>
      {faqs.map((cat) => (
        <div key={cat.category} className="mb-16 last:mb-0">
          <p className="eyebrow mb-6">{cat.category}</p>
          <div className="border-t border-line">
            {cat.items.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-teal"
        aria-expanded={open}
      >
        <span className="font-display text-h3 text-ink">{q}</span>
        <span className="mt-1 flex-none text-teal">
          {open ? (
            <Minus size={20} strokeWidth={1.5} />
          ) : (
            <Plus size={20} strokeWidth={1.5} />
          )}
        </span>
      </button>
      {open && (
        <div className="pb-6 pr-12">
          <p className="text-body text-text-mid">{a}</p>
        </div>
      )}
    </div>
  );
}
