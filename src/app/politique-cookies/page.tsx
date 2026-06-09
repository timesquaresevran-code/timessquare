import LegalPageLayout from "@/components/LegalPageLayout";

export default function PolitiqueCookies() {
  return (
    <LegalPageLayout 
      title="Politique de Cookies" 
      lastUpdated="Juin 2026"
    >
      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mb-4 border-b border-ts-red/20 pb-2">1. Définition des cookies</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site internet. Il permet de conserver des données utilisateur afin de faciliter la navigation et d'activer certaines fonctionnalités.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">2. Cookies nécessaires</h2>
        <p>
          Ces cookies sont indispensables au bon fonctionnement du site. Ils vous permettent d'utiliser les fonctionnalités principales du site (par exemple, la mémorisation de vos préférences en matière de cookies). Ils ne peuvent pas être désactivés.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">3. Cookies de mesure d'audience</h2>
        <p>
          (Si applicables à l'avenir) Ces cookies nous permettent de déterminer le nombre de visites et les sources du trafic, afin de mesurer et d’améliorer les performances de notre site Web. Ils nous aident à savoir quelles pages sont les plus et les moins populaires. <strong>Ils ne sont déposés qu'après avoir obtenu votre consentement préalable.</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">4. Cookies liés aux services tiers</h2>
        <p>
          Notre site peut inclure des fonctionnalités tierces (comme l'intégration de Google Maps ou l'affichage d'avis Google) qui peuvent elles-mêmes déposer des cookies sur votre appareil. <strong>Ces cookies non nécessaires ne seront déposés qu'après votre consentement explicite.</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">5. Gestion du consentement</h2>
        <p>
          Lors de votre première visite sur notre site, un bandeau vous informe de la présence de cookies et vous invite à indiquer votre choix. Les cookies non strictement nécessaires (audience, services tiers) ne sont déposés que si vous les acceptez expressément.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">6. Modifier ou retirer son consentement</h2>
        <p>
          Vous pouvez à tout moment modifier vos préférences en matière de cookies ou retirer votre consentement. Pour cela, cliquez sur le lien "<strong>Gérer mes cookies</strong>" présent dans le pied de page (footer) de toutes les pages de notre site. Ce lien rouvrira le panneau de personnalisation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">7. Durée de conservation</h2>
        <p>
          La durée de conservation des cookies sur votre terminal est de 13 mois maximum après leur premier dépôt. Votre choix concernant le consentement (acceptation ou refus) est conservé pendant 6 mois.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-black text-ts-white uppercase tracking-wide mt-8 mb-4 border-b border-ts-red/20 pb-2">8. Contact</h2>
        <p>
          Pour toute question concernant notre politique de cookies, vous pouvez nous contacter à : [EMAIL_CONTACT].
        </p>
      </section>
    </LegalPageLayout>
  );
}
