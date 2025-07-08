import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import mudwingData from '../data/mudwingData';

export default function RasaDetalji() {
  const { rasaId } = useParams();

  const rasa = rasaId === 'mudwing' ? mudwingData : null;

  const blatokrilaImena = [
  "Glineni", "Blatneni", "Žabron", "Blatinko", "Tresetko",
  "Trskonos", "Kijapko", "Magleni", "Muljaš", "Brčkavko",
  "Lopočan", "Mahovnik", "Zamutić", "Mokrokljun", "Šljapavi",
  "Lokvanjko", "Glinavko", "Muljenko", "Blatoboj", "Zemko",
  "Krtišan", "Peščavor", "Podzemko", "Glinobran", "Drobiljko",
  "Bakarno", "Mokroljub", "Kapkapa", "Vlažić", "Kaputko",
  "Muljiša", "Škrabčavko", "Klizalko", "Blatoton", "Blopkan",
  "Žapćo", "Trskaš", "Lopočar", "Bršljan", "Grmislav",
  "Paprak", "Šašavko", "Mahovnik II", "Cveblok", "Korenko",
  "Trnović", "Žabran", "Kijavka", "Vretencilo", "Ribljozubić",
  "Kvačimir", "Skakaš", "Lepljaš", "Člapko"
];


  const [imePredlog, setImePredlog] = useState(null);

  function generisiIme() {
    const nasumicno = blatokrilaImena[Math.floor(Math.random() * blatokrilaImena.length)];
    setImePredlog(nasumicno);
  }

  if (!rasa) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-2">⚠️ Greška</h1>
        <p className="text-gray-700">Rasa "<strong>{rasaId}</strong>" nije pronađena u bazi podataka.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <section
  className="relative bg-cover bg-center rounded-xl shadow-md text-white py-10 px-4 mb-8"
  style={{ backgroundImage: "url('/images/bg-swamp.jpg')" }}
>
  <div className="bg-black/50 rounded-xl p-6 max-w-3xl mx-auto text-center">
    <h1 className="text-5xl font-extrabold font-cinzel text-center">
  {rasa.ime}
</h1>



    <p className="text-lg italic text-gray-200">
      Legendarni zmajevi močvara — snaga, blato i bratstvo.
    </p>
  </div>
</section>


      <img
        src="/images/races/Mudwing-Full.png"
        alt="Blatokrili"
        className="mx-auto w-full max-w-md rounded-md shadow-md"
      />

  

      <section>
        <h2 className="text-2xl font-semibold mb-2">🧍 {rasa.opisIzgled.split('\n')[0]}</h2>
        <p className="whitespace-pre-line text-gray-800">
          {rasa.opisIzgled.split('\n').slice(1).join('\n')}
        </p>

        <div className="mt-6 border rounded-lg p-4 bg-stone-50 shadow-sm">
          <h3 className="text-xl font-medium mb-2">🎨 Moguće boje Blatokrilih</h3>
          <img
            src="/images/races/Mudwing-ColorVariants.png"
            alt="Varijacije boja Blatokrilih"
            className="w-full max-w-2xl mx-auto rounded"
          />
          <p className="text-sm text-gray-600 text-center mt-1">
            Tipične nijanse: braon, ćilibarska, lešnikasta i blatna.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">💭 {rasa.opisPonasanje.split('\n')[0]}</h2>
        <p className="whitespace-pre-line text-gray-800">
          {rasa.opisPonasanje.split('\n').slice(1).join('\n')}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🔥 {rasa.sposobnosti.split('\n')[0]}</h2>
        <p className="whitespace-pre-line text-gray-800">
          {rasa.sposobnosti.split('\n').slice(1).join('\n')}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🌍 {rasa.teritorija.split('\n')[0]}</h2>
        <p className="whitespace-pre-line text-gray-800">
          {rasa.teritorija.split('\n').slice(1).join('\n')}
        </p>
      </section>

      <section className="bg-amber-50 p-6 rounded-lg shadow-sm">
  <h2 className="text-2xl font-semibold mb-4">🎯 Zanimljivosti o Blatokrilima</h2>
  <div className="grid sm:grid-cols-2 gap-4">
    {rasa.zanimljivosti.map((fact, index) => (
      <div
        key={index}
        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
      >
        🐾 {fact}
      </div>
    ))}
  </div>
</section>



      <section className="pt-4 border-t border-gray-300">
        <h2 className="text-2xl font-semibold mb-2">🎲 Nasumično Blatokrilovo ime</h2>
        <button
          onClick={generisiIme}
          className="px-5 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
        >
          Generiši ime
        </button>
        {imePredlog && (
          <p className="mt-4 text-lg text-green-700 font-medium">
            Tvoje Blatokrilovo ime je: <span className="underline">{imePredlog}</span>
          </p>
        )}
      </section>
    </div>
  );
}




