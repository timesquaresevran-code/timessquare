import LegalPageLayout from "@/components/LegalPageLayout";

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageLayout 
      title="Politique de Confidentialité" 
      lastUpdated="Juin 2026"
    >
      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mb-4 border-b border-ts-red/20 pb-2">1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données à caractère personnel collectées sur ce site est :<br />
          <strong>[RAISON_SOCIALE]</strong><br />
          2e Bd Westinghouse, 93270 Sevran<br />
          [EMAIL_CONTACT]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">2. Données collectées</h2>
        <p className="mb-3">Nous pouvons collecter les données suivantes :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Données de contact :</strong> nom, prénom, numéro de téléphone, adresse e-mail (via un éventuel formulaire de contact futur).</li>
          <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées (via les cookies d'audience éventuels).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">3. Finalités du traitement</h2>
        <p className="mb-3">Vos données sont collectées pour :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gérer vos demandes de contact et y répondre.</li>
          <li>Gérer d'éventuelles réservations ou commandes.</li>
          <li>Analyser l'audience du site et améliorer l'expérience utilisateur.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">4. Base légale</h2>
        <p>
          Le traitement de vos données est fondé sur :<br />
          - <strong>Votre consentement</strong> (pour l'utilisation des cookies non nécessaires et le formulaire de contact).<br />
          - <strong>L'intérêt légitime</strong> de l'éditeur (pour la sécurité du site).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">5. Durée de conservation</h2>
        <p>
          Vos données personnelles sont conservées pendant une durée qui n'excède pas la durée nécessaire aux finalités pour lesquelles elles ont été collectées :<br />
          - Données de contact : 3 ans après le dernier contact.<br />
          - Données de navigation (cookies) : maximum 13 mois.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">6. Destinataires</h2>
        <p>
          Les données collectées sont destinées exclusivement à la direction de Times Square Sevran. Elles ne sont en aucun cas vendues ou cédées à des tiers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">7. Services tiers éventuels</h2>
        <p>
          Le site peut être amené à utiliser des services tiers pour son fonctionnement (par exemple : intégration Google Maps, affichage d'avis Google, outils de mesure d'audience). Ces tiers peuvent collecter des données selon leurs propres politiques de confidentialité que nous vous invitons à consulter.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">8. Droits des utilisateurs</h2>
        <p className="mb-3">Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Droit d'accès et de rectification de vos données.</li>
          <li>Droit d'effacement (droit à l'oubli).</li>
          <li>Droit à la limitation et à l'opposition au traitement.</li>
          <li>Droit à la portabilité de vos données.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">9. Sécurité</h2>
        <p>
          Nous mettons en œuvre les mesures techniques et organisationnelles appropriées afin de garantir la sécurité et la confidentialité de vos données personnelles, notamment contre toute perte, altération ou accès non autorisé. Le site est sécurisé par un certificat SSL (HTTPS).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">10. Contact</h2>
        <p>
          Pour toute question relative à cette politique ou pour exercer vos droits, vous pouvez nous contacter :<br />
          - Par email : [EMAIL_CONTACT]<br />
          - Par courrier : Times Square Sevran, 2e Bd Westinghouse, 93270 Sevran
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">11. Mise à jour de la politique</h2>
        <p>
          Cette politique de confidentialité peut être modifiée à tout moment pour se conformer aux évolutions légales, réglementaires ou techniques. Les utilisateurs sont invités à la consulter régulièrement.
        </p>
      </section>
    </LegalPageLayout>
  );
}
