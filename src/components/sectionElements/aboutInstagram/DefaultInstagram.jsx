import SectionArea from "../SectionArea";
import SectionWrapper from "../SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

import content from "../../../content/content";
function DefaultInstagram() {
  return (
    <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
      <picture>
        <source
          srcSet={content.texts.about.aboutSocial.img.imgSocialMobile}
          media="(max-width: 424px)"
        />
        <img
          src={content.texts.about.aboutSocial.img.imgSocial}
          alt={content.texts.about.aboutSocial.img.altDefault}
          className="w-full  object-cover rounded-xl"
          loading="lazy"
        />
      </picture>
    </MotionDivDownToUp>
  );
}

export default DefaultInstagram;
