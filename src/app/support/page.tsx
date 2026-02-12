import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - Yoopi',
  description: 'Besoin d\'aide avec Yoopi ? Consultez notre FAQ ou contactez-nous.',
};

const faqs = [
  {
    question: 'Comment fonctionne Yoopi ?',
    answer:
      'Yoopi scanne en permanence les prix des vols depuis tes aeroports favoris. Des qu\'un prix chute de 30% ou plus, tu recois une notification push. Tu peux ensuite reserver directement aupres de la compagnie aerienne en quelques clics.',
  },
  {
    question: 'Est-ce que Yoopi est gratuit ?',
    answer:
      'L\'application Yoopi est gratuite a telecharger et a utiliser. Nous proposons egalement des fonctionnalites premium pour les voyageurs les plus assidus.',
  },
  {
    question: 'Comment configurer mes alertes ?',
    answer:
      'Dans l\'application, va dans "Parametres" puis "Mes aeroports". Tu peux y ajouter tes aeroports de depart favoris et tes destinations preferees. Tu recevras ensuite des alertes personnalisees.',
  },
  {
    question: 'Pourquoi le prix a change quand j\'ai clique sur le deal ?',
    answer:
      'Les prix des vols sont tres volatils et peuvent changer en quelques minutes. Nous faisons de notre mieux pour t\'alerter le plus rapidement possible, mais il arrive que les deals expirent avant que tu aies le temps de reserver.',
  },
  {
    question: 'Comment desactiver les notifications ?',
    answer:
      'Tu peux gerer tes notifications dans les parametres de l\'application ou directement dans les reglages de ton telephone. Nous te recommandons de garder les notifications activees pour ne pas manquer les meilleurs deals.',
  },
  {
    question: 'Yoopi vend-il mes donnees ?',
    answer:
      'Non, nous ne vendons jamais tes donnees personnelles. Consulte notre Politique de Confidentialite pour plus de details sur la facon dont nous protegeons ta vie privee.',
  },
  {
    question: 'Comment supprimer mon compte ?',
    answer:
      'Tu peux supprimer ton compte dans les parametres de l\'application. Tu peux egalement nous contacter par email pour demander la suppression de toutes tes donnees.',
  },
];

export default function SupportPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
          Support
        </h1>
        <p className="text-lg text-[#1A2332]/70 mb-12">
          Une question ? On est la pour t&apos;aider.
        </p>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#1A2332]/10 to-[#1A2332]/5 rounded-2xl p-8 border border-[#1A2332]/10">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              Contacte-nous
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Tu n&apos;as pas trouve de reponse a ta question ? Ecris-nous directement.
            </p>
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
            Questions frequentes
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
