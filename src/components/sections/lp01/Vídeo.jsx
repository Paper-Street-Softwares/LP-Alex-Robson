import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function Vídeo({}) {
  return (
    <>
      <SectionArea className="bg-bgSectionDark">
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.video.sectionHeader.miniTag}
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            sectionHeaderTitle={contentLp01.video.sectionHeader.title}
            sectionHeaderSubtitle={contentLp01.video.sectionHeader.subtitle}
            color=""
            titleColorSet="text-black"
            subtitleColorSet="text-black"
          />
          <div className="w-full flex flex-col gap-4">
            <div className="w-full overflow-hidden aspect-video rounded-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/J63NXA-iEfU?si=q4dABPjIOys-hqxJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div className="w-full overflow-hidden aspect-video rounded-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8_Q_5TPFFn4?si=zmkoBlohnHFvS-eA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div className="w-full overflow-hidden aspect-video rounded-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/V61vZTYyYYc?si=1hvGqO3fJB2td6bz"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}

{
  /* <div className="pt-12 ">
<iframe
  class="rounded-xl"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/GtR1VlvX6ZI?si=2dongXZ0xwgw5uSb"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
</div> */
}
