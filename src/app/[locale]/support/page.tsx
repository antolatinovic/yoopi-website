import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.support' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Support' });
  const faqs = t.raw('faqs') as { question: string; answer: string }[];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-[#1A2332]/70 mb-12">{t('subtitle')}</p>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#1A2332]/10 to-[#1A2332]/5 rounded-2xl p-8 border border-[#1A2332]/10">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              {t('contactTitle')}
            </h2>
            <p className="text-[#1A2332]/70 mb-4">{t('contactText')}</p>
            <a
              href="mailto:contact@yoopi.app"
              className="inline-flex items-center gap-2 bg-[#1A2332] hover:bg-[#1A2332]/80 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contact@yoopi.app
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8">
            {t('faqTitle')}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#1A2332]/10 pb-6 last:border-0"
              >
                <h3 className="text-lg font-semibold text-[#1A2332] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#1A2332]/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
