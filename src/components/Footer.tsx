import { Link } from "react-router-dom";
import SuporteSiteLogo from "../assets/icones-menu/icone-suporte.jpeg"
import Sobre from "../assets/icones-menu/icone-sobre.png"

const Footer = () => {
  return (
    <footer className="bg-[#222] text-white text-center p-5 -mt-1.5">
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 text-sm md:text-base">
          &copy; 2025 Projeto Chatbot HC — Todos os direitos reservados.
        </p>
        <p className="mb-4 text-xs md:text-sm">
          Desenvolvido por Giovane Amato, Lucas Vieira e Matheus Roque.
        </p>

        <div className="flex flex-row items-center justify-center gap-6 bg-blue-400 w-fit h-fit rounded-full mx-auto p-2">
          <Link
            to="/SobreNos"
            title="Sobre Nós"
            className=" flex flex-col text-sm md:text-base transition-transform duration-300 hover:scale-130 w-10 h-10"
          >
            <img src={Sobre} alt="Sobre nós"/>
          </Link>

          <Link
            to="/SuporteSite"
            title="Suporte do Site"
            className="hover:underline text-sm md:text-base transition-transform duration-300 hover:scale-130 inline w-10 h-10"
          >
            <img src={SuporteSiteLogo} alt="SuporteSite"/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;