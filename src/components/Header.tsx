'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <nav className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-white/50 px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#1A2332]">
            Yoopi
          </Link>

          <a
            href="#download"
            className="bg-[#FFB100] hover:bg-[#E9A200] text-[#1A2332] font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Telecharge Yoopi
          </a>
        </nav>
      </div>
    </header>
  );
}
