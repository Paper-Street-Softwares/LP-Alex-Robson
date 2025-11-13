import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import FooterSocial from "../components/sections/FooterSocial";
import CtaSecondary from "../components/sections/CtaSecondary";

export default function SiteLayout({ section, mode }) {
  const colorMode = "default";

  return (
    <>
      <Navbar colorMode={colorMode} mode={mode} />
      <Hero defaultHero={true} colorMode={colorMode} />
      {section && <div className="">{section}</div>}
      <CtaSecondary/>
      <FooterSocial colorMode={colorMode} mode={mode} instagram={true} />
    </>
  );
}
