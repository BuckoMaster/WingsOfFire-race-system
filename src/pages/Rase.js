import React from 'react';
import RaceCard from '../components/RaceCard';

export default function Rase() {
  const races = [
  {
    name: 'MudWing / Blatokrili',
    image: '/images/races/Mudwing-Blatokrili-menu.png',
  },
  {
    name: 'SeaWing / Morskokrili',
    image: '/images/races/Seawing-Morskokrili-menu.png',
  },
  {
    name: 'RainWing / Kišokrili',
    image: '/images/races/Rainwing-Kisokrili-menu.png',
  },
  {
    name: 'NightWing / Noćnokrili',
    image: '/images/races/Nightwing-Nocnokrili-menu.png',
  },
  {
    name: 'SandWing / Peskokrili',
    image: '/images/races/Sandwing-Peskokrili-menu.png',
  },
  {
    name: 'SkyWing / Nebokrili',
    image: '/images/races/Skywing-Nebokrili-menu.png',
  },
  {
    name: 'IceWing / Ledenokrili',
    image: '/images/races/Icewing-Ledenokrili-menu.png',
  },
];


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-2">🐲 Dobrodošao u pregled rasa!</h1>
      <p className="mb-6 text-gray-700">
        Klikni na neku rasu da vidiš više o njoj. Svaka glava krije priču.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {races.map((race) => (
          <RaceCard key={race.name} name={race.name} image={race.image} />
        ))}
      </div>
    </div>
  );
}

