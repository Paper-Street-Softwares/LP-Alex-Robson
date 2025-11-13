import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeader from "../../components/sectionElements/SectionHeader";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";
import content from "../../content/content";
import Button from "../../components/interactives/Button";

export default function AboutLpi({ colorMode }) {
  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor =
    colorMode === "light" ? "text-secondary/80" : "text-white/80";

  // Puxando apenas textos via i18n

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
          <picture>
            <source
              srcSet={content.texts.about.imagem.imagemMobile}
              media="(max-width: 424px)"
            />
            <img
              src={content.texts.about.imagem.img}
              alt={content.texts.about.imagem.alt}
              className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
            />
          </picture>
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center hidden desktop1:flex"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color={colorMode}
            type="article"
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />
          <SectionHeader
            className="text-center desktop1:hidden"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color={colorMode}
            type=""
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />

          <MotionDivDownToUp>
            <p className="text-white text-opacity-80 font-secondFont">
              {content.texts.about.aboutSocial.paragraph}
            </p>
            <div className="flex justify-center w-full desktop1:justify-start mt-[32px]">
              <Button
                aria-label={content.texts.about.ctaButtonAriaLabel}
                label={content.texts.hero.ctaButtonText}
                animation
                className="w-[100%]"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                  </svg>
                }
              />
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
