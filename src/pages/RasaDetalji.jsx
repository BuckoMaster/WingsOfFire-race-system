import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import mudwingData from '../data/mudwingData';

export default function RasaDetalji() {
  const { rasaId } = useParams();

  const rasa = rasaId === 'mudwing' ? mudwingData : null;

  const blatokrilaImena = [
    "Glineni", "Blatneni", "Žabron", "Blatinko", "Tresetko",
    "Trskonos", "Kijapko", "Magleni", "Muljaš", "Brčkavko",
    "Lopočan", "Mahovnik", "Zamutić", "Mokrokljun", "Šljapavi"
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
      <h1 className="text-4xl font-bold text-purple-700 text-center">{rasa.ime}</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🧍 {rasa.opisIzgled.split('\n')[0]}</h2>
        <p className="whitespace-pre-line text-gray-800">
          {rasa.opisIzgled.split('\n').slice(1).join('\n')}
        </p>
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

      <section>
        <h2 className="text-2xl font-semibold mb-2">🎯 Zanimljivosti o Blatokrilima</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          {rasa.zanimljivosti.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🧩 {rasa.sistemImena.split('\n')[0]}</h2>
        <p className="whitespace-pre-line text-gray-800">
          {rasa.sistemImena.split('\n').slice(1).join('\n')}
        </p>
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


