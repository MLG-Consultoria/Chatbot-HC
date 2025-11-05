import Card from "../../components/MenuCard";
import { useState } from "react";
import MConsulta from "../../assets/icones-menu/icone-marcar-consulta.jpeg";
import VConsulta from "../../assets/icones-menu/icone-consulta.jpeg";
import Chatbot from "../../assets/icones-menu/icone-chatbot.jpeg";
import Contato from "../../assets/icones-menu/icone-contato.jpeg"
import Equipe from "../../assets/icones-menu/icone-equipe.jpeg";
import Faq from "../../assets/icones-menu/icone-faq.png";
import Libras from "../../assets/icones-menu/icone-linguagem-de-sinais.png";
import PortalPaciente from "../../assets/icones-menu/portal-paciente-icon.png";
import Info from "../../assets/icones-menu/informacao-icon.png"
import { toggleVLibras } from "../../components/VLibras";

declare global {
  interface Window {
    watsonChatInstance?: any;
  }
}

const Main = () => {
   const [chatAberto, setChatAberto] = useState(false);

  const toggleChat = () => {
    if (!window.watsonChatInstance) {
      // Se ainda não carregou, tenta novamente
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
    { img: MConsulta, texto: "Marcar Consulta", path: "/MarcarConsulta" },
    { img: VConsulta, texto: "Ver Consultas", path: "/VerConsultas" },
    { img: PortalPaciente, texto: "Portal do Paciente", path: "/PortalPaciente" },
    { img: Libras, texto: "Modo Libras", onClick: toggleVLibras },
    { img: Chatbot, texto: "Assistente Virtual", onClick: toggleChat },
    { img: Contato, texto: "Contato com HC", path: "/ContatoComHC" },
    { img: Info, texto: "Informações Importantes", path: "/Informacoes" },
    { img: Equipe, texto: "Equipe", path: "/integrantes" },
    { img: Faq, texto: "Perguntas Frequentes", path: "/faq" },
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
              
              <Card
                img={op.img}
                texto={op.texto}
                path={op.path}
                onClick={op.onClick}
                className="h-full w-full"
                ariaLabel={""}              />
            </div>
          );
        })}
      </div>
      
    </main>
  );
};

export default Main;
