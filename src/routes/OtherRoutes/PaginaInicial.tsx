import React from 'react';
import { Link } from 'react-router-dom';

const PaginaInicial: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-lg shadow-xl mt-40 ml-auto mr-auto w-2/3 mb-10 sm:mt-50 md:mt-50 lg:mt-50 xl:mt-50">
      <h1 className="text-4xl font-bold text-gray-800">Seja Bem Vindo</h1>
      <h2 className="mt-2 text-xl text-gray-600">Ao projeto Chatbot - HC</h2>

      <Link
        to="/MainMenu"
        className="mt-8 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        Ver Opções
      </Link>
    </div>
  );
};

export default PaginaInicial;