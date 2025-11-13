import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import Faq from "../components/sections/Faq";
import AboutParalaxeLP from "../components/sections/lp01/AboutParalaxeLP";
import ContactLP from "../components/sections/lp01/ContactLP";
import CtaLP from "../components/sections/lp01/CtaLP";
import FooterLP from "../components/sections/lp01/FooterLP";
import HeroLP from "../components/sections/lp01/HeroLP";
import WhyUs from "../components/sections/lp01/WhyUs";
import FeaturesLP from "../components/sections/lp01/FeaturesLP";
import FeatureWithModalsLp from "../components/sections/lp01/FeatureWithModalsLp";
import contentLp01 from "../content/contentLp01";

import { useEffect } from "react";
import StepsLpv from "../components/sections/lp01/StepsLpv.jsx";
import Video from "../components/sections/lp01/Vídeo.jsx";
import News from "../components/sections/lp01/News.jsx";

export default function Lp01() {
  useEffect(() => {
    document.title = contentLp01.infos.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", contentLp01.infos.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = contentLp01.infos.description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", contentLp01.infos.keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = contentLp01.infos.keywords;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <HeroLP fullImg={true} />
      {/* <StepsLpv /> */}
      <FeaturesLP />
      {/* <News /> */}
      <AboutParalaxeLP logo={true} />
      <WhyUs />
      <CtaLP />
      {/* <Video /> */}
      {/* <Faq /> */}
      <ContactLP />
      <FooterLP />
      {/* <LPFloatingWhatsappButton /> */}
      <FloatingWhatsappButton />
      {/* <WhatsChat /> */}
      <BackToTopButton />
    </div>
  );
}
