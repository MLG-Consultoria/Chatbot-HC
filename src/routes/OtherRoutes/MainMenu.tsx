import MenuCard from "../../components/MenuCard";
import { useState } from "react";
import MConsulta from "../assets/icones-menu/icone-marcar-consulta.jpeg";
import VConsulta from "../assets/icones-menu/icone-consulta.jpeg";
import Localiz from "../assets/icones-menu/Icone-Unidades.png";
import Sobre from "../assets/icones-menu/icone-sobre.jpeg";
import Chatbot from "../assets/icones-menu/icone-chatbot.jpeg";
import Suporte from "../assets/icones-menu/icone-suporte.jpeg";
import Equipe from "../assets/icones-menu/icone-equipe.jpeg";
import Faq from "../assets/icones-menu/icone-faq.png";
import Contato from "../assets/icones-menu/icone-contato.jpeg";

declare global {
  interface Window {
    watsonChatInstance?: any;
  }
}

const MainMenu = () => {
  const [chatAberto, setChatAberto] = useState(false);

  const toggleChat = () => {
    if (!window.watsonChatInstance) {
      const interval = setInterval(() => {
        if (window.watsonChatInstance) {
          if (chatAberto) {
            window.watsonChatInstance.closeWindow();
          } else {
            window.watsonChatInstance.openWindow();
          }
          setChatAberto(!chatAberto);
          clearInterval(interval);
        }
      }, 500);
      return;
    }

    if (chatAberto) {
      window.watsonChatInstance.closeWindow();
    } else {
      window.watsonChatInstance.openWindow();
    }

    setChatAberto(!chatAberto);
  };

  const opcoes = [
    { img: MConsulta, texto: "Marcar Consulta", path: "" },
    { img: VConsulta, texto: "Ver Consultas", path: "/VerConsultas" },
    { img: Localiz, texto: "Unidades", path: "/Localizacao" },
    { img: Sobre, texto: "Sobre", path: "/Sobre" },
    { img: Chatbot, texto: "Assistente Virtual", onClick: toggleChat },
    { img: Suporte, texto: "Suporte ao Site", path: "/SuporteSite" },
    { img: Equipe, texto: "Equipe", path: "/Integrantes" },
    { img: Faq, texto: "Perguntas Frequentes", path: "/Faq" },
    { img: Contato, texto: "Contato com HC", path: "/Contato" },
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4 sm:min-w-fit">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-3 gap-5 2xl:grid-cols-subgrid-[repeat(auto-fit,minmax(500px,1fr))]">
        {opcoes.map((op, idx) => {
          const isLast = idx === opcoes.length - 1;

          return (
            <div
              key={idx}
              className={
                isLast
                  ? 
                    "col-span-1 sm:col-span-2 md:col-span-1"
                  : ""
              }
            >
              
              <MenuCard
                img={op.img} 
                texto={op.texto}
                path={op.path}
                onClick={op.onClick}
                className="h-full w-full"
              />
            </div>
          );
        })}
      </div>
      
    </main>
  );
};

export default MainMenu;
