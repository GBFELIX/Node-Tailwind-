import React, { useState } from 'react';

export function Flexing(){
  const [mostrarBotoes, setMostrarBotoes] = useState(false);

  return (
    <div className="flex items-center justify-center">
    <div className="text-center">
      <button
        onClick={() => setMostrarBotoes(!mostrarBotoes)}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out"
      >
        {mostrarBotoes ? '-' : '+'}
      </button>

      <div
        className={`mt-4 space-x-4 ${
          mostrarBotoes
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4'
        } transition-all duration-500 ease-in-out transform`}
      >
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:text-green-300">
          zap
        </button>
        <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:text-purple-300">
          insta
        </button>
        <button className="bg-black text-white font-bold py-2 px-4 rounded hover:text-gray-300">
          x
        </button>
      </div>
    </div>
  </div>
);
};

export default Flexing;
