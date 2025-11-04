import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Notificacao from "../../components/Notificacao";

const SuporteSite: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, email, mensagem });

    setShowNotification(true);
    setNome("");
    setEmail("");
    setMensagem("");

    setTimeout(() => {
      setShowNotification(false);
      navigate('/main'); 
    }, 3000);
  };

  return (
    <div className="flex-grow flex items-center justify-center max-h-screen h-200 bg-gradient-to-b from-blue-50 to-white">
      {showNotification && (
        <Notificacao onClose={() => setShowNotification(false)} />
      )}

      <div className="w-full md:max-w-8/12 bg-white rounded-2xl shadow-lg p-6 border-3 border-blue-300 sm:max-w-screen">
        <h1 className="text-center text-3xl font-semibold text-gray-800 ">
          Encontrou algum problema em nosso site?
        </h1>
        <p className="text-center text-2xl text-gray-700 mb-6 ">
          Por favor nos conte sobre
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
              Descreva seu problema
            </label>
            <textarea
              id="mensagem"
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite sua mensagem"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuporteSite;
