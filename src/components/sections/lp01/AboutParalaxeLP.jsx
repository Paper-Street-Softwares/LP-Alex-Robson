import content from "../../../content/content";
import contentLp01 from "../../../content/contentLp01";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import LogoHeroLpv from "../../sectionElements/Lp01/hero/about/LogoAboutLpv";
import LogoDefaultAboutLpv from "../../sectionElements/Lp01/hero/about/LogoDefaultAboutLpv";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";

export default function AboutParalaxeLP({ logo }) {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const onClick = () => {
    setModalTitle("Saiba mais");

    setModalContent(
      <div className="text-paragraph3">
        <div className="">
          <p>{contentLp01.about.modalAbout}</p>
          <p className="mt-[15px] mb-[20px]"></p>
          {/* <Button
            aria-label={"A_Definir"}
            label={"A_Definir"}
            animation={false}
            className="hover:scale-105"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="bi bi-whatsapp"
                viewBox="0 0 18 18"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            }
            color="bg-[#001C43]"
            textclassName="text-white"
          /> */}
        </div>
      </div>
    );

    setVisible(true);
  };

  return (
    <div
      className="bg-scroll relative bg-center bg-cover desktop1:bg-fixed"
      style={{
        backgroundImage: `url(${contentLp01.about.bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
    >
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none" />
      <div className="relative z-10 flex justify-center w-full text-colorWhite bg-opacity-10">
        <div className="flex justify-center w-full bg-colorBlack bg-opacity-80">
          <SectionArea>
            <SectionWrapper>
              <div className="gap-y-[60px] flex flex-col items-center desktop1:flex-row desktop1:w-[100%] desktop1:justify-between desktop1:gap-[80px]">
                <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-start">
                  {/* Logo */}
                  {logo ? <LogoHeroLpv /> : <LogoDefaultAboutLpv />}
                </MotionDivDownToUp>

                {/* Texto ao lado da logo */}
                <div className={logo ? "desktop1:w-[60%]" : "desktop1:w-[60%]"}>
                  <SectionHeader
                    className="text-center"
                    miniTitle={contentLp01.about.sectionHeader.miniTag}
                    sectionHeaderTitle={contentLp01.about.sectionHeader.title}
                    color=""
                    type="article"
                    titleColorSet="text-white"
                  />
                  <MotionDivDownToUp>
                    <p className="font-secondFont mb-[36px] text-white">
                      {contentLp01.about.paragraph}
                    </p>
                  </MotionDivDownToUp>
                  <MotionDivDownToUp>
                    {" "}
                    <div>
                      <Button
                        aria-label={
                          contentLp01.hero.textArea.ctaButtonAriaLabel
                        }
                        label={contentLp01.about.buttonLabel}
                        animation
                        className="w-[100%]"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-whatsapp"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                          </svg>
                        }
                      />
                    </div>
                  </MotionDivDownToUp>
                </div>
              </div>
            </SectionWrapper>
          </SectionArea>
        </div>
      </div>
    </div>
  );
}
