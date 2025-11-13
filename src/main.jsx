import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./i18n"; // ← importa a configuração do idioma
import content from "./content/content.jsx";

import Index from "./pages/Index.jsx";
import Lp01 from "./pages/Lp01.jsx";

import WhatsAppLinks from "./components/interactives/WhatsappLinks.jsx";

// Layout fixo para o modo "site"
import SiteLayout from "./pages/SiteLayoult.jsx";
import Features from "./components/sections/Features.jsx";
import About from "./components/sections/About.jsx";
import Faq from "./components/sections/Faq.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import BlogPosts from "./components/sections/BlogPosts.jsx";
import Maps from "./components/sections/Maps.jsx";
import AboutInstagram from "./components/sections/AboutInstagram.jsx";
import CartaoSocio from "./components/sections/CartaoSocio.jsx";
import { ColorModeProvider } from "./assets/context/ColorModeContext.jsx";
import IndexLpi from "./pages/IndexLpi.jsx";

// Altere aqui para "LP" ou "site"
const mode = "LP"; // só muda isso e o resto se adapta

// Função para normalizar o nome (remover acentos e espaços)
function formatarNome(nome) {
  return nome
    ?.normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/\s+/g, "") // remove espaços
    .trim();
}
const socioNome = content?.texts?.socios?.socio1?.nome || "";
const socioRota = socioNome ? formatarNome(socioNome) : "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ColorModeProvider>
    {" "}
    <Router>
      {mode === "LP" ? (
        <Routes>
          <Route path="/" element={<Index mode={mode} />} />
          <Route path="/lpi" element={<IndexLpi />} />

          <Route path="/:nome" element={<CartaoSocio />} />
          {/* <Route path="/" element={<Lp01 />} /> */}
          {/* <Route path="/whatsapp" element={<WhatsAppLinks />} /> */}

          {/* <Route path="/whatsapp" element={<WhatsAppLinks form={true} />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SiteLayout mode={mode} />} />
          <Route path="home" element={<SiteLayout mode={mode} />} />
          <Route
            path="/service"
            element={
              <SiteLayout
                mode={mode}
                section={<Features defaultFeature={true} />}
              />
            }
          />
          <Route
            path="/about"
            element={
              <SiteLayout
                mode={mode}
                section={
                  <>
                    <About />
                    <AboutInstagram instagram={true} />
                  </>
                }
              />
            }
          />

          <Route
            path="/blog"
            element={<SiteLayout mode={mode} section={<BlogPosts />} />}
          />

          <Route
            path="/faq"
            element={<SiteLayout mode={mode} section={<Faq />} />}
          />

          <Route
            path="/maps"
            element={<SiteLayout mode={mode} section={<Maps />} />}
          />
        </Routes>
      )}
    </Router>
  </ColorModeProvider>
);
