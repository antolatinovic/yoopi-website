'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const tLang = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <div className="max-w-5xl mx-auto">
        <nav className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-white/50 px-6 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight text-[#1A2332]">
            Yoopi
          </Link>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#1A2332]/5 rounded-full p-1">
              <button
                onClick={() => switchLocale('fr')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  locale === 'fr'
                    ? 'bg-[#1A2332] text-white'
                    : 'text-[#1A2332]/70 hover:text-[#1A2332]'
                }`}
              >
                {tLang('fr')}
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  locale === 'en'
                    ? 'bg-[#1A2332] text-white'
                    : 'text-[#1A2332]/70 hover:text-[#1A2332]'
                }`}
              >
                {tLang('en')}
              </button>
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
