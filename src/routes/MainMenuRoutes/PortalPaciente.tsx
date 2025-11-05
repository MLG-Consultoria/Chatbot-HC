import BotaoVoltar from "../components/BotaoVoltar"
import Receita from "../assets/Outros/receitas.jpg"
import Resultados from "../assets/Outros/resultados.jpg"
import Lab from "../assets/Outros/Imagem-lab.jpg"

const PortalPaciente = () => {
  return (
    <main className="flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl border border-blue-300 text-center">
        <h1 className="text-2xl font-semibold mb-3">Portal do Paciente</h1>
        <p>Bem-vindo ao portal do paciente. Aqui você pode gerenciar suas consultas e acessar informações importantes.</p>
      </div>

      <article className="mt-6 bg-white p-6 rounded-lg shadow-md w-max sm:w-fit border border-blue-300 flex justify-center text-center flex-col">
          <h2 className="text-xl font-semibold mb-4">Informações Importantes</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div 
            className="border border-blue-300 rounded-xl w-72 h-72 flex flex-col justify-between items-center p-4 bg-cover bg-center text-white md:h-72 md:w-50 lg:w-72 lg:h-72" 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Resultados})` }}
          >
            <h1 className="text-2xl font-semibold mt-3 mb-3">Meus Resultados</h1>
            <p className="mb-4">Consulte seus resultados de exames aqui.</p>
            <button className="w-full h-12 rounded-lg border border-blue-300 duration-300 cursor-pointer bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 hover:transform ">
              <a href="https://portaldopaciente.hc.fm.usp.br/resultados">
                Ver Resultados
              </a>
            </button>
          </div>

          <div 
            className="border border-blue-300 rounded-xl w-72 h-72 flex flex-col justify-between items-center p-4 bg-cover bg-center text-white md:h-72 md:w-50 lg:w-72 lg:h-72" 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Lab})` }}
          >
            <h1 className="text-2xl font-semibold mt-3 mb-3">Acessar Portal</h1>
            <p className="mb-4">Entre no seu portal do HC no site oficial.</p>
            <button className="w-full h-12 rounded-lg border border-blue-300 duration-300 cursor-pointer bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 hover:transform">
              <a href="https://portaldopaciente.hc.fm.usp.br/agendamentos">
                Acessar Portal
              </a>
            </button>
          </div>

          <div 
            className="border border-blue-300 rounded-xl w-72 h-72 flex flex-col justify-between items-center p-4 bg-cover bg-center text-white md:h-72 md:w-50 lg:w-72 lg:h-72" 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Receita})` }}
          >
            <h1 className="text-2xl font-semibold mt-3 mb-3">Minhas Receitas</h1>
            <p className="mb-4 z">Veja e renove suas receitas médicas.</p>
            <button className="w-full h-12 rounded-lg border border-blue-300 duration-300 cursor-pointer bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 hover:transform">
              <a href="https://portaldopaciente.hc.fm.usp.br/receitas">
                Ver Receitas
              </a>
            </button>
          </div>
        </div>
      </article>

    <div className='flex justify-center mt-8'>
      <BotaoVoltar />
    </div>
    </main>
  );
};

export default PortalPaciente;