import Giovane from "../assets/Foto_Integrantes/GiovaneS_Integrantes.jpeg"
import Lucas from "../assets/Foto_Integrantes/LucasV_Integrantes.jpeg"
import Matheus from "../assets/Foto_Integrantes/MatheusR_Integrantes.jpeg"
import Github from "../assets/Icones/icone_github.jpeg"
import Linkedin from "../assets/Icones/icone-linkedin.jpeg"

const Integrantes = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 mt-10 bg-gradient-to-b from-blue-50 to-white">
      
      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl p-6 mb-8 bg-white rounded-xl shadow-lg border border-blue-600 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
        <img
          src= {Giovane}
          alt="Foto do Integrante Giovane"
          className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 border-2 border-blue-600"
        />
        <div className="flex-grow text-center sm:text-left space-y-1 text-gray-800">
          <p>
            <span className="font-bold">Nome:</span> Giovane Amato dos Santos
          </p>
          <p>
            <span className="font-bold">RM:</span> 561336
          </p>
          <p>
            <span className="font-bold">Turma:</span> 1TDSPK
          </p>
          <p>
            <span className="font-bold">Cursando:</span> ADS - FIAP
          </p>
        </div>


        <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/giovane-amato-276217306/" target="_blank" rel="noopener noreferrer">
            <img src= {Linkedin} alt="Icone do LinkedIn" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/RuralGiovane" target="_blank" rel="noopener noreferrer">
            <img src= {Github} alt="Icone do GitHub" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl p-6 mb-8 bg-white rounded-xl shadow-lg border border-blue-600 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
        <img
          src= {Lucas}
          alt="Foto do Integrante Lucas Vieira"
          className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 border-2 border-blue-600"
        />
        <div className="flex-grow text-center sm:text-left space-y-1 text-gray-800">
          <p>
            <span className="font-bold">Nome:</span> Lucas Figueiredo Vieira
          </p>
          <p>
            <span className="font-bold">RM:</span> 561342
          </p>
          <p>
            <span className="font-bold">Turma:</span> 1TDSPK
          </p>
          <p>
            <span className="font-bold">Cursando:</span> ADS - FIAP
          </p>
        </div>
        <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/devlucasvieira/" target="_blank" rel="noopener noreferrer">
            <img src= {Linkedin} alt="Icone do LinkedIn" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/DevLuqinhas" target="_blank" rel="noopener noreferrer">
            <img src= {Github} alt="Icone do GitHub" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg border border-blue-600 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
        <img
          src= {Matheus}
          alt="Foto do Integrante Matheus"
          className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-6 border-2 border-blue-600"
        />
        <div className="flex-grow text-center sm:text-left space-y-1 text-gray-800">
          <p>
            <span className="font-bold">Nome:</span> Matheus Roque Arantes
          </p>
          <p>
            <span className="font-bold">RM:</span> 561959
          </p>
          <p>
            <span className="font-bold">Turma:</span> 1TDSPK
          </p>
          <p>
            <span className="font-bold">Cursando:</span> ADS - FIAP
          </p>
        </div>
        <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/matheus-roque-arantes-446280328/" target="_blank" rel="noopener noreferrer">
            <img src= {Linkedin} alt="Icone do LinkedIn" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/roque-arantes" target="_blank" rel="noopener noreferrer">
            <img src= {Github} alt="Icone do GitHub" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Integrantes;