import { useParams, Link } from 'react-router-dom';
import { unidades } from '../../data/UnidadesData'; 

const UnidadeDetalhe = () => {
  const { unidadeId } = useParams<{ unidadeId: string }>();
  const unidade = unidades.find(u => u.id === unidadeId);

  if (!unidade) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full p-8">
        <h1 className="text-3xl font-bold text-red-600">Unidade não encontrada</h1>
        <Link to="/localizacao" className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
          Voltar para a lista de unidades
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center">{unidade.nome}</h1>
      <img src={unidade.img} alt={unidade.nome} className="w-full max-w-lg h-auto rounded-lg shadow-lg mb-6 border-3 border-blue-500" />
      <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
        {unidade.descricao}
      </p>
      <a 
        href={unidade.linkMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-blue-500 text-white font-bold text-lg rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
      >
        {unidade.id === 'laboratorios-investigacao' ? 'Ver Portal' : 'Ver localização'}
      </a>
    </div>
  );
};

export default UnidadeDetalhe;