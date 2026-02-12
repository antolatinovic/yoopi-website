import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Generales d\'Utilisation - Yoopi',
  description: 'Conditions Generales d\'Utilisation de l\'application Yoopi',
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-8">
          Conditions Generales d&apos;Utilisation
        </h1>
        <p className="text-sm text-[#1A2332]/60 mb-8">
          Derniere mise a jour : 1er janvier 2025
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              1. Acceptation des conditions
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              En telechargeant, installant ou utilisant l&apos;application Yoopi
              (&quot;l&apos;Application&quot;), vous acceptez d&apos;etre lie par les presentes
              Conditions Generales d&apos;Utilisation (&quot;CGU&quot;). Si vous n&apos;acceptez pas
              ces conditions, veuillez ne pas utiliser l&apos;Application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              2. Description du service
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Yoopi est une application mobile qui permet aux utilisateurs de :
            </p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li>Recevoir des alertes sur les baisses de prix de vols</li>
              <li>Consulter des offres de vols a prix reduits</li>
              <li>Acceder a des liens de reservation aupres de compagnies aeriennes tierces</li>
            </ul>
            <p className="text-[#1A2332]/70 mb-4">
              Yoopi agit uniquement en tant qu&apos;intermediaire d&apos;information et ne
              vend pas directement de billets d&apos;avion. Toute reservation est
              effectuee directement aupres des compagnies aeriennes ou agences de
              voyage partenaires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              3. Inscription et compte utilisateur
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Pour utiliser certaines fonctionnalites de l&apos;Application, vous devez
              creer un compte. Vous vous engagez a :
            </p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li>Fournir des informations exactes et completes</li>
              <li>Maintenir la confidentialite de vos identifiants de connexion</li>
              <li>Nous informer immediatement de toute utilisation non autorisee de votre compte</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              4. Utilisation acceptable
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Vous vous engagez a ne pas :
            </p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li>Utiliser l&apos;Application a des fins illegales</li>
              <li>Tenter de contourner les mesures de securite de l&apos;Application</li>
              <li>Collecter des donnees d&apos;autres utilisateurs sans leur consentement</li>
              <li>Utiliser des robots ou des scripts automatises pour acceder a l&apos;Application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              5. Propriete intellectuelle
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              L&apos;Application et tout son contenu (textes, graphiques, logos, icones,
              images, clips audio, telechargements numeriques) sont la propriete de
              Yoopi ou de ses concedants de licence et sont proteges par les lois
              sur la propriete intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              6. Limitation de responsabilite
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Yoopi s&apos;efforce de fournir des informations exactes sur les prix des
              vols. Cependant, nous ne garantissons pas l&apos;exactitude, l&apos;exhaustivite
              ou l&apos;actualite des informations affichees. Les prix et disponibilites
              peuvent varier et sont sujets a modification par les compagnies
              aeriennes sans preavis.
            </p>
            <p className="text-[#1A2332]/70 mb-4">
              Yoopi ne saurait etre tenu responsable de tout dommage direct,
              indirect, accessoire ou consecutif resultant de l&apos;utilisation de
              l&apos;Application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              7. Modifications des CGU
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Nous nous reservons le droit de modifier ces CGU a tout moment. Les
              modifications entreront en vigueur des leur publication dans
              l&apos;Application. Votre utilisation continue de l&apos;Application apres la
              publication des modifications constitue votre acceptation de ces
              modifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              8. Resiliation
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Nous pouvons suspendre ou resilier votre acces a l&apos;Application a tout
              moment, sans preavis, pour toute raison, y compris en cas de violation
              de ces CGU.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              9. Droit applicable et juridiction
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Les presentes CGU sont regies par le droit francais. Tout litige
              relatif a l&apos;interpretation ou a l&apos;execution des presentes sera soumis
              a la competence exclusive des tribunaux francais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              10. Contact
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Pour toute question concernant ces CGU, veuillez nous contacter a :{' '}
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
