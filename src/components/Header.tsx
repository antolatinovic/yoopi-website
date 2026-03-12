'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const tLang = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const fullPathname = usePathname();

  // Get path without locale prefix
  const getPathWithNewLocale = (newLocale: string) => {
    const pathWithoutLocale = fullPathname.replace(/^\/(fr|en)/, '');
    return `/${newLocale}${pathWithoutLocale || ''}`;
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <nav className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-white/50 px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#1A2332]">
            Yoopi
          </Link>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#1A2332]/5 rounded-full p-1">
              <a
                href={getPathWithNewLocale('fr')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  locale === 'fr'
                    ? 'bg-[#1A2332] text-white'
                    : 'text-[#1A2332]/70 hover:text-[#1A2332]'
                }`}
              >
                {tLang('fr')}
              </a>
              <a
                href={getPathWithNewLocale('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  locale === 'en'
                    ? 'bg-[#1A2332] text-white'
                    : 'text-[#1A2332]/70 hover:text-[#1A2332]'
                }`}
              >
                {tLang('en')}
              </a>
            </div>

            <a
              href="#download"
              className="bg-[#FFB100] hover:bg-[#E9A200] text-[#1A2332] font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              {t('download')}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
