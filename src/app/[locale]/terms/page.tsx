import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.terms' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Terms' });

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-8">
          {t('title')}
        </h1>
        <p className="text-sm text-[#1A2332]/60 mb-8">{t('lastUpdate')}</p>

        <div className="prose prose-gray max-w-none">
          {/* Section 1 - Objet */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section1.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section1.content1')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section1.content2')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section1.content3')}</p>
          </section>

          {/* Section 2 - Accès au service */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section2.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section2.intro')}</p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section2.items') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-[#1A2332]/70 mb-4">{t('section2.content')}</p>
          </section>

          {/* Section 3 - Offres et tarification */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section3.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section3.intro')}</p>

            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              {t('section3.freeTitle')}
            </h3>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section3.freeItems') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              {t('section3.premiumTitle')}
            </h3>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section3.premiumItems') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              {t('section3.pricingTitle')}
            </h3>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section3.pricingItems') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-[#1A2332]/70 mb-4">{t('section3.pricingNote')}</p>
          </section>

          {/* Section 4 - Modalités de paiement */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section4.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section4.content')}</p>

            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              {t('section4.renewalTitle')}
            </h3>
            <p className="text-[#1A2332]/70 mb-4">{t('section4.renewalContent1')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section4.renewalContent2')}</p>

            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              {t('section4.cancelTitle')}
            </h3>
            <p className="text-[#1A2332]/70 mb-4">{t('section4.cancelIntro')}</p>

            <h4 className="text-base font-medium text-[#1A2332] mb-2">
              {t('section4.cancelIosTitle')}
            </h4>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section4.cancelIosItems') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h4 className="text-base font-medium text-[#1A2332] mb-2">
              {t('section4.cancelAndroidTitle')}
            </h4>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section4.cancelAndroidItems') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="text-[#1A2332]/70 mb-4">{t('section4.refundNote')}</p>
          </section>

          {/* Section 5 - Droit de rétractation */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section5.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section5.content1')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section5.content2')}</p>
          </section>

          {/* Section 6 - Contenu et deals */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section6.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section6.intro')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section6.disclaimerIntro')}</p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section6.disclaimerItems') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-[#1A2332]/70 mb-4">{t('section6.note')}</p>
          </section>

          {/* Section 7 - Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section7.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section7.content1')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section7.content2')}</p>
          </section>

          {/* Section 8 - Responsabilité */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section8.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section8.content1')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section8.content2')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section8.disclaimerIntro')}</p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section8.disclaimerItems') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 9 - Données personnelles */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section9.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section9.content')}</p>
          </section>

          {/* Section 10 - Modification des CGV */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section10.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section10.content1')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section10.content2')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section10.content3')}</p>
          </section>

          {/* Section 11 - Droit applicable */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section11.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section11.content1')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section11.content2')}</p>
            <p className="text-[#1A2332]/70 mb-4">{t('section11.content3')}</p>
          </section>

          {/* Section 12 - Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section12.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              {t('section12.content')}{' '}
              <a
                href="mailto:contact@yoopi-app.com"
                className="text-[#1A2332] underline hover:underline"
              >
                contact@yoopi-app.com
              </a>
            </p>
          </section>

          {/* Section 13 - Mentions légales */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section13.title')}
            </h2>
            <ul className="text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section13.items') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
