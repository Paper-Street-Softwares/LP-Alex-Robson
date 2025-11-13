import React from "react";
import HeroLpi from "./LPI/HeroLpi";
import FeaturesLpi from "./LPI/FeaturesLpi";
import AboutLpi from "./LPI/AboutLpi";
import CtaLpi from "./LPI/CtaLpi";
import StepsLpi from "./LPI/StepsLpi";
import FooterLpi from "./LPI/FooterLpi";
import TransformationLpi from "./LPI/Transformation";

function IndexLpi({ colorMode }) {
  return (
    <div>
      <HeroLpi colorMode={colorMode} />
      <FeaturesLpi colorMode={colorMode} />
      <TransformationLpi />
      <AboutLpi colorMode={colorMode} />
      <CtaLpi colorMode={colorMode} />
      <StepsLpi colorMode={colorMode} />
      <FooterLpi />
    </div>
  );
}

export default IndexLpi;
