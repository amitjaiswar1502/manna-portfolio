import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0D0F12] text-slate-900 dark:text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-[#C25934] font-mono font-bold text-xl">
          404
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold">Page Not Found</h1>
        <p className="text-stone-600 dark:text-stone-400 text-sm">
          The requested page could not be found. Return to Manoj Manna&apos;s Senior UX Designer portfolio.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block px-6 py-2.5 rounded-full bg-[#C25934] text-white text-sm font-medium hover:bg-[#A84524] transition-colors"
          >
            Return to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
