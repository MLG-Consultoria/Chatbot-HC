// NOVO: Importar 'useState'
import { useState } from "react"; 
import Header from "./components/Header";
import Integrantes from "./routes/OtherRoutes/Integrantes";
import ContatoComHC from "./routes/OtherRoutes/ContatoComHC";
import MenuPrincipal from "./routes/OtherRoutes/MainMenu";
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
import AtivarAcessiblidade from "./routes/MainMenuRoutes/AtivarAcessibilidade";
import { Routes, Route } from "react-router-dom";
import ScrollTopPage from "./components/ScrollTopPage"; 
import VLibras from "./components/VLibras";
import Informacoes from "./routes/MainMenuRoutes/Informacoes";
import type { Consulta } from "./routes/MainMenuRoutes/MarcarConsulta/types";

function App() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const handleMarcarConsulta = (novaConsulta: Omit<Consulta, 'id'>) => {
    const consultaComId: Consulta = {
      ...novaConsulta,
      id: Date.now().toString()
    };

    setConsultas(consultasAnteriores => [
      ...consultasAnteriores,
      consultaComId
    ]);
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
            <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
            <Route path="/Integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/ContatoComHC" element={<ContatoComHC />} />
            <Route path="/SobreNos" element={<Sobre />} />
            <Route path="/PortalPaciente" element={<PortalPaciente />} />
            <Route path="/VerConsultas" element={<VerConsultas consultas={consultas} />} /> 
            <Route path="/MarcarConsulta" element={<MarcarConsulta onMarcarConsulta={handleMarcarConsulta} />} />
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