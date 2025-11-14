import content, { infos } from "../../content/content";
import SectionArea from "../sectionElements/SectionArea.jsx";
import ObsFooter from "../sectionElements/footer/ObsFooter.jsx";
import LogoFooter from "../sectionElements/footer/LogoFooter.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import MotionDivDownToUp from "../animation/MotionDivDownToUp.jsx";
import PhoneFooter from "../sectionElements/footer/PhoneFooter.jsx";
import EmailFooter from "../sectionElements/footer/EmailFooter.jsx";
import AdressFooter from "../sectionElements/footer/AdressFooter.jsx";
import MidTextFooter from "../sectionElements/footer/MidTextFooter.jsx";
import CopyrightFooter from "../sectionElements/footer/CopyrightFooter.jsx";
import ParagrapfFooter from "../sectionElements/footer/ParagrapfFooter.jsx";
import ExpedienteFooter from "../sectionElements/footer/ExpedienteFooter.jsx";
import NavegationTextFooter from "../sectionElements/footer/NavegationTextFooter.jsx";
import LinksNavegationFooter from "../sectionElements/footer/LinksNavegationFooter.jsx";
import FooterSocialIcons from "../sectionElements/footer/FooterSocialIcons.jsx";

export default function FooterSocial({
  colorMode,
  addres,
  obs,
  mode,
  expediente,
}) {
  // Define estilos com base no colorMode
  let footerBackground = "";
  let textColor = "";

  switch (colorMode) {
    case "dark":
      footerBackground = "bg-bgSectionOpacityDark";
      textColor = "text-white";
      break;
    case "light":
      footerBackground = "bg-bgFixedLight";
      textColor = "text-black";
      break;
    default:
      footerBackground = "bg-bgSectionDark";
      textColor = "text-white";
      break;
  }

  return (
    <footer
      className={`full gap-y-[42px] font-secondFont text-left text-paragraph4 flex flex-col justify-between items-center ${footerBackground} ${textColor}`}
    >
      <SectionArea>
        <SectionWrapper className="gap-[42px]">
          <div className="w-full max-w-[1215px] flex flex-col gap-y-[80px] desktop1:flex-row desktop1:justify-between">
            {/* Coluna 1 */}
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px] text-paragraph3">
              <LogoFooter />
              <PhoneFooter colorMode={colorMode} />
              <EmailFooter />
              {addres && <AdressFooter />}
              {expediente && <ExpedienteFooter />}
              {obs && <ObsFooter />}
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <MidTextFooter />
              <ParagrapfFooter />
              <MotionDivDownToUp>
                {/* Aqui os textos foram atualizados */}
                <p className="opacity-90">
                  {content.texts.footerSocialTextNew}
                </p>
                <div className="mt-2 opacity-90">
                  <div className="flex gap-[10px] items-center">
                    <FooterSocialIcons
                      instagram={true}
                      facebook={true}
                      linkedin={true}
                      tiktok={true}
                      x={true}
                      youtube={true}
                    />
                  </div>
                </div>
              </MotionDivDownToUp>
            </div>

            {/* Coluna 3 */}
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <NavegationTextFooter />
              <LinksNavegationFooter mode={mode} />
            </div>
          </div>
          <CopyrightFooter />
        </SectionWrapper>
      </SectionArea>
    </footer>
  );
}
