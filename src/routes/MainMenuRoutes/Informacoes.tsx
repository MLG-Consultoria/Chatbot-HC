import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotaoVoltar from "../../components/BotaoVoltar";
import ExternalLink from "../../components/ExternalLink";

const Informacoes = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 640 && window.innerWidth <= 1024);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex flex-col justify-center items-center mt-10 gap-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center border border-blue-300 bg-white p-5 rounded-2xl shadow-2xl text-2xl w-full sm:w-4/5 lg:w-2/3">
        <h1 className="text-blue-800 text-3xl text-center sm:mb-3">
          Informações Importantes
        </h1>
        <p className="text-center mt-2 text-base sm:text-lg">
          Aqui você encontrará informações relevantes sobre nossos serviços.
        </p>
      </div>

      <article
        className={`grid ${
          isTablet
            ? "grid-cols-2 grid-rows-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        } gap-6 w-full sm:w-4/5 lg:w-2/3 mt-10`}
      >
        <div className="m-2 p-5 border border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-between hover:translate-y-[-5px] transition-transform duration-300">
          <h2 className="text-blue-800 text-2xl mb-2 text-center">
            Para sua Consulta
          </h2>
          <p className="text-center text-base sm:text-lg">
            Tenha em mãos seus documentos (RG, CPF, Cartão SUS) e o pedido
            médico. São essenciais para um atendimento ágil.
          </p>
          <p className="text-xl mt-5">Para mais informações</p>
          <ExternalLink
            href="https://www.hc.fm.usp.br/hc/paciente/informacoes-uteis"
            className="text-white text-center w-full sm:w-4/5 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Ver Mais Informações
          </ExternalLink>
        </div>

        <div className="m-2 p-5 border border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-between hover:translate-y-[-5px] transition-transform duration-300">
          <h2 className="text-blue-800 text-2xl mb-2 text-center">
            Localização
          </h2>
          <p className="text-center text-base sm:text-lg">
            O HC é um complexo com diversos institutos. Encontre o endereço, veja como chegar e localize a unidade que você precisa.
          </p>
          <p className="text-xl mt-5">Localização e Unidades</p>
          <div className="w-full sm:w-4/5 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Link to="/Localizacao" className="text-white text-center w-full">
              Ver Mapa e Institutos
            </Link>
          </div>
        </div>

        <div className="m-2 p-5 border border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-between hover:translate-y-[-5px] transition-transform duration-300">
          <h2 className="text-blue-800 text-2xl mb-2 text-center">
            Canais de Atendimento
          </h2>
          <p className="text-center text-base sm:text-lg">
            Não encontrou o que procura ou precisa de ajuda? Confira nossos canais de atendimento.
          </p>
          <p className="text-xl mt-5">Ver contatos</p>
          <div className="flex flex-col gap-4 w-full sm:w-4/5">
            <div className="h-10 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Link to="/ContatoComHC" className="text-white text-center w-full">
                Contatar HC
              </Link>
            </div>
            <div className="h-10 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Link to="/SuporteSite" className="text-white text-center w-full">
                Suporte do Site
              </Link>
            </div>
          </div>
        </div>

        {isTablet && (
          <div className="m-2 p-5 border border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 w-full">
            <h2 className="text-blue-800 text-2xl mb-2 text-center">
              Saber mais
            </h2>
            <p className="text-center text-base sm:text-lg">
              Quer saber mais sobre o nosso projeto e como ele pode ajudar você e sua família? Consulte nossas páginas de FAQ e Sobre Nós.
            </p>
            <p className="text-xl mt-5">Sobre nós</p>
            <div className="flex flex-col sm:flex-col gap-4 w-full sm:w-4/5 items-center justify-center">
              <div className="w-full sm:w-2/2 h-10 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Link to="/SobreNos" className="text-white text-center w-full">
                  Sobre Nós
                </Link>
              </div>
              <div className="w-full sm:w-2/2 h-10 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Link to="/FAQ" className="text-white text-center w-full">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        )}
      </article>

      {!isTablet && (
        <aside className="w-full sm:w-4/5 lg:w-2/3 flex justify-center">
          <div className="m-2 p-5 border border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:translate-y-[-5px] transition-transform duration-300 w-full">
            <h2 className="text-blue-800 text-2xl mb-2 text-center">Saber mais</h2>
            <p className="text-center text-base sm:text-lg">
              Quer saber mais sobre o nosso projeto e como ele pode ajudar você e sua família? Consulte nossas páginas de FAQ e Sobre Nós.
            </p>
            <p className="text-xl mt-5">Sobre nós</p>
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-4/5 items-center justify-center">
              <div className="w-full sm:w-1/2 h-10 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Link to="/SobreNos" className="text-white text-center w-full">
                  Sobre Nós
                </Link>
              </div>
              <div className="w-full sm:w-1/2 h-10 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Link to="/FAQ" className="text-white text-center w-full">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </aside>
      )}

      <div className="flex justify-center mb-10">
        <BotaoVoltar />
      </div>
    </main>
  );
};

export default Informacoes;
