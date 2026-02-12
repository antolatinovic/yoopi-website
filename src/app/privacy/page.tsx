import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialite - Yoopi',
  description: 'Politique de Confidentialite de l\'application Yoopi',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-8">
          Politique de Confidentialite
        </h1>
        <p className="text-sm text-[#1A2332]/60 mb-8">
          Derniere mise a jour : 1er janvier 2025
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              1. Introduction
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Yoopi (&quot;nous&quot;, &quot;notre&quot;, &quot;nos&quot;) s&apos;engage a proteger la vie privee
              de ses utilisateurs. Cette Politique de Confidentialite explique
              comment nous collectons, utilisons, partageons et protegeons vos
              informations personnelles lorsque vous utilisez notre application
              mobile (&quot;l&apos;Application&quot;).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              2. Informations que nous collectons
            </h2>

            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              2.1 Informations que vous nous fournissez
            </h3>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li>Adresse email (lors de l&apos;inscription)</li>
              <li>Preferences de voyage (aeroports de depart, destinations souhaitees)</li>
              <li>Parametres de notification</li>
            </ul>

            <h3 className="text-lg font-medium text-[#1A2332] mb-3">
              2.2 Informations collectees automatiquement
            </h3>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li>Donnees d&apos;utilisation de l&apos;Application (pages consultees, fonctionnalites utilisees)</li>
              <li>Informations sur l&apos;appareil (modele, systeme d&apos;exploitation, identifiants uniques)</li>
              <li>Donnees de localisation approximative (pays, region) basees sur l&apos;adresse IP</li>
              <li>Informations de performance et de diagnostic</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              3. Comment nous utilisons vos informations
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Nous utilisons vos informations pour :
            </p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li>Fournir et personnaliser nos services</li>
              <li>Vous envoyer des alertes de prix et des notifications pertinentes</li>
              <li>Ameliorer et optimiser l&apos;Application</li>
              <li>Analyser les tendances d&apos;utilisation</li>
              <li>Communiquer avec vous concernant votre compte ou nos services</li>
              <li>Prevenir les fraudes et assurer la securite</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              4. Partage de vos informations
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Nous ne vendons pas vos informations personnelles. Nous pouvons
              partager vos informations dans les cas suivants :
            </p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li>
                <strong>Prestataires de services :</strong> avec des tiers qui nous
                aident a fournir nos services (hebergement, analyses, notifications)
              </li>
              <li>
                <strong>Obligations legales :</strong> si la loi l&apos;exige ou pour
                proteger nos droits
              </li>
              <li>
                <strong>Transfert d&apos;entreprise :</strong> en cas de fusion,
                acquisition ou vente d&apos;actifs
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              5. Securite des donnees
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Nous mettons en oeuvre des mesures de securite techniques et
              organisationnelles appropriees pour proteger vos informations
              personnelles contre l&apos;acces non autorise, la modification, la
              divulgation ou la destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              6. Conservation des donnees
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Nous conservons vos informations personnelles aussi longtemps que
              necessaire pour fournir nos services et respecter nos obligations
              legales. Vous pouvez demander la suppression de votre compte et de
              vos donnees a tout moment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              7. Vos droits
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Conformement au RGPD et aux lois applicables, vous disposez des droits
              suivants :
            </p>
            <ul className="list-disc list-inside text-[#1A2332]/70 mb-4 space-y-2">
              <li><strong>Droit d&apos;acces :</strong> obtenir une copie de vos donnees personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos donnees inexactes</li>
              <li><strong>Droit a l&apos;effacement :</strong> demander la suppression de vos donnees</li>
              <li><strong>Droit a la portabilite :</strong> recevoir vos donnees dans un format structure</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donnees</li>
              <li><strong>Droit de retirer votre consentement :</strong> a tout moment pour les traitements bases sur le consentement</li>
            </ul>
            <p className="text-[#1A2332]/70 mb-4">
              Pour exercer ces droits, contactez-nous a{' '}
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
              8. Cookies et technologies similaires
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              L&apos;Application peut utiliser des technologies de suivi pour ameliorer
              votre experience. Vous pouvez gerer vos preferences dans les
              parametres de l&apos;Application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              9. Transferts internationaux
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Vos informations peuvent etre transferees et traitees dans des pays
              autres que votre pays de residence. Nous nous assurons que des
              garanties appropriees sont en place pour proteger vos donnees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              10. Mineurs
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              L&apos;Application n&apos;est pas destinee aux personnes de moins de 16 ans.
              Nous ne collectons pas sciemment d&apos;informations personnelles aupres
              de mineurs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              11. Modifications de cette politique
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Nous pouvons mettre a jour cette Politique de Confidentialite de
              temps a autre. Nous vous informerons de tout changement important par
              notification dans l&apos;Application ou par email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#1A2332] mb-4">
              12. Contact
            </h2>
            <p className="text-[#1A2332]/70 mb-4">
              Pour toute question concernant cette Politique de Confidentialite ou
              pour exercer vos droits, contactez-nous a :{' '}
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
