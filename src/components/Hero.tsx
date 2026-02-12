import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <div className="flex-shrink-0 text-center lg:text-left lg:max-w-md xl:max-w-lg z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A2332] leading-tight">
              Voyage plus.
              <br />
              Paye moins.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#1A2332]/70 max-w-xl mx-auto lg:mx-0">
              On scanne les vols depuis tes aeroports 24/7 et on t&apos;alerte quand un
              prix chute de -30% ou plus. Tu reserves en un clic.
            </p>

            <div id="download" className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src="/app-store.png"
                  alt="Telecharger sur l'App Store"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </a>

              <a href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src="/google-play.png"
                  alt="Disponible sur Google Play"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-center lg:-ml-32 xl:-ml-48">
            <Image
              src="/mockup.png"
              alt="Yoopi App"
              width={1200}
              height={1200}
              className="w-[600px] md:w-[800px] lg:w-[900px] xl:w-[1000px] h-auto max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
