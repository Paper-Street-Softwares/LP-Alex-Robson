import { useTranslation } from "react-i18next";
import contentLp01 from "../../../content/contentLp01";
import Button from "../../interactives/Button";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import React, { useState } from "react";
import IconButtonFeatureCardLP from "../../cards/IconButtonFeatureCardLP";

export default function FeaturesParagraphs({ colorMode }) {
  const { t } = useTranslation();

  const [activeModal, setActiveModal] = useState(null);

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-bgSectionDark",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  // Conteúdos vindos do contentLP (separadinhos)
  const modalContents = {
    1: (
      <div>
        <h3 className="text-lg font-bold mb-2">
          {contentLp01.features.cards.card1.title}
        </h3>
        <p>{contentLp01.features.cards.card1.description}</p>
      </div>
    ),
    2: (
      <div>
        <h3 className="text-lg font-bold mb-2">
          {contentLp01.features.cards.card2.title}
        </h3>
        <p>{contentLp01.features.cards.card2.description}</p>
      </div>
    ),
    3: (
      <div>
        <h3 className="text-lg font-bold mb-2">
          {contentLp01.features.cards.card3.title}
        </h3>
        <p>{contentLp01.features.cards.card3.description}</p>
      </div>
    ),
    4: (
      <div>
        <h3 className="text-lg font-bold mb-2">
          {contentLp01.features.cards.card4.title}
        </h3>
        <p>{contentLp01.features.cards.card4.description}</p>
      </div>
    ),
  };

  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        colorMode="dark"
        className="text-center"
        miniTitle={contentLp01.features.sectionHeader.miniTag}
        sectionHeaderTitle={contentLp01.features.sectionHeader.title}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />
      <SectionWrapper>
        <div className="flex flex-col items-ceter w-full justify-evenly tablet1:flex-row">
          <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
            {[1, 2, 3].map((num) => {
              const card = contentLp01.features.cards[`card${num}`];
              return (
                <MotionDivDownToUp
                  key={num}
                  className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight w-[290px] tablet1:w-[268px] desktop1:w-[288px] desktop2:w-[290px]"
                >
                  <IconButtonFeatureCardLP
                    icon={card.icon}
                    title={card.title}
                    paragraph={card.paragraph}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  <div className="">
                    <p className="text-center text-black/70 text-paragraph3">
                      {card.description}
                    </p>
                  </div>

                  <Button
                    size="small"
                    className="bg-buttonColor mt-8 tablet1:mt-4 "
                    textclassName="text-paragraph2"
                    labelColor="text-black"
                    label={card.buttonLabel}
                    buttonLink={contentLp01.links.ctaWhatsapp}
                    // onClick={() => setActiveModal(num)}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-corner-down-right"
                      >
                        <polyline points="15 10 20 15 15 20" />
                        <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                      </svg>
                    }
                  />

                  {/* Modal do card */}
                  {/* <Dialog
                    className="font-secondFont"
                    closeIcon={<X size={20} />}
                    header={card.title}
                    visible={activeModal === num}
                    onHide={() => setActiveModal(null)}
                    style={{ width: "50vw" }}
                    breakpoints={{
                      "4000px": "60vw",
                      "1024px": "70vw",
                      "641px": "85vw",
                    }}
                  >
                    {modalContents[num]}
                  </Dialog> */}
                </MotionDivDownToUp>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
