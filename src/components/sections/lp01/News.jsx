import contentLp01 from "../../../content/contentLp01";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();

  return (
    <div
      className="squares"
      //   style={{
      //     backgroundImage: `url(${contentLp01.news.bgImg})`,
      //     backgroundRepeat: "no-repeat",
      //   }}
      id="contact"
    >
      {/* <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none" /> */}

      <div className="relative z-10 flex justify-center w-full text-white">
        <SectionArea>
          <SectionWrapper>
            <SectionHeader
              className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[20px]"
              miniTitle={contentLp01.news.sectionHeader.miniTag}
              sectionHeaderTitle={contentLp01.news.sectionHeader.title}
              sectionHeaderSubtitle={contentLp01.news.sectionHeader.subtitle}
              miniTitleTextColor="text-white"
              color=""
              titleColorSet="text-black"
              subtitleColorSet="text-black"
            />

            <MotionDivDownToUp className="flex flex-col desktop1:flex-row gap-6 items-center desktop1:items-start bg-white max-w-[100%] rounded-md p-6 border-[3px] border-black/40">
              <p className=" m-auto font-mainFont text-center desktop1:text-start desktop1:w-[80%] text-paragraph3 text-black/70">
                {contentLp01.news.text}
              </p>
              <Button
                aria-label={contentLp01.hero.textArea.ctaButtonAriaLabel}
                label={contentLp01.news.buttonLabel}
                buttonLink={contentLp01.news.linkPdf}
                animation
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-file-archive-icon lucide-file-archive"
                  >
                    <path d="M10 12v-1" />
                    <path d="M10 18v-2" />
                    <path d="M10 7V6" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" />
                    <circle cx="10" cy="20" r="2" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </SectionWrapper>
        </SectionArea>
      </div>
    </div>
  );
}
