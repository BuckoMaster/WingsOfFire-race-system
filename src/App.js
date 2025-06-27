import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [buckoSpeaking, setBuckoSpeaking] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-purple-900 drop-shadow-md">
          Wings of Fire: Izaberi svoju rasu
        </h1>
        <p className="text-gray-700 mt-2 text-lg">
          Dobrodošli u najdetaljniji sistem za upoznavanje sa rasama zmajeva!
        </p>
      </motion.div>

      {buckoSpeaking && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed bottom-4 left-4 bg-white border-4 border-purple-400 rounded-2xl shadow-xl p-4 w-96 flex"
        >
          <img
            src="/bucko.png"
            alt="Bucko helper"
            className="w-24 h-24 mr-4 object-contain"
          />
          <div>
            <p className="text-gray-800 font-medium">
              Ćao ja sam Bucko! 🐾<br />
              U ovom vodiču možeš da istražuješ sve rase zmajeva!
              Klikni na gornji meni da biraš, a uskoro te vodim kroz kviz!
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
    </div>
  );
}