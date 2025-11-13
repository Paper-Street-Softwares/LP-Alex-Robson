import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BlogPosts from "../components/sections/BlogPosts";
import CtaSecondary from "../components/sections/CtaSecondary";
import { useTranslation } from "react-i18next";
import "./../i18n";
import UnderConstruction from "../components/interactives/UnderConstruction";
import { useColorMode } from "../assets/context/ColorModeContext";

export default function Index() {
  const showUnderConstruction = false;

  const { colorMode, setColorMode } = useColorMode();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (showUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
    <>
      <Navbar colorMode={colorMode} />
      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        panoramica={false}
      />
      <Features
        colorMode={colorMode}
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
        iconsWithModal={false}
      />
      <About modal={true} showGallery={false} colorMode={colorMode} />
      <AboutInstagram colorMode={colorMode} socialPrint={true} />
      <CtaSecondary colorMode={colorMode} />
      <Steps colorMode={colorMode} />
      <BlogPosts />
      <Faq colorMode={colorMode} />
      <FooterSocial
        colorMode={colorMode}
        addres={false}
        obs={false}
        expediente={true}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
