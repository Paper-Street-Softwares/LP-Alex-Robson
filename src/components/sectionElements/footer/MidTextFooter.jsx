import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";

function NavegationTextFooter() {
  const { t } = useTranslation();

  return (
    <MotionDivDownToUp>
      <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
        {t("footer.midSectionName")}
      </h1>
    </MotionDivDownToUp>
  );
}

export default NavegationTextFooter;
