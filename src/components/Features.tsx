import Image from 'next/image';

const features = [
  {
    title: 'Jusqu\'a -80% sur tes vols',
    description:
      'On traque les baisses de prix en continu. Des que le tarif chute, tu es le premier alerte.',
    image: '/feature-bloc2.png',
    icon: '/icon-deals.png',
  },
  {
    title: 'Alertes instantanées',
    description:
      'Push notification des qu\'un vol chute sous -30%. Avant que le deal disparaisse.',
    image: '/feature-bloc3.png',
    icon: '/icon-alerts.png',
  },
  {
    title: 'Tous les prix au même endroit',
    description:
      'On compare les tarifs des plus grandes plateformes en temps réel. Tu obtiens le meilleur deal sans ouvrir 10 sites.',
    image: '/feature-bloc4.png',
    icon: '/icon-compare.png',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32 md:space-y-48 lg:space-y-56">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={1600}
                  className="w-[600px] md:w-[800px] lg:w-[900px] xl:w-[1000px] h-auto max-w-none"
                />
              </div>

              {/* Texte */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                {feature.icon && (
                  <div className="mb-6 flex justify-center lg:justify-start">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={200}
                      height={200}
                      className="w-40 h-40 md:w-48 md:h-48"
                    />
                  </div>
                )}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2332] leading-tight">
                  <span className="bg-[#1A2332]/5 px-2 -mx-2 box-decoration-clone">
                    {feature.title}
                  </span>
                </h2>
                <p className="mt-6 text-lg md:text-xl text-[#1A2332]/70 max-w-lg mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
