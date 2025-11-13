import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";

function ObsFooter() {
  const { t } = useTranslation(); // função para buscar do pt.json

  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-clock"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>

        {/* Renderizando o texto com HTML interpretado */}
        <p
          dangerouslySetInnerHTML={{
            __html: t("infos.obs"),
          }}
        />
      </div>
    </MotionDivDownToUp>
  );
}

export default ObsFooter;
