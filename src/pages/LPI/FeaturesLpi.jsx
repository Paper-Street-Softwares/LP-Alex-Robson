import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeader from "../../components/sectionElements/SectionHeader";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import content from "../../content/content";
import IconButtonFeatureLpi from "../../components/cards/IconButtonFeatureLpi";
import Button from "../../components/interactives/Button";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";

export default function FeaturesLpi({ colorMode }) {
  return (
    <div>
      <SectionArea id="service" className="squares">
        <SectionHeader
          className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          color=""
          titleColorSet="text-black"
          subtitleColorSet="text-black"
        />

        <SectionWrapper>
          <div className="flex flex-col items-center w-full justify-evenly">
            <MotionDivDownToUp>
              <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
                <IconButtonFeatureLpi
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />

                <IconButtonFeatureLpi
                  icon={content.texts.features.card2.icon}
                  title={content.texts.features.card2.title}
                  paragraph={content.texts.features.card2.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />

                <IconButtonFeatureLpi
                  icon={content.texts.features.card3.icon}
                  title={content.texts.features.card3.title}
                  paragraph={content.texts.features.card3.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />

                <IconButtonFeatureLpi
                  icon={content.texts.features.card4.icon}
                  title={content.texts.features.card4.title}
                  paragraph={content.texts.features.card4.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
              </div>
            </MotionDivDownToUp>

            <div className="flex justify-center w-full mt-[32px]">
              <Button
                aria-label={content.texts.hero.ctaButtonText}
                label={content.texts.features.ctaButtonFeatures}
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
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
