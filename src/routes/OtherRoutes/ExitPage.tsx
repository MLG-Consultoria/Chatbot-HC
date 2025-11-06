import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ExitPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [externalUrl, setExternalUrl] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const url = params.get('url');
    if (url) {
      setExternalUrl(decodeURIComponent(url));
    }
  }, [location.search]);

  const handleVoltar = () => {
    navigate(-1); 
  };

  return (
    <main className="flex flex-col items-center justify-center mt-5 sm:mt-25 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg border border-blue-300 text-center">
        
        <h1 className="text-3xl font-semibold mb-3 text-gray-800">⚠️Aviso⚠️</h1>
        <p className="text-lg text-gray-600 mb-6">
          Você está saindo do site do HC.
        </p>
        
        <div className="bg-gray-100 p-3 rounded-md mb-4 text-left">
          <p className="text-sm text-gray-700 break-all font-mono">
            {externalUrl || 'URL de destino não encontrada...'}
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          A MLG Consultoria não se responsabiliza pelo conteúdo de sites externos. 
          Nunca informe dados pessoais ou senhas em sites não confiáveis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleVoltar} 
            className="w-full h-12 rounded-lg border border-gray-300 duration-300 cursor-pointer bg-white text-gray-700 font-bold text-lg hover:bg-gray-100"
          >
            Voltar
          </button>

          {externalUrl && (
            <a 
              href={externalUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full h-12 flex items-center justify-center rounded-lg border border-blue-300 duration-300 cursor-pointer bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 transform"
            >
              Continuar
            </a>
          )}
        </div>

      </div>
    </main>
  );
};

export default ExitPage;