import { useTranslation, Trans } from "react-i18next";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function Features6cards({ colorMode }) {
  const { t } = useTranslation();

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const cardNumbers = [1, 2, 3, 4, 5, 6];

  // Função para renderizar título, usando Trans para o card6
  const renderTitle = (i) => {
    if (i === 6) {
      return (
        <Trans i18nKey={`features.card${i}.title`} components={{ i: <i /> }} />
      );
    }
    return t(`features.card${i}.title`);
  };

  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="col1 desktop1:w-[28%] flex flex-col items-center">
            {cardNumbers.slice(0, 3).map((i) => (
              <MotionDivDownToUp key={i}>
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  className={
                    i === 1 ? "tablet1:mb-[26px] desktop1:mb-0" : undefined
                  }
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            ))}
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
            <img
              src={content.texts.features.imgFeatures}
              alt={content.texts.features.alt}
              className="hidden desktop1:flex h-[900px] w-full rounded-2xl shadow-custom-opacity shadow-primary/50 object-cover"
            />
          </MotionDivDownToUp>

          <div className="col3 desktop1:w-[28%] flex flex-col items-center">
            {cardNumbers.slice(3, 6).map((i) => (
              <MotionDivDownToUp
                key={i}
                className={
                  i === 4
                    ? "flex items-center w-full tablet1:w-[290px] desktop1:w-[250px]"
                    : undefined
                }
              >
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  className={
                    i === 4 ? "tablet1:mb-[26px] desktop1:mb-0" : undefined
                  }
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
