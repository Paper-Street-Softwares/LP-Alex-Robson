import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import content from "../../content/content";
import SectionHeader from "../sectionElements/SectionHeader";

export default function Maps({ colorMode }) {
  const { t } = useTranslation(); // Hook de tradução
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea className={`${bgClass}`} id="maps">
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-start">
        <MotionDivDownToUp className="flex flex-col justify-center w-full">
          <SectionHeader
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            miniTitle={t("maps.minitag")}
            sectionHeaderTitle={t("maps.title")}
            sectionHeaderSubtitle={t("maps.subtitle")}
            color="dark"
            type=""
            titleColorSet={titleColor}
            subtitleColorSet={titleColor}
          />
          <div className="relative w-full h-auto bg-no-repeat bg-cover shadow-custom-opacity shadow-shadowMaps/5 desktop1:bg-center tablet1:w-full rounded-xl">
            <div className="opacity-90">
              <iframe
                src={content.texts.maps.embedsrc}
                width="100%"
                height=""
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa do local da empresa"
                className="rounded-[10px] h-[350px] desktop1:h-[420px]"
              />
            </div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
