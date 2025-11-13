import { useTranslation } from "react-i18next";
import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";
import content from "../../content/content";

export default function FeaturesParagraphs({ modal, colorMode, buttonLink }) {
  const { t, i18n } = useTranslation();

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-bgSectionDark",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        colorMode="dark"
        className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
            {[
              "card1",
              "card2",
              "card3",
              "card4",
              "card5",
              "card6",
              "card7",
              "card8",
            ].map((cardKey) => (
              <MotionDivDownToUp
                key={cardKey}
                className="flex flex-col items-center justify-center border-[2px] border-solid rounded-md bg-bgSectionLight tablet1:w-[46.5%] desktop1:w-[28%] desktop2:w-[20%]"
              >
                <IconButtonFeatureCard
                  icon={content.texts.features[cardKey].icon}
                  title={t(`features.${cardKey}.title`)}
                  paragraph={t(`features.${cardKey}.subtitle`)}
                  className=""
                  colorMode={colorMode}
                />
                {buttonLink && (
                  <Button
                    size="small"
                    className="bg-darker"
                    labelColor="text-white"
                    label={t(`features.${cardKey}.buttonLabel`)}
                    buttonLink={t("links.ctaWhatsapp")}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-corner-down-right"
                      >
                        <polyline points="15 10 20 15 15 20" />
                        <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                      </svg>
                    }
                  />
                )}
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
