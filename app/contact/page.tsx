import type { Metadata } from 'next';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { site, waUrl, whatsappMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with HouseRx. WhatsApp is fastest. Phone and email also work. We respond within an hour during business hours.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="container-wrap">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            One message away.
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-text-mid">
            WhatsApp is the fastest. Most inquiries get a response within an
            hour during business hours. Phone and email also work. We are not
            available on Instagram DM — please use one of the channels below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Primary CTA: WhatsApp */}
            <div className="lg:col-span-7">
              <div className="border border-ink bg-paper p-8 md:p-12">
                <MessageCircle
                  size={32}
                  strokeWidth={1.5}
                  className="text-teal"
                />
                <h2 className="mt-6 font-display text-h1 text-ink">
                  WhatsApp us
                </h2>
                <p className="mt-4 text-body-lg text-text-mid">
                  The fastest way to reach us. Send your address, approximate
                  carpet area, and a convenient time slot. We confirm pricing
                  and a slot within an hour.
                </p>
                <a
                  href={waUrl(whatsappMessages.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8"
                >
                  <MessageCircle size={16} strokeWidth={1.75} />
                  Start a WhatsApp Chat
                </a>
                <p className="mt-6 text-caption text-text-mute">
                  Or save our number: {site.phone}
                </p>
              </div>

              {/* Quick prompts */}
              <div className="mt-10">
                <p className="eyebrow mb-4">Quick prompts</p>
                <p className="text-body text-text-mid">
                  Use one of these if you want to skip introductions:
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    { label: 'Pre-purchase audit', msg: whatsappMessages.buyer },
                    {
                      label: 'Annual home check',
                      msg: whatsappMessages.annual,
                    },
                    {
                      label: 'Monsoon seepage',
                      msg: whatsappMessages.monsoon,
                    },
                    {
                      label: 'I have questions',
                      msg: whatsappMessages.contact,
                    },
                  ].map((p) => (
                    <a
                      key={p.label}
                      href={waUrl(p.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-line bg-paper px-4 py-2 text-caption text-ink transition-colors hover:border-ink"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Alternative contact methods */}
            <div className="lg:col-span-5">
              <div className="space-y-px bg-line">
                <div className="bg-cream p-6 md:p-8">
                  <Phone size={20} strokeWidth={1.5} className="text-teal" />
                  <p className="mt-4 eyebrow">Call us</p>
                  <a
                    href={`tel:${site.phoneLink}`}
                    className="mt-1 block font-display text-h2 text-ink hover:text-teal"
                  >
                    {site.phone}
                  </a>
                </div>
                <div className="bg-cream p-6 md:p-8">
                  <Mail size={20} strokeWidth={1.5} className="text-teal" />
                  <p className="mt-4 eyebrow">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block font-display text-h3 text-ink hover:text-teal"
                  >
                    {site.email}
                  </a>
                </div>
                <div className="bg-cream p-6 md:p-8">
                  <MapPin size={20} strokeWidth={1.5} className="text-teal" />
                  <p className="mt-4 eyebrow">Service area</p>
                  <p className="mt-1 text-body text-ink">
                    South Delhi
                    <br />
                    (Greater Kailash, CR Park, Defence Colony, Alaknanda,
                    Kalkaji, South Ex, East of Kailash, Hauz Khas, Lajpat
                    Nagar, and adjacent premium clusters)
                  </p>
                </div>
                <div className="bg-cream p-6 md:p-8">
                  <Clock size={20} strokeWidth={1.5} className="text-teal" />
                  <p className="mt-4 eyebrow">Hours</p>
                  <p className="mt-1 text-body text-ink">
                    Monday to Saturday
                    <br />
                    9:00 AM to 7:00 PM
                  </p>
                  <p className="mt-3 text-caption text-text-mute">
                    Sunday and holiday inspections available with a small
                    surcharge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
