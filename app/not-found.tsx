import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-wrap">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-6">404</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            This page,
            <br />
            <span className="italic text-teal">we could not find.</span>
          </h1>
          <p className="mt-6 text-body-lg text-text-mid">
            The page you are looking for may have moved or never existed. Take
            one of the doors below.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              <Home size={16} strokeWidth={1.75} />
              Back to Homepage
            </Link>
            <Link href="/services" className="btn-secondary">
              See Our Services
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
