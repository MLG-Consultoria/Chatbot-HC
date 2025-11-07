import { Link } from 'react-router-dom'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IntegrantesDataGeral } from '../../data/IntegrantesData';
import BotaoVoltar from "../../components/BotaoVoltar";

const Integrantes = () => {
  return (
    <div className="w-full flex flex-col items-center mt-5 justify-center p-3 max-w-xl sm:max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-sans text-gray-700 mb-12 bg-white border border-blue-300 rounded-lg px-6 py-4 shadow-2xl w-full max-w-3xl text-center">
        Nossa Equipe
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-3 sm:mx-8 lg:mx-10 ">
        
        {IntegrantesDataGeral.map((integrante) => (
          
          <div 
            key={integrante.id} 
            className="flex flex-col sm:flex-col md:flex-row lg:flex-col border border-blue-300 bg-white my-3 p-6 rounded-2xl items-center md:items-start text-center md:text-left lg:text-center shadow-[2px_5px_10px_rgba(0,0,0,0.3)] lg:items-center"
            >
            <div className="w-32 h-32 md:h-45 md:w-45 md:mt-4 lg:mt-2 bg-gray-200 rounded-2xl border-2 border-blue-300 overflow-hidden mb-5 md:mb-4 md:mr-6 lg:mr-0 flex-shrink-0">
                <img 
                src={integrante.imgSrc} 
                alt={`Foto de ${integrante.nome}`}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-between w-full lg:items-center md:items-start md:ml-8 lg:ml-0 md:text-center">
                <div>
                    <h2 className="text-lg lg:text-xl font-bold text-gray-800 md:text-xl">{integrante.nome}</h2>
                    <p className="mt-1 text-sm md:text-base text-gray-600">{integrante.rm}</p>
                    <p className="text-sm md:text-base text-gray-600 mb-3">{integrante.turma}</p>
                </div>

                <div className="flex justify-center md:ml-12 lg:ml-0 gap-8 my-4">
                <a 
                    href={integrante.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-black transition hover:scale-110"
                >
                    <FaGithub size={48} />
                </a>
                <a 
                    href={integrante.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 hover:text-blue-900 transition hover:scale-110"
                >
                    <FaLinkedin size={48} />
                </a>
                </div>

                <Link 
                to={integrante.linkMais}
                className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 hover:scale-105 md:ml-10 lg:ml-0 text-center block"
                >
                Conheça mais
                </Link>
            </div>
            </div>
        ))}
      </section>
      <div className='flex justify-center'>
        <BotaoVoltar />
      </div>
    </div>
  );
}

export default Integrantes;