import React from "react";
import { useTranslation } from "react-i18next";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import content from "../../content/content";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import Button from "../interactives/Button";

export default function About({ modal = true, showGallery, colorMode }) {
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
  const subtitleColor =
    colorMode === "light" ? "text-secondary/80" : "text-white/80";

  // Puxando apenas textos via i18n
  const aboutText = t("about", { returnObjects: true });

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
          {showGallery ? (
            <GalleryAbout />
          ) : (
            <picture>
              <source
                srcSet={content.texts.about.imagem.imagemMobile}
                media="(max-width: 424px)"
              />
              <img
                src={content.texts.about.imagem.img}
                alt={content.texts.about.imagem.alt}
                className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
              />
            </picture>
          )}
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            miniTitle={aboutText.miniTag}
            sectionHeaderTitle={aboutText.title}
            sectionHeaderSubtitle={aboutText.subtitle}
            color={colorMode}
            type="article"
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />
          <MotionDivDownToUp>
            {modal ? (
              <ParagraphWithFading colorMode={colorMode} />
            ) : (
              <ParagraphSemFading colorMode={colorMode} />
            )}
            {modal && <AboutModal colorMode={colorMode} />}
            {/* <Button
              label="Label"
              className="mt-6"
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
                  class="lucide lucide-book-down-icon lucide-book-down"
                >
                  <path d="M12 13V7" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="m9 10 3 3 3-3" />
                </svg>
              }
            /> */}
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
