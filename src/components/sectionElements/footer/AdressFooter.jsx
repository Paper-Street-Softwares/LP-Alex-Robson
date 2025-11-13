import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

function AdressFooter({ showSecond = false }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Endereço principal */}
      <MotionDivDownToUp>
        <div className="flex full gap-x-[12px] items-center opacity-90 text-paragraph3 desktop1:text-paragraph2">
          <div>
            <MapPin />
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: t("infos.adress"),
            }}
          />
        </div>
      </MotionDivDownToUp>

      {/* Endereço secundário */}
      {showSecond && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <div>
              <MapPin />
            </div>
            <p>{t("infos.adressSecundario")}</p>
          </div>
        </MotionDivDownToUp>
      )}
    </>
  );
}

export default AdressFooter;
