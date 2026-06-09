export default function OuverturePage() {
  const horaires = [
    { jour: "Lundi - Jeudi", heure: "11h30 - 14h30 | 18h30 - 23h00" },
    { jour: "Vendredi", heure: "18h30 - 00h00" },
    { jour: "Samedi", heure: "11h30 - 15h00 | 18h30 - 00h00" },
    { jour: "Dimanche", heure: "18h30 - 23h00" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-ts-white mb-6 uppercase tracking-tighter">NOS <span className="text-ts-red drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]">HORAIRES</span></h1>
        <p className="text-xl text-ts-gray max-w-2xl mx-auto font-medium">
          Nous sommes ouverts presque tous les jours pour satisfaire vos envies.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-ts-card rounded-2xl border border-ts-red/20 shadow-xl overflow-hidden">
        <div className="divide-y divide-ts-red/10">
          {horaires.map((h, index) => (
            <div key={index} className="flex justify-between items-center p-6 hover:bg-ts-bg transition-colors">
              <span className="text-xl font-black text-ts-white tracking-wide uppercase">{h.jour}</span>
              <span className="text-ts-red font-bold">{h.heure}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto mt-12 text-center bg-ts-bg border-l-4 border-ts-red rounded-r-xl p-8 shadow-lg">
        <h3 className="text-2xl font-black text-ts-white mb-3 uppercase tracking-wide">Informations spéciales</h3>
        <p className="text-ts-gray font-medium">
          Les horaires peuvent varier lors des jours fériés. Suivez-nous sur nos réseaux sociaux pour rester informé !
        </p>
      </div>
    </div>
  );
}
