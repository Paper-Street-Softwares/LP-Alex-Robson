import { useTranslation } from "react-i18next";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeaturesWithIcons({ colorMode }) {
  const { t } = useTranslation();

  // Define background and text colors based on colorMode
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    // light: "bg-bgSectionOpacityLight",
    light: "squares",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={true}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode="dark"
      />
      <SectionWrapper>
        <div className="flex flex-col items-center w-full tablet1:flex-row tablet1:justify-between desktop1:gap-x-0 desktop1:px-0">
          <div className="col1 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card1.icon}
                title={t("features.card1.title")}
                paragraph={t("features.card1.subtitle")}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.icon}
                title={t("features.card2.title")}
                paragraph={t("features.card2.subtitle")}
                className={textClass}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[35%] ">
            <img
              src={content.texts.features.imgFeatures}
              alt={content.texts.features.alt}
              className="hidden h-[640px] object-cover w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
              loading="lazy"
            />
          </MotionDivDownToUp>

          <div className="col3 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={t("features.card3.title")}
                paragraph={t("features.card3.subtitle")}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card4.icon}
                title={t("features.card4.title")}
                paragraph={t("features.card4.subtitle")}
                className={textClass}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
