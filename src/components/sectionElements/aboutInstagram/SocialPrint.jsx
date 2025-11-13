import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

import content from "../../../content/content";
function SocialPrint() {
  return (
    <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center ">
      <picture>
        <source
          srcSet={content.texts.about.aboutSocial.img.imgMobile}
          media="(max-width: 424px)"
        />
        <img
          src={content.texts.about.aboutSocial.img.img}
          alt={content.texts.about.aboutSocial.img.alt}
          className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
          loading="lazy"
        />
      </picture>
    </MotionDivDownToUp>
  );
}

export default SocialPrint;
