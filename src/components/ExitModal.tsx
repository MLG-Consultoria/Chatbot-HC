import React from 'react';

interface ExitModalProps {
  isOpen: boolean;
  onClose: () => void;
  externalUrl: string | null; 
}

const ExitModal: React.FC<ExitModalProps> = ({ isOpen, onClose, externalUrl }) => {
  if (!isOpen) return null; 

  const handleRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    if (externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
    }
    onClose(); 
  };

  return (
    <main className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg border-2 border-blue-300 text-center">
        
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
            onClick={onClose} 
            className="w-full h-12 rounded-lg border border-gray-300 duration-300 cursor-pointer bg-white text-gray-700 font-bold text-lg hover:bg-gray-100"
          >
            Voltar
          </button>

          {externalUrl && (
            <a 
              href={externalUrl} 
              onClick={handleRedirect}
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

export default ExitModal;