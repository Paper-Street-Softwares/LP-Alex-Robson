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
import Maps from "../components/sections/Maps";
import BlogPosts from "../components/sections/BlogPosts";
import CtaSecondary from "../components/sections/CtaSecondary";
import { useTranslation } from "react-i18next";
import "./../i18n";
import Button from "../components/interactives/Button";
import UnderConstruction from "../components/interactives/UnderConstruction";
import { useColorMode } from "../assets/context/ColorModeContext";
import News from "../components/sections/News";
import Testimonial from "../components/sections/lp01/Testimonials";
import Team from "../components/sections/Team";

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
      {/* <div className="fixed inset-x-0 bottom-5 flex justify-center z-50 pointer-events-none">
        <div className="flex gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg pointer-events-auto">
          <Button
            label="English"
            size="small"
            onClick={() => changeLanguage("en")}
          />
          <Button
            label="Português"
            size="small"
            onClick={() => changeLanguage("pt")}
          />
          <Button
            label="Español"
            size="small"
            onClick={() => changeLanguage("es")}
          />
        </div>
      </div> */}

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
      <AboutInstagram colorMode={colorMode} socialPrint={false} />
      {/* <Team /> */}
      <CtaSecondary colorMode={colorMode} />
      <Steps colorMode={colorMode} />
      <BlogPosts />
      <Faq colorMode={colorMode} />
      {/* <Maps colorMode={colorMode} /> */}
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
