import "../../index.css";
import DefaultModals from "./DefaultModals";
import FeaturesButton from "./FeaturesButton";
import Features6cards from "./Features6cards";
import FeaturesWithIcons from "./FeaturesWithIcons";
import FeaturesParagraphs from "./FeaturesParagraphs";
import FeaturesModalWithCards from "./FeaturesModalWithCards";
import FeaturesIconWithModal from "./FeaturesIconWithModal";

export default function Features({
  colorMode,
  modalWithCards,
  sixCards,
  paragraphs,
  button,
  paragraphsModal,
  defaultFeature,
  iconsWithModal,
}) {
  return (
    <>
      {modalWithCards && <FeaturesModalWithCards colorMode={colorMode} />}
      {sixCards && <Features6cards colorMode={colorMode} />}
      {paragraphs && <FeaturesParagraphs colorMode={colorMode} />}
      {button && <FeaturesButton colorMode={colorMode} />}
      {paragraphsModal && <DefaultModals colorMode={colorMode} />}
      {defaultFeature && <FeaturesWithIcons colorMode={colorMode} />}
      {iconsWithModal && <FeaturesIconWithModal colorMode={colorMode} />}
    </>
  );
}
