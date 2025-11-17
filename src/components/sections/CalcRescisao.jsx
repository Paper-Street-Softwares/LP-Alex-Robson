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
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textColor = textClasses[colorMode] || textClasses.default;

  return (
    <div className={`${bgClass}`}>
      <SectionArea paddingtop={false}>
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={t("calc.miniTag")}
            sectionHeaderTitle={t("calc.title")}
            sectionHeaderSubtitle={t("calc.subtitle")}
            type=""
            titleColorSet={textColor}
            subtitleColorSet={textColor}
          />

          <Button
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calculator-icon lucide-calculator"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <line x1="8" x2="16" y1="6" y2="6" />
                <line x1="16" x2="16" y1="14" y2="18" />
                <path d="M16 10h.01" />
                <path d="M12 10h.01" />
                <path d="M8 10h.01" />
                <path d="M12 14h.01" />
                <path d="M8 14h.01" />
                <path d="M12 18h.01" />
                <path d="M8 18h.01" />
              </svg>
            }
            label={t("calc.labelButton")}
            buttonLink={content.texts.calc.linkButton}
            className="mt-6"
          />
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default CalcRescisao;
