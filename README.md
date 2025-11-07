<h1 align="center">🤖Implementação Chatbot ao Site/Aplicativo Hospital das Clínicas🤖</h1>

###

<h2 align="center">❗Sobre o Projeto❗</h2>

###

<p align="left">Nosso objetivo é reduzir a taxa de absenteísmo para menos de 10%. Para isso, seguimos a estratégia de auxiliar o usuário na utilização do sistema de teleconsulta do HC, garantindo que ele seja direcionado diretamente para a aba de consulta, evitando possíveis dificuldades ou desvios ao longo do processo.<br><br>E para isso, desenvolvemos uma solução utilizando React + TypeScript, o que garantiu uma interface mais robusta, rápida e confiável. Com Tailwind CSS, conseguimos entregar uma experiência fluida e intuitiva, eliminando os pontos de fricção e tornando a jornada do paciente muito mais ágil.</p>

###

<h2 align="center">👥Integrantes👥</h2>

###

<br clear="both">

  <table align="center" >
    <tr>
      <td align="center">
        <a href="https://github.com/DevLuqinhas" title="Link do perfil do integrante Lucas Vieira">
          <img src="https://avatars.githubusercontent.com/u/201008696?v=4" width="100px;" alt="Foto do Integrante Lucas Vieira"/><br>
          <sub>
            <b>Lucas Vieira</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/roque-arantes" title="Link do perfil do integrante Lucas Vieira">
          <img src="https://avatars.githubusercontent.com/u/202198493?v=4" width="100px;" alt="Foto do Integrante Matheus Roque"/><br>
          <sub>
            <b>Matheus Roque</b>
          </sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/RuralGiovane" title="Link do perfil do integrante Lucas Vieira">
          <img src="https://avatars.githubusercontent.com/u/200883157?s=400&u=4c0d649624f6736e702b60244099bdf4b887eda7&v=4" width="100px;" alt="Foto do Integrante Giovane dos Santos"/><br>
          <sub>
            <b>Giovane dos Santos</b>
          </sub>
        </a>
      </td>
    </tr>
  </table>

###

<h2 align="center">🛠️Tecnologias🛠️</h2>

###

<div align="center">
  <img src="https://cdn.simpleicons.org/react/61DAFB" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=tailwind" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=ts" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/figma/F24E1E" height="40" alt="figma logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/git/F05032" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="40" alt="java logo"  />
</div>

###

<h2 align="center">🌐Links🌐</h2>

###

<p align="center">
  Link Youtube: <a href="https://youtu.be/-XhaYasfouw">Video Pitch</a>
  <br>
  Link Github: <a href="https://github.com/MLG-Consultoria/Chatbot-HC">Chatbot-HC</a>
  <br>
  Link do site: <a href="https://front-challenge-2-semestre.vercel.app/">Chatbot-HC.vercel.app</a>
</p>

###

<h2 align="center">📁Estrutura de Pastas e Arquivos📁</h2>

```
Chatbot-HC/
├───.gitignore
├───index.html
├───package.json
├───README.md                 // Este arquivo!
├───vite.config.ts            // Configurações do bundler Vite (Vite + React/TS)
│
├───public
│       Logo-MLG.jpeg         // Logo principal do projeto (servido diretamente)
│
└───src                       // Todo o código-fonte (React, TypeScript, Tailwind)
    │   App.tsx               // Componente principal e/ou orquestrador de rotas (Layout base)
    │   index.css             // Estilos globais (Base do Tailwind CSS)
    │   main.tsx               // Inicializa o React (Ponto de entrada da aplicação)
    │   vite-env.d.ts          // Definições de tipo geradas pelo Vite
    │
    ├───assets                // Mídia e recursos visuais
    │   │
    │   ├───Foto_Integrantes  // Fotos dos membros da equipe
    │   │
    │   ├───Foto_locais       // Imagens dos diversos prédios/locais do HC
    │   │
    │   ├───Icones            // Ícones gerais (redes sociais, tema)
    │   │
    │   ├───icones-menu       // Ícones para as opções do menu principal
    │   │
    │   ├───Logos             // Logos institucionais (HC, USP Medicina)
    │   │
    │   └───Outros            // Imagens diversas que não se encaixam nas categorias acima
    │
    ├───componentes           // Componentes React reutilizáveis da interface
    │   │   Chatbot.tsx        // Lógica e UI do seu chatbot
    │   │   Footer.tsx         // Componente de rodapé (estrutura)
    │   │   header.tsx         // Componente de cabeçalho (estrutura)
    │   │   MenuCard.tsx       // Card usado no menu de navegação
    │   │   Notificacao.tsx    // Componente para exibir mensagens de notificação/alerta
    │   │   ScrollTopPage.tsx  // Componente de botão/lógica para voltar ao topo da página
    │   │   SwitchMode.tsx     // Componente de controle para alternar tema/modo
    │   │   VLibras.tsx        // Componente/integração com a ferramenta de acessibilidade VLibras
    │   │
    │   └───SwitchModes       // Componente de tema (claro/escuro)
    │           ToggleTheme.tsx // Lógica de alternância de tema
    │
    ├───data                  // Arquivos de dados estáticos ou configuração
    │       ConsultasData.tsx // Dados de exemplo ou estruturados sobre consultas
    │       UnidadesData.tsx  // Dados de exemplo ou estruturados sobre unidades
    │
    ├───MainMenuRoutes        // Componentes de "Páginas" do Menu Principal (Rotas de alto nível)
    │       AtivarAcessiblidade.tsx // Lógica de ativação/configuração de acessibilidade (VLibras)
    │       faq.tsx            // Página de Perguntas Frequentes
    │       Informacoes.tsx     // Página de informações gerais
    │       MarcarConsulta.tsx // Página para o processo de agendamento
    │       PortalPaciente.tsx // Página de redirecionamento ou informações do portal
    │       SuporteSite.tsx     // Página de suporte técnico/ajuda do site
    │       VerConsultas.tsx   // Página para visualização de consultas
    │
    └───OtherRoutes           // Outras páginas (Institucional e Secundárias)
            ContatoComHC.tsx  // Página com informações de contato
            Integrantes.tsx   // Página sobre a equipe (Você e seu time)
            Localizacao.tsx   // Página com localização das unidades
            MainHome.tsx      // Página inicial principal (Home)
            MenuPrincipal.tsx // A tela de menu de navegação
            SobreNos.tsx      // Página "Sobre" (missão, valores, etc.)
            unidadeDetalhes.tsx // Exibição detalhada de uma unidade do HC
```
