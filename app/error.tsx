'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, this is where you would log to an error tracking service
    console.error(error);
  }, [error]);

  return (
    <section className="section">
      <div className="container-wrap">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-6">Something went wrong</p>
          <h1 className="font-display text-display-md text-ink md:text-display-lg">
            A small fault,
            <br />
            <span className="italic text-teal">on our side.</span>
          </h1>
          <p className="mt-6 text-body-lg text-text-mid">
            The page hit an unexpected error. The team has been notified. Try
            again, or take one of the doors below.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary"
            >
              <RefreshCw size={16} strokeWidth={1.75} />
              Try Again
            </button>
            <Link href="/" className="btn-secondary">
              <Home size={16} strokeWidth={1.5} />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
