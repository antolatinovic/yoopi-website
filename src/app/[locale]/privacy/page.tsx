import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.privacy' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Privacy' });

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-8">
          {t('title')}
        </h1>
        <p className="text-sm text-[#1A2332]/60 mb-8">{t('lastUpdate')}</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section1.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section1.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section2.title')}
            </h2>
            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              {t('section2.subtitle1')}
            </h3>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section2.items1') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              {t('section2.subtitle2')}
            </h3>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section2.items2') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section3.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section3.intro')}</p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section3.items') as string[]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section4.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section4.intro')}</p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section4.items') as { title: string; content: string }[]).map(
                (item, i) => (
                  <li key={i}>
                    <strong>{item.title}</strong> {item.content}
                  </li>
                )
              )}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section5.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section5.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section6.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section6.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section7.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section7.intro')}</p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              {(t.raw('section7.items') as { title: string; content: string }[]).map(
                (item, i) => (
                  <li key={i}>
                    <strong>{item.title}</strong> {item.content}
                  </li>
                )
              )}
            </ul>
            <p className="text-[#1A2332]/70 mb-4">
              {t('section7.contact')}{' '}
              <a
                href="mailto:contact@yoopi.app"
                className="text-[#1A2332] underline hover:underline"
              >
                contact@yoopi.app
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section8.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section8.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section9.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section9.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section10.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section10.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section11.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('section11.content')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('section12.title')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              {t('section12.content')}{' '}
              <a
                href="mailto:contact@yoopi.app"
                className="text-[#1A2332] underline hover:underline"
              >
                contact@yoopi.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
