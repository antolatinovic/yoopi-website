'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50/80 rounded-3xl py-16 px-8 shadow-xl shadow-black/10">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 overflow-hidden shadow-xl shadow-black/15">
              <Image
                src="/mascot-footer.png"
                alt="Yoopi"
                width={96}
                height={96}
                className="w-20 h-20 object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1A2332] mb-8">Yoopi</h2>

            <nav className="flex flex-col items-center gap-4 mb-8">
              <Link
                href="/terms"
                className="text-[#1A2332]/60 hover:text-[#1A2332] transition-colors font-medium"
              >
                {t('terms')}
              </Link>
              <Link
                href="/privacy"
                className="text-[#1A2332]/60 hover:text-[#1A2332] transition-colors font-medium"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/support"
                className="text-[#1A2332]/60 hover:text-[#1A2332] transition-colors font-medium"
              >
                {t('support')}
              </Link>
              <Link
                href="/delete-account"
                className="text-[#1A2332]/60 hover:text-[#1A2332] transition-colors font-medium"
              >
                {t('deleteAccount')}
              </Link>
            </nav>

            <a
              href="mailto:contact@yoopi-app.com"
              className="text-[#1A2332]/50 hover:text-[#1A2332] transition-colors mb-8"
            >
              contact@yoopi-app.com
            </a>

            <p className="text-[#1A2332]/40 text-sm">{t('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
