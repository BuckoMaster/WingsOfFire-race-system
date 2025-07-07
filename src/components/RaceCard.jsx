import React from 'react';

const RaceCard = ({ name, image }) => {
  return (
    <div className="group relative w-36 h-36 sm:w-44 sm:h-44 cursor-pointer transition-transform duration-300 hover:scale-110">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain rounded-full shadow-md transition duration-300 group-hover:ring-4 group-hover:ring-white"
      />
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs sm:text-sm px-2 py-0.5 rounded-md pointer-events-none">
        {name}
      </div>
    </div>
  );
};

export default RaceCard;
