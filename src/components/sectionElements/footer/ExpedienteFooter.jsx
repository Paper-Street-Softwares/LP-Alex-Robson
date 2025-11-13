import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { CalendarCheck2 } from "lucide-react";
import { useTranslation } from "react-i18next";

function ExpedienteFooter({ showSecond = false }) {
  const { t } = useTranslation(); // função para buscar do pt.json

  return (
    <>
      {/* Expediente principal */}
      <MotionDivDownToUp>
        <div className="flex full gap-x-[12px] items-center opacity-90">
          <div>
            <CalendarCheck2 />
          </div>

          {/* Interpreta tags HTML do JSON */}
          <p
            dangerouslySetInnerHTML={{
              __html: t("infos.expediente"),
            }}
          />
        </div>
      </MotionDivDownToUp>

      {showSecond && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <div>
              <CalendarCheck2 />
            </div>

            {/* Interpreta tags HTML do JSON */}
            <p
              dangerouslySetInnerHTML={{
                __html: t("infos.expedienteSecundario"),
              }}
            />
          </div>
        </MotionDivDownToUp>
      )}
    </>
  );
}

export default ExpedienteFooter;
