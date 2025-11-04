import { Link } from "react-router-dom";
import BotaoVoltar from "../../components/BotaoVoltar";

const Informacoes = () => {
    return (
    <main className="flex flex-col justify-center items-center mt-10 gap-10">
        <div className="flex flex-col justify-center items-center border-1 border-blue-300 bg-white p-5 rounded-2xl shadow-2xl text-2xl sm:w-2/3">
            <h1 className="text-blue-800 text-3xl text-center sm:mb-3">Informações Importantes</h1>
            <p className="text-center mt-2">Aqui você encontrará informações relevantes sobre nossos serviços.</p>
        </div>
        <article className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-3 sm:w-2/3 mt-10">

            <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-blue-800 text-2xl mb-2">Para sua Consulta</h2>
                <p className="text-center">Tenha em mãos seus documentos (RG, CPF, Cartão SUS) e o pedido médico. São essenciais para um atendimento ágil.</p>
                <p className="text-xl mt-5">Para mais informações</p>
                <div className="w-3/3 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Link to="https://www.hc.fm.usp.br/hc/paciente/informacoes-uteis" target="_blank" className="text-white text-center ">Ver Mais Informações</Link>
                </div>
            </div>

            <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-blue-800 text-2xl mb-2">Localização</h2>
                <p className="text-center">O HC é um complexo com diversos institutos. Encontre o endereço, veja como chegar e localize a unidade que você precisa
                </p>
                    <p className="text-xl mt-5">Localização e Unidades</p>
                    <div className="w-3/3 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Link to="/Localizacao" className="text-white text-center ">Ver Mapa e Institutos</Link>
                    </div>

            </div>
            <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-blue-800 text-2xl mb-2">Canais de Atendimento</h2>
                <p className="text-center">Não encontrou o que procura ou precisa de ajuda, confira nossos canais de atendimento.</p>
                <p className="text-xl mt-5">Ver contatos</p>
                <div className="flex flex-row gap-5 w-3/3">
                    <div className="w-50 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Link to="/ContatoComHC" className="text-white text-center ">Contatar HC</Link>
                    </div>
                     <div className="w-50 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <Link to="/SuporteSite" className="text-white text-center">Suporte do Site</Link>
                    </div>
                </div>
            </div>
            <aside className="md:col-span-3 flex justify-center">
                <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-blue-800 text-2xl mb-2">Saber mais</h2>
                    <p className="text-center">Quer saber mais sobre o nosso projeto e como ele pode ajudar você e sua família? Consulte nossas páginas de FAQ e Sobre Nós.
                    </p>
                    <p className="text-xl mt-5">Sobre nós</p>
                    <div className="flex flex-row gap-5 w-3/3 itens-center justify-center">
                        <div className="w-50 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <Link to="/SobreNos" className="text-white text-center ">Sobre Nós</Link>
                        </div>
                        <div className="w-50 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <Link to="/FAQ" className="text-white text-center">FAQ</Link>
                        </div>
                    </div>
                </div>
            </aside>
        </article>
        <div className='flex justify-center'>
            <BotaoVoltar />
        </div>
    </main>
    );
}

export default Informacoes; 