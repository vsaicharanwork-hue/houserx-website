import { site } from '@/lib/site';

export default function sitemap() {
  const routes = [
    '',
    '/services',
    '/services/buyer-audit',
    '/services/annual-audit',
    '/services/monsoon-audit',
    '/how-it-works',
    '/sample-report',
    '/why-us',
    '/about',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.7,
  }));
}
