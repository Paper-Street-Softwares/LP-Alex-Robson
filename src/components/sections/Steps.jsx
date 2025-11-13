import React from "react";
import { useTranslation } from "react-i18next";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import GalleryAbout from "../sectionElements/about/GalleryAbout";

export default function Steps({ colorMode }) {
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
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea className={`${bgClass}`} paddingbot={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl shadow-custom-opacity shadow-shadowSteps/10">
          {/* <GalleryAbout /> */}
          <picture>
            <source
              srcSet={content.texts.steps.imgMobile}
              media="(max-width: 424px)"
            />
            <img
              src={content.texts.steps.img}
              alt={content.texts.steps.alt}
              className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl"
              loading="lazy"
            />
          </picture>
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="hidden text-center desktop1:flex"
            miniTitle={t("steps.miniTag")}
            sectionHeaderTitle={t("steps.title")}
            sectionHeaderSubtitle={t("steps.subtitle")}
            type="article"
            titleColorSet={titleColor}
          />
          <SectionHeader
            className="text-center desktop1:hidden"
            miniTitle={t("steps.miniTag")}
            sectionHeaderTitle={t("steps.title")}
            sectionHeaderSubtitle={t("steps.subtitle")}
            color={colorMode ? "light" : ""}
            type={colorMode ? "" : "article"}
            titleColorSet={titleColor}
          />

          <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
            <HowItWorksCard
              number={t("steps.cards.card1.stepNumber")}
              title={t("steps.cards.card1.cardTitle")}
              description={t("steps.cards.card1.cardDescription")}
              animation
              colorMode={colorMode}
            />
            <HowItWorksCard
              number={t("steps.cards.card2.stepNumber")}
              title={t("steps.cards.card2.cardTitle")}
              description={t("steps.cards.card2.cardDescription")}
              animation
              colorMode={colorMode}
            />
            <HowItWorksCard
              number={t("steps.cards.card3.stepNumber")}
              title={t("steps.cards.card3.cardTitle")}
              description={t("steps.cards.card3.cardDescription")}
              animation
              colorMode={colorMode}
            />
            <HowItWorksCard
              number={t("steps.cards.card4.stepNumber")}
              title={t("steps.cards.card4.cardTitle")}
              description={t("steps.cards.card4.cardDescription")}
              animation
              colorMode={colorMode}
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
