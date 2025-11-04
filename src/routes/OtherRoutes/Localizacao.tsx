import { useState } from 'react';
import { Link } from 'react-router-dom';
import { unidades } from '../../data/UnidadesData';

const ITENS_POR_PAGINA = 8;
const MIN_SWIPE_DISTANCE = 50; 

const Localizacao = () => {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [direcaoAnimacao, setDirecaoAnimacao] = useState<'left' | 'right'>('right');

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const totalPaginas = Math.ceil(unidades.length / ITENS_POR_PAGINA);

  const irParaProxima = () => {
    setDirecaoAnimacao('right');
    setPaginaAtual((pag) => (pag + 1) % totalPaginas);
  };

  const irParaAnterior = () => {
    setDirecaoAnimacao('left');
    setPaginaAtual((pag) => (pag - 1 + totalPaginas) % totalPaginas);
  };

  const getClientX = (e: React.TouchEvent | React.MouseEvent): number => {
    if ('touches' in e) {
      return e.touches[0].clientX;
    }
    return e.clientX;
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const x = getClientX(e);
    setIsDragging(true);
    setStartX(x);
    setCurrentX(x);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const x = getClientX(e);
    setCurrentX(x);
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;

    const distance = startX - currentX;

    if (distance > MIN_SWIPE_DISTANCE) {
      irParaProxima();
    } 
    else if (distance < -MIN_SWIPE_DISTANCE) {
      irParaAnterior();
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const indiceInicial = paginaAtual * ITENS_POR_PAGINA;
  const unidadesVisiveis = unidades.slice(indiceInicial, indiceInicial + ITENS_POR_PAGINA);

  return (
    <main className="w-full flex justify-center py-8 md:py-12 px-4 bg-gradient-to-b from-blue-50 to-white z-0">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 text-center sm:text-left">Unidades</h1>
        
        <div className="relative">
          <button 
            onClick={irParaAnterior}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all text-cyan-500 hidden md:block"
            aria-label="Página anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            style={{ touchAction: 'pan-y', overflow: 'hidden'}}
          >
            <div 
              key={paginaAtual} 
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-roll-in-${direcaoAnimacao}`}
              style={{ userSelect: 'none' }} 
            >
              {unidadesVisiveis.map((unidades) => (
                <Link 
                  key={unidades.id}
                  to={`/unidades/${unidades.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:-translate-y-2 block relative z-0"
                  onClick={(e) => {
                    const distance = Math.abs(startX - currentX);
                    if (distance > 10) e.preventDefault();
                  }}
                >
                  <div className="w-full h-32 sm:h-40 bg-gray-200">
                    <img src={unidades.img} alt={unidades.nome} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 sm:p-4 bg-blue-500">
                    <h3 className="text-white font-semibold text-center text-sm sm:text-base truncate">{unidades.nome}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button 
            onClick={irParaProxima}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all text-cyan-500 hidden md:block"
            aria-label="Próxima página"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Localizacao;
