import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import content from "../../content/content";
import SectionHeader from "../sectionElements/SectionHeader";
import WhatsappForm from "../interactives/WhatsappForm";

export default function Steps() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="bg-bgSectionDark " paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-start">
        <MotionDivDownToUp className="flex-col w-full desktop1:w-[415px] desktop2:w-[485px] flex justify-center items-center ">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            // miniTitle={content.texts.formandlocation.miniTag}
            sectionHeaderTitle={content.texts.contactForm.title}
            sectionHeaderSubtitle={content.texts.contactForm.subtitle}
            color=""
            type=""
            miniTitleBgColor={false}
          />
          <WhatsappForm />
        </MotionDivDownToUp>
        {/* //centralizar textos dos dois sectionheaders */}

        <MotionDivDownToUp className="w-full flex-col desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            // miniTitle={content.texts.formandlocation.miniTag}
            sectionHeaderTitle={content.texts.maps.title}
            sectionHeaderSubtitle={content.texts.maps.subtitle}
            color=""
            type=""
            miniTitleBgColor={false}
          />
          <div className="relative w-full h-auto bg-no-repeat bg-cover shadow-custom-opacity shadow-darker/25 desktop1:bg-center tablet1:w-full rounded-xl">
            {/* <p className="font-bold mt-[32px] mb-[16px]">
              Nos encontre no Google Maps
            </p> */}
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
