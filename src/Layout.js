import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Layout() {
  const [buckoSpeaking, setBuckoSpeaking] = useState(true);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 font-sans relative">
      {/* Sidebar navigacija */}
      <nav className="w-56 bg-white p-6 shadow-lg border-r border-purple-300 fixed left-0 top-0 bottom-0 z-40">
        <h2 className="text-xl font-bold text-purple-800 mb-4">📚 Meni</h2>
        <ul className="space-y-3 text-purple-700">
          <li><Link to="/">🏰 Rase</Link></li>
          <li><Link to="/kviz">🧪 Kviz</Link></li>
          <li><Link to="/beleske">📝 Beleske</Link></li>
          <li><Link to="/karakter">🐉 Moj Karakter</Link></li>
        </ul>
      </nav>

      {/* Glavni prikaz */}
      <main className="ml-56 flex-1 p-8">
        <Outlet />
      </main>

      {/* Bucko helper */}
      {buckoSpeaking && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed bottom-4 right-4 bg-white border-4 border-purple-400 rounded-2xl shadow-xl p-4 w-96 flex z-50"
        >
          <img
            src="/Bucko.png"
            alt="Bucko helper"
            className="w-40 h-40 object-contain"
          />
          <div>
            <p className="text-gray-800 font-medium text-sm">
              {location.pathname === '/' && (
                <>Ćao, dobrodošao na glavni meni rasa! 🐾 Ovde možeš da istražiš sve zmajeve.</>
              )}
              {location.pathname === '/kviz' && (
                <>Ovo je kviz! Odgovori iskreno i saznaćeš kojoj rasi zmajeva najviše ličiš!</>
              )}
              {location.pathname === '/beleske' && (
                <>U beleškama možeš zapisivati ideje, zaplete i zmajevske misli 📝</>
              )}
              {location.pathname === '/karakter' && (
                <>Ovde kreiraš svog zmajevskog lika! Imaćeš ime, pozadinu i rasu 🐉</>
              )}
            </p>
            <button
              onClick={() => setBuckoSpeaking(false)}
              className="mt-2 text-sm text-blue-600 underline"
            >
              Zatvori Bucka
            </button>
          </div>
        </motion.div>
      )}

      {!buckoSpeaking && (
        <button
          onClick={() => setBuckoSpeaking(true)}
          className="fixed bottom-4 right-4 bg-yellow-300 hover:bg-yellow-400 transition px-3 py-2 rounded-lg shadow z-40 text-sm font-medium"
        >
          🐝 Otvori Bucka ponovo
        </button>
      )}
    </div>
  );
}

