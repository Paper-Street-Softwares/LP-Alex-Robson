import Paragraphs from "../Paragraphs";
import React, { useState } from "react";
import content from "../../../content/content";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";

function ParagraphsAboutSocial() {
  const { t } = useTranslation();

  return (
    <MotionDivDownToUp>
      <Paragraphs className="text-white text-opacity-80 mb-[48px]">
        {t("about.aboutSocial.paragraph")}{" "}
      </Paragraphs>
    </MotionDivDownToUp>
  );
}

export default ParagraphsAboutSocial;
