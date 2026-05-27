// Single source of truth for site-wide configuration
// Edit these values to update them across the entire site

export const site = {
  name: 'HouseRx',
  tagline: 'The independent home health audit.',
  promise: 'We diagnose. You decide.',
  description:
    'Independent home health audits for South Delhi premium homes. 127-point diagnostic. Full PDF report. No commissions. No repairs.',

  // Contact details - UPDATE THESE before deploying
  phone: '+91 81300 45524',
  phoneLink: '+918130045524', // no spaces, no dashes, for tel: links
  whatsapp: '918130045524', // country code + number, no + sign, for wa.me links
  email: 'hello@houserx.in',
  address: 'New Delhi, Delhi, India',

  // URLs
  url: 'https://houserx.in',
  ogImage: '/og-image.png',

  // Service areas (for SEO and copy)
  serviceAreas: [
    'Greater Kailash',
    'CR Park',
    'Defence Colony',
    'Alaknanda',
    'Kalkaji',
    'South Ex',
    'East of Kailash',
    'Hauz Khas',
    'Lajpat Nagar',
  ],

  // Pricing - must match Execution Pack §5
  pricing: {
    buyer: { min: 9999, max: 25999 },
    annual: { min: 6999, max: 17999 },
    monsoon: { min: 4999, max: 8999 },
  },
};

// Pre-filled WhatsApp messages for different CTAs
export const whatsappMessages = {
  default:
    'Hi HouseRx, I would like to know more about your home health audit service.',
  buyer:
    "Hi HouseRx, I'm considering buying a property in South Delhi and would like a pre-purchase audit.",
  annual:
    'Hi HouseRx, I would like to book an annual home health check for my home.',
  monsoon:
    'Hi HouseRx, I would like to book a monsoon seepage audit for my home.',
  contact: "Hi HouseRx, I'd like to get in touch.",
};

// Generate WhatsApp URL
export const waUrl = (message: string = whatsappMessages.default) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
