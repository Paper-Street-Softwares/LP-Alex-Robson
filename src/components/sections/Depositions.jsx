import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import CarouselDivisV1 from "../../components/interactives/CarouselDivsV1";

export default function Depositions() {
  return (
    <div className="relative bg-bgSectionDark">
      <SectionArea className="" paddingbot={false}>
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.testimonials.miniTag}
          sectionHeaderTitle={content.texts.testimonials.title}
          sectionHeaderSubtitle={content.texts.testimonials.subtitle}
          titleColor="text-colorWhite"
          subtitleColor="text-colorWhite opacity-70"
        />

        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className="desktop1:w-[80%]">
              <CarouselDivisV1>
                <div className="flex items-center justify-center">
                  <div className="flex justify-center">
                    <img
                      src={content.texts.testimonials.images.img1.img}
                      alt={content.texts.testimonials.images.img1.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img2.img}
                      alt={content.texts.testimonials.images.img2.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img3.img}
                      alt={content.texts.testimonials.images.img3.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img4.img}
                      alt={content.texts.testimonials.images.img4.alt}
                    />
                  </div>
                </div>
              </CarouselDivisV1>
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp></MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
