import LegalPageLayout from "@/components/LegalPageLayout";

export default function MentionsLegales() {
  return (
    <LegalPageLayout 
      title="Mentions Légales" 
      lastUpdated="Juin 2026"
    >
      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mb-4 border-b border-ts-red/20 pb-2">1. Éditeur du site</h2>
        <ul className="space-y-3">
          <li><strong>Nom commercial :</strong> Times Square Sevran</li>
          <li><strong>Raison sociale :</strong> [RAISON_SOCIALE]</li>
          <li><strong>Forme juridique :</strong> [FORME_JURIDIQUE]</li>
          <li><strong>Capital social :</strong> [CAPITAL_SOCIAL]</li>
          <li><strong>Siège social :</strong> 2e Bd Westinghouse, 93270 Sevran</li>
          <li><strong>Numéro SIRET :</strong> [SIRET]</li>
          <li><strong>RCS :</strong> [RCS]</li>
          <li><strong>Numéro TVA intracommunautaire :</strong> [TVA_INTRACOMMUNAUTAIRE]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">2. Directeur de la publication</h2>
        <p><strong>Directeur de la publication :</strong> [DIRECTEUR_PUBLICATION]</p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">3. Hébergement</h2>
        <ul className="space-y-3">
          <li><strong>Nom de l'hébergeur :</strong> [HEBERGEUR_NOM]</li>
          <li><strong>Adresse :</strong> [HEBERGEUR_ADRESSE]</li>
          <li><strong>Téléphone :</strong> [HEBERGEUR_TELEPHONE]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">4. Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu du site [URL_SITE] (textes, images, vidéos, logos, graphismes, etc.) est protégé par le droit d'auteur et la propriété intellectuelle. Toute reproduction, distribution, modification ou publication de ces différents éléments est strictement interdite sans l'autorisation écrite préalable de [RAISON_SOCIALE].
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">5. Responsabilité</h2>
        <p>
          [RAISON_SOCIALE] s'efforce de fournir sur le site [URL_SITE] des informations aussi précises que possible. Toutefois, l'éditeur ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
        </p>
        <p className="mt-4">
          Le site peut contenir des liens hypertextes vers d'autres sites. [RAISON_SOCIALE] n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">6. Données personnelles</h2>
        <p>
          Les informations concernant la collecte et le traitement des données personnelles (RGPD) sont détaillées dans notre <a href="/politique-confidentialite" className="text-ts-red hover:text-ts-white underline">Politique de confidentialité</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">7. Cookies</h2>
        <p>
          Les informations concernant l'utilisation des cookies sont détaillées dans notre <a href="/politique-cookies" className="text-ts-red hover:text-ts-white underline">Politique de cookies</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">8. Contact</h2>
        <ul className="space-y-3">
          <li><strong>Téléphone :</strong> 01 86 04 79 46</li>
          <li><strong>Email :</strong> [EMAIL_CONTACT]</li>
          <li><strong>Courrier :</strong> 2e Bd Westinghouse, 93270 Sevran</li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
