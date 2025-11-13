import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import { Carousel } from "primereact/carousel";
import Button from "../../interactives/Button";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

// Importar imagens
import img1 from "../../../assets/imgs/testimonials/imgTestimonial1.webp";
import img2 from "../../../assets/imgs/testimonials/imgTestimonial2.webp";
import img3 from "../../../assets/imgs/testimonials/imgTestimonial3.webp";
import img4 from "../../../assets/imgs/testimonials/imgTestimonial4.webp";
import img5 from "../../../assets/imgs/testimonials/imgTestimonial5.webp";
import img6 from "../../../assets/imgs/testimonials/imgTestimonial6.webp";
import img7 from "../../../assets/imgs/testimonials/imgTestimonial7.webp";
import img8 from "../../../assets/imgs/testimonials/imgTestimonial8.webp";

export default function Testimonial({ colorMode }) {
  const { t } = useTranslation();

  // Array de imagens
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  // Lógica de cores conforme o modo
  const bgColor = colorMode === "light" ? "bg-white" : "bg-secondary";
  const textColor = colorMode === "light" ? "text-black" : "text-white";
  const arrowColor = colorMode === "light" ? "#000000" : "#FFFFFF";

  // Template de item do carousel
  const itemTemplate = (image) => (
    <div className="p-2 w-full flex justify-center">
      <img src={image} alt="Depoimento" className="rounded-2xl w-full h-auto" />
    </div>
  );

  // Configuração responsiva
  const responsiveOptions = [
    { breakpoint: "2500px", numVisible: 3, numScroll: 3 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 3 },
    { breakpoint: "767px", numVisible: 2, numScroll: 2 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  return (
    <SectionArea className={`${bgColor}`} paddingtop={true}>
      <SectionWrapper className="flex flex-col gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="w-full">
          <SectionHeader
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            miniTitle={t("testimonials.miniTag")}
            sectionHeaderTitle={t("testimonials.title")}
            sectionHeaderSubtitle={t("testimonials.subtitle")}
            titleColorSet={textColor}
            subtitleColorSet={textColor}
          />

          <div className="flex flex-col desktop1:flex-row items-center w-full justify-center gap-[32px] desktop1:mt-0">
            <Carousel
              value={images}
              itemTemplate={itemTemplate}
              responsiveOptions={responsiveOptions}
              circular
              autoplayInterval={3000}
              showNavigators
              showIndicators={false}
              className="w-full custom-carousel"
              prevIcon={
                <span style={{ color: arrowColor, fontSize: "200%" }}>❮</span>
              }
              nextIcon={
                <span style={{ color: arrowColor, fontSize: "200%" }}>❯</span>
              }
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
