import { useState } from "react";
import Header from "./components/Header";
import Integrantes from "./routes/OtherRoutes/Integrantes";
import ContatoComHC from "./routes/OtherRoutes/ContatoComHC";
import MainMenu from "./routes/OtherRoutes/MainMenu";
import Faq from "./routes/MainMenuRoutes/Faq";
import Footer from "./components/Footer";
import Sobre from "./routes/OtherRoutes/SobreNos";
import PortalPaciente from "./routes/MainMenuRoutes/PortalPaciente";
import MainHome from "./routes/OtherRoutes/PaginaInicial";
import VerConsultas from "./routes/MainMenuRoutes/VerConsultas";
import MarcarConsulta from "./routes/MainMenuRoutes/MarcarConsulta/MarcarConsulta";
import Localizacao from "./routes/OtherRoutes/Localizacao";
import UnidadeDetalhe from "./routes/OtherRoutes/unidadeDetalhes";
import SuporteSite from "./routes/MainMenuRoutes/SuporteSite";
import { Routes, Route } from "react-router-dom";
import ScrollTopPage from "./components/ScrollTopPage"; 
import VLibras from "./components/VLibras";
import Informacoes from "./routes/MainMenuRoutes/Informacoes";
import ExitModal from './components/ExitModal';


function App() {

  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [currentExternalUrl, setCurrentExternalUrl] = useState<string | null>(null);

  const openExitModal = (url: string) => {
    setCurrentExternalUrl(url);
    setIsExitModalOpen(true);
  };

  // FUNÇÃO PARA FECHAR O MODAL
  const closeExitModal = () => {
    setIsExitModalOpen(false);
    setCurrentExternalUrl(null);
  };


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollTopPage />
        <VLibras />
        <main className="flex-grow bg-gradient-to-b from-blue-50 to-white">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/MainMenu" element={<MainMenu />} />
            <Route path="/Integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/ContatoComHC" element={<ContatoComHC />} />
            <Route path="/SobreNos" element={<Sobre />} />
            <Route path="/PortalPaciente" element={<PortalPaciente onOpenExitModal={openExitModal} />} />
            <Route path="/VerConsultas" element={<VerConsultas />} /> 
            <Route path="/MarcarConsulta" element={<MarcarConsulta />} />
            <Route path="/Localizacao" element={<Localizacao />} />
            <Route path="/Unidades/:unidadeId" element={<UnidadeDetalhe />} />
            <Route path="/SuporteSite" element={<SuporteSite />} />
            <Route path="/Informacoes" element={<Informacoes onOpenExitModal={openExitModal} />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ExitModal 
        isOpen={isExitModalOpen} 
        onClose={closeExitModal} 
        externalUrl={currentExternalUrl} 
      />
    </>
  );
}

export default App;