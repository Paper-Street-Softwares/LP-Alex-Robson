import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import { useTranslation } from "react-i18next";
import Button from "../interactives/Button";
import content from "../../content/content";

function CalcRescisao({ colorMode }) {
  const { t } = useTranslation();

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textColor = textClasses[colorMode] || textClasses.default;

  return (
    <div>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            className="hidden text-center desktop1:flex"
            miniTitle={t("calc.miniTag")}
            sectionHeaderTitle={t("calc.title")}
            sectionHeaderSubtitle={t("calc.subtitle")}
            type=""
            titleColorSet={textColor}
            subtitleColorSet={textColor}
          />

          

          <Button label={t("calc.labelButton")} buttonLink={content.texts.calc.linkButton} className="mt-6" />
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default CalcRescisao;
