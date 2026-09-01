'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0D0F12] text-slate-900 dark:text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 font-mono font-bold text-xl">
          !
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold">Something went wrong</h1>
        <p className="text-stone-600 dark:text-stone-400 text-sm">
          An unexpected error occurred while rendering the page.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-full bg-[#C25934] text-white text-sm font-medium hover:bg-[#A84524] transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-stone-200 dark:bg-stone-800 text-slate-900 dark:text-slate-100 text-sm font-medium hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
