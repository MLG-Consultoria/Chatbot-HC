import { useParams } from 'react-router-dom';
import { IntegrantesDataUnico } from "../../data/IntegrantesData"; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import BotaoVoltar from '../../components/BotaoVoltar';

const IntegrantesDetalhes = () => {
  const { nome } = useParams();

  const integrante = IntegrantesDataUnico.find(
    p => p.nome.split(' ')[0] === nome
  );


  if (!integrante) {
    return (
      <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Ops! Integrante não encontrado.</h1>
        <BotaoVoltar />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-4 border-blue-500 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img 
              src={integrante.imgSrc} 
              alt={`Foto de ${integrante.nome}`} 
              className="w-65 h-60 md:w-72 md:h-66 object-cover" 
            />
          </div>

          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{integrante.nome}</h1>
            
            {integrante.titulo && ( 
              <p className="text-xl text-gray-600 mt-1">
                {integrante.titulo}
                {integrante.id === 0 && "Desenvolvedor Full Stack Junior"}
              </p>
            )}
            
            {integrante.formacao && ( 
              <>
              <p className="text-lg text-gray-800 font-semibold mt-4">
                {integrante.formacao}

                {integrante.id === 0 && "Estudante de Análise e Desenvolvimento de Sistemas - FIAP"}
              </p><p className="text-md text-gray-500 mt-2">{integrante.rm}</p><p className="text-md text-gray-500">{integrante.turma}</p></>
            )}
            </div>
        </div>

        <hr className="border-t-2 border-blue-400 my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl shadow-lg shadow-blue-500/30 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-700">Sobre Mim</h2>
            <p className="text-gray-600 text-sm">
              {integrante.descricao}
            </p>
          </div>

          <div className="bg-white rounded-2xl flex flex-col items-center shadow-lg shadow-blue-500/30 p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Entre em contato</h2>
            <div className="space-y-5 text-center">
              
              <p className="text-gray-700">
                    <strong>Email: </strong> 
                    <span className={integrante.id === 2 ? 'text-sm break-all' : ''}>
                      {integrante.email}
                    </span>
                  </p>

              <div className="flex items-center space-x-20 sm:space-x-25">
                <a 
                  href={integrante.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center text-gray-600 hover:text-black transition duration-300"
                >
                  <FaGithub size={36} />
                  <span className="mt-1 text-lg">Github</span>
                </a>
                
                <a 
                  href={integrante.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  <FaLinkedin size={36} />
                  <span className="mt-1 text-lg">LinkedIn</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <button>
        <BotaoVoltar />
      </button>
    </div>

    
  );
}

export default IntegrantesDetalhes;