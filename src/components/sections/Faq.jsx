import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import Button from "../interactives/Button";
import content from "../../content/content";

export default function Faq({ colorMode }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    // light: "bg-bgSectionOpacityLight",
    light: "squares",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="faq" className={`${bgClass}`}>
      <SectionHeader
        colorMode="dark"
        className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
        miniTitle={t("faq.miniTag")}
        sectionHeaderTitle={t("faq.title")}
        sectionHeaderSubtitle={t("faq.subtitle")}
        titleColorSet={titleColor}
        subtitleColorSet={titleColor}
      />
      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <AccordionExpandDefault />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <Paragraphs className={`text-center transition`}>
            <Button
              className="hoover:scale-0 desktop1:hover:scale-10 transition-all duration-300"
              label={t("faq.paragraph")}
              colorMode={colorMode}
            />
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
