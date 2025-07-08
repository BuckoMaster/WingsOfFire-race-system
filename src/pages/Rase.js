import React from 'react';
import { Link } from 'react-router-dom'; // ✅ dodato
import RaceCard from '../components/RaceCard';

export default function Rase() {
  const races = [
    {
      id: 'mudwing',
      name: 'MudWing / Blatokrili',
      image: '/images/races/Mudwing-Blatokrili-menu.png',
    },
    {
      id: 'seawing',
      name: 'SeaWing / Morskokrili',
      image: '/images/races/Seawing-Morskokrili-menu.png',
    },
    {
      id: 'rainwing',
      name: 'RainWing / Kišokrili',
      image: '/images/races/Rainwing-Kisokrili-menu.png',
    },
    {
      id: 'nightwing',
      name: 'NightWing / Noćnokrili',
      image: '/images/races/Nightwing-Nocnokrili-menu.png',
    },
    {
      id: 'sandwing',
      name: 'SandWing / Peskokrili',
      image: '/images/races/Sandwing-Peskokrili-menu.png',
    },
    {
      id: 'skywing',
      name: 'SkyWing / Nebokrili',
      image: '/images/races/Skywing-Nebokrili-menu.png',
    },
    {
      id: 'icewing',
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
          <Link to={`/rase/${race.id}`} key={race.id}>
            <RaceCard name={race.name} image={race.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}


