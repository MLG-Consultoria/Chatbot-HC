import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Notificacao from "../../components/Notificacao";
import BotaoVoltar from "../../components/BotaoVoltar";
import { enviarContatoAPI } from "../../services/contatoService";

const SuporteSite: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [nota, setNota] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await enviarContatoAPI({
        nome,
        email,
        mensagem: feedback,
        formulario_origem: "S",
        nota: nota ?? undefined,
      });

      setShowNotification(true);
      setNome("");
      setEmail("");
      setFeedback("");
      setNota(null);

      setTimeout(() => {
        setShowNotification(false);
        navigate('/MenuPrincipal'); 
      }, 3000);
    } catch (error: any) {
      console.error("Erro ao enviar feedback:", error.message);
      alert("❌ Erro ao enviar o feedback. Tente novamente.");
    }
  };

  return (
    <>
      <div className="flex-grow flex items-center justify-center max-h-screen h-200 mt- sm:mt-0">
        {showNotification && (
          <Notificacao onClose={() => setShowNotification(false)} />
        )}

        <div className="w-full md:max-w-8/12 bg-white rounded-2xl shadow-lg p-6 border-3 border-blue-300 sm:max-w-screen mt-10 mb-10">
          <h1 className="text-center text-3xl font-semibold text-gray-800 ">
            Avalie-nos
          </h1>
          <p className="text-center text-2xl text-gray-700 mb-6 ">
            Quer nos dar um feedback de nosso site, escreva seu comentário e deixe sua nota para sabermos sua opinião e o que podemos melhorar.
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
                E-mail
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
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                Escreva seu feedback
              </label>
              <textarea
                id="feedback"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite seu feedback"
                required
              ></textarea>
            </div>

            <div className="flex justify-center gap-6 mt-6">
              <label className="cursor-pointer">
                <input type="radio" className="peer hidden" name="satisfacao" value="1"
                  checked={nota === 1}
                  onChange={() => setNota(1)} />
                <span className="text-3xl w-14 h-14 flex items-center justify-center peer-checked:scale-125 peer-checked:text-white rounded-full bg-blue-200 peer-checked:bg-blue-400 transition-all duration-300">😞</span>
              </label>

              <label className="cursor-pointer">
                <input type="radio" className="peer hidden" name="satisfacao" value="2"
                  checked={nota === 2}
                  onChange={() => setNota(2)} />
                <span className="text-3xl w-14 h-14 flex items-center justify-center peer-checked:scale-125 peer-checked:text-white rounded-full bg-blue-200 peer-checked:bg-blue-400 transition-all duration-300">😐</span>
              </label>

              <label className="cursor-pointer">
                <input type="radio" className="peer hidden" name="satisfacao" value="3"
                  checked={nota === 3}
                  onChange={() => setNota(3)} />
                <span className="text-3xl w-14 h-14 flex items-center justify-center peer-checked:scale-125 peer-checked:text-white rounded-full bg-blue-200 peer-checked:bg-blue-400 transition-all duration-300">😀</span>
              </label>
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
      <div className='flex justify-center sm:-mt-15'>
        <BotaoVoltar />
      </div>
    </>
  );
};

export default SuporteSite;
