import React from "react";
import { useTranslation } from "react-i18next";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function News({ colorMode }) {
  const { t } = useTranslation();

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-white",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea className={`${bgClass}`} paddingbot={true}>
      <SectionWrapper className="flex flex-col-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="flex flex-col desktop1:flex-row justify-evenly w-full gap-6">
          {/* Coluna da imagem */}
          <MotionDivDownToUp className="relative m-auto w-[90%] desktop1:w-[45%] flex justify-center rounded-xl shadow-custom-opacity shadow-shadowHero/5 ">
            <picture>
              <source
                srcSet={content.texts.news.imgNews1Mobile}
                media="(max-width: 424px)"
              />
              <img
                src={content.texts.news.imgNews1}
                alt={content.texts.news.alt}
                className="w-full rounded-xl"
                loading="lazy"
              />
            </picture>
          </MotionDivDownToUp>

          {/* Coluna do texto */}
          <MotionDivDownToUp className="w-full desktop1:w-[45%] flex flex-col justify-evenly items-center desktop1:h-[410px] gap-4 font-secondFont">
            <div className="w-full flex justify-center items-center p-4">
              <h1 className="text-black text-center desktop1:text-start">
                {t("news.description")}
              </h1>
            </div>

            <div className="flex flex-col items-start gap-6 phone3:flex-row w-full p-4">
              <Button
                label="Artigo"
                buttonLink="https://ojs.revistacontribuciones.com/ojs/index.php/clcs/article/view/19185"
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
                    class="lucide lucide-file-text-icon lucide-file-text"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                }
              ></Button>
              <Button
                label="PDF"
                buttonLink="https://ojs.revistacontribuciones.com/ojs/index.php/clcs/article/view/19185/11026"
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
                    class="lucide lucide-file-down-icon lucide-file-down"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M12 18v-6" />
                    <path d="m9 15 3 3 3-3" />
                  </svg>
                }
              ></Button>
            </div>
          </MotionDivDownToUp>
        </div>

        <div className="desktop1:w-full">
          <SectionHeader
            className=" text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            miniTitle={t("news.miniTag")}
            sectionHeaderTitle={t("news.title")}
            sectionHeaderSubtitle={t("news.subtitle")}
            color={colorMode ? "light" : ""}
            type={colorMode ? "" : ""}
            titleColorSet={titleColor}
            subtitleColorSet="text-black"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
