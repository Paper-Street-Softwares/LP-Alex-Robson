import { useState } from "react";
import { X } from "lucide-react";
import { Dialog } from "primereact/dialog";
import { useTranslation } from "react-i18next";

import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";
import FeatureImgOnBgCard from "../cards/FeaturesOnBgCard";

export default function FeaturesButton({ colorMode }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "bg-white",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-transparent",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const cardNumbers = [1, 2, 3, 4];

  return (
    <>
      <SectionArea
        id="service"
        className={`py-[40px] tablet1:py-[64px] desktop1:py-[96px] desktop1:pb-[0px] ${bgClass}`}
      >
        <SectionHeader
          className={`text-center ${textClass} mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]`}
          miniTitle={t("features.miniTag")}
          sectionHeaderTitle={t("features.title")}
          sectionHeaderSubtitle={t("features.subtitle")}
          titleColorSet={textClass}
          subtitleColorSet={textClass}
        />

        <SectionWrapper>
          <div className="flex flex-wrap justify-center desktop1:justify-evenly w-full gap-[36px] tablet1:gap-[24px]">
            {cardNumbers.map((i) => {
              const card = content.texts.features[`card${i}`];
              return (
                <FeatureImgOnBgCard
                  key={i}
                  bgImg={card.img}
                  title={t(`features.card${i}.title`)}
                  description={t(`features.card${i}.subtitle`)}
                  buttonLabel={t(`features.card${i}.buttonLabel`)}
                  animation
                  // onClick={() =>
                  //   onClick(
                  //     t(`features.card${i}.title`),
                  //     t(`features.card${i}.subtitle`),
                  //     <ServiceDetailCard
                  //       img={card.img}
                  //       description={t(`features.card${i}.description`)}
                  //       buttonIcon={card.icon}
                  //       buttonLabel={t(`features.card${i}.buttonLabelModal`)}
                  //       buttonLink={content.texts.links.ctaWhatsapp}
                  //       bgPosition="bg-top"
                  //     />
                  //   )
                  // }
                  // colorMode={colorMode}
                />
              );
            })}
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        className={`font-secondFont ${bgClass} ${textClass}`}
        closeIcon={<X size={20} />}
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "30vw" }}
        breakpoints={{
          "1440px": "25vw",
          "1024px": "35vw",
          "768px": "50vw",
          "640px": "60vw",
          "639px": "80vw",
          "425px": "90vw",
        }}
      >
        <div className={textClass}>{modalSubtitle}</div>
        <div className={`m-0 ${textClass}`}>{modalContent}</div>
      </Dialog>
    </>
  );
}
