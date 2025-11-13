import React from "react";
import { useTranslation } from "react-i18next";
import { infos } from "../../../content/content"; // importa direto a const infos

function CopyrightFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center w-full phone2:w-[90%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-[27px]">
      <p className="w-full opacity-75">
        {t("footer.copyrightLine", { year: currentYear, name: infos.name })}
      </p>
      <p>
        <a
          className="transition hover:underline"
          target="_blank"
          href="https://www.paperstreet.com.br"
        >
          {t("footer.footerDivulgacaoText")}
        </a>
      </p>
    </div>
  );
}

export default CopyrightFooter;
