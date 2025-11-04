import Header from "./components/Header";
import Integrantes from "./routes/OtherRoutes/Integrantes";
import ContatoComHC from "./routes/OtherRoutes/ContatoComHC";
import PaginaInicial from "./routes/OtherRoutes/PaginaInicial";
import Faq from "./routes/MainMenuRoutes/Faq";
import Footer from "./components/Footer";
import SobreNos from "./routes/OtherRoutes/SobreNos";
import PortalPaciente from "./routes/MainMenuRoutes/PortalPaciente";
import MainMenu from "./routes/OtherRoutes/MainMenu";
import VerConsultas from "./routes/MainMenuRoutes/VerConsultas";
import MarcarConsulta from "./routes/MainMenuRoutes/MarcarConsulta/MarcarConsulta"
import Localizacao from "./routes/OtherRoutes/Localizacao";
import UnidadeDetalhe from "./routes/OtherRoutes/unidadeDetalhes";
import SuporteSite from "./routes/MainMenuRoutes/SuporteSite";
import AtivarAcessiblidade from "./routes/MainMenuRoutes/AtivarAcessibilidade"
import { Routes, Route } from "react-router-dom";
import ScrollTopPage from "./components/ScrollTopPage"; 
import VLibras from "./components/VLibras";
import Informacoes from "./routes/MainMenuRoutes/Informacoes";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <ScrollTopPage />
        <VLibras />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/MainMenu" element={<MainMenu />} />
            <Route path="/Integrantes" element={<Integrantes />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/ContatoComHC" element={<ContatoComHC />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/PortalPaciente" element={<PortalPaciente />} />
            <Route path="/VerConsultas" element={<VerConsultas />} />
            <Route path="/MarcarConsulta" element={<MarcarConsulta />} />
            <Route path="/Localizacao" element={<Localizacao />} />
            <Route path="/Unidades/:unidadeId" element={<UnidadeDetalhe />} />
            <Route path="/SuporteSite" element={<SuporteSite />} />
            <Route path="/AtivarAcessiblidade" element={<AtivarAcessiblidade />} />
            <Route path="/Informacoes" element={<Informacoes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;