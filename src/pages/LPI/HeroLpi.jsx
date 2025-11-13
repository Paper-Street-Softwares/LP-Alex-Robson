import React from "react";

import Button from "../../components/interactives/Button";
import MotionDivDownToUp from "../../components/animation/MotionDivDownToUp";
import content from "../../content/content";

function HeroLpi({ colorMode }) {
  const backgroundClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default;

  let textColor, textOpacity;

  switch (colorMode) {
    case "light":
      textColor = "text-secondary";
      textOpacity = "opacity-90";
      break;
    case "dark":
      textColor = "text-white";
      textOpacity = "opacity-80";
      break;
    case "default":
    default:
      textColor = "text-white";
      textOpacity = "opacity-80";
      break;
  }

  return (
    <div
      className={`w-full bg-center bg-repeat font-mainFont bg-gradient-to-b ${bgGradient}`}
      id="home"
    >
      <div className="relative z-10 flex w-full items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[50px] " />
          <div className="flex flex-col gap-[40px] desktop1:flex-row-reverse desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px] desktop1:pt-[68px] desktop1:pb-[96px]">
            <MotionDivDownToUp className="flex justify-start desktop1:justify-start desktop1:hidden">
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="max-w-[70%] mb-6 m-auto"
              />
            </MotionDivDownToUp>

            <div className="flex justify-center w-full tablet1:w-[450px] desktop1:w-[42%] desktop2:w-[42.8%]">
              <MotionDivDownToUp className="relative flex justify-center w-full">
                <picture>
                  <source
                    srcSet={content.texts.hero.heroDefaultImageMobile}
                    media="(max-width: 424px)"
                  />
                  <img
                    src={content.texts.hero.heroDefaultImage}
                    alt={content.texts.hero.alt}
                    fetchpriority="high"
                    decoding="sync"
                    width="930"
                    height="1287"
                    className={`mt-[20px] desktop1:mt-0 rounded-xl w-full  object-cover
                        ${
                          colorMode === "light"
                            ? "desktop1:shadow-custom-opacity desktop1:shadow-shadowHero/10"
                            : "shadow-custom-opacity shadow-shadowHero/10"
                        }`}
                  />
                </picture>
              </MotionDivDownToUp>
            </div>

            <div className="flex flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
              <MotionDivDownToUp className="flex justify-start desktop1:justify-start">
                <img
                  src={content.texts.navbar.logo.img}
                  alt={content.texts.navbar.logo.alt}
                  className="max-w-[50%] mb-6 m-auto hidden desktop1:flex desktop1:ml-0"
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4">
                  <p
                    className={`mb-[16px] rounded-md px-[16px] py-[6px] inline-block text-paragraph2 text-minititleLightLabel bg-minititle`}
                  >
                    {content.texts.hero.miniTag}
                  </p>
                </div>
              </MotionDivDownToUp>

              <MotionDivDownToUp>
                <div
                  className={`flex justify-center desktop1:justify-start font-medium leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 mb-2 ${textColor}`}
                >
                  <h1>{content.texts.hero.title}</h1>
                </div>
              </MotionDivDownToUp>

              <MotionDivDownToUp>
                <div className="flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5 ">
                  <p className={`mb-[32px] ${textColor}`}>
                    {content.texts.hero.subtitle}
                  </p>
                </div>
              </MotionDivDownToUp>

              <div className="w-full phone2:w-full tablet2:w-auto">
                <MotionDivDownToUp>
                  <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                    <Button
                      aria-label={content.texts.hero.ctaButtonAriaLabel}
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

                  <div className="flex justify-center desktop1:justify-start">
                    <div
                      className={`flex flex-col items-center desktop1:flex-row ${textColor}`}
                    >
                      <span>{content.texts.hero.obsHero.icon}</span>
                      <p
                        className={`ml-[10px] text-center font-secondFont desktop1:text-start mt-[12px] desktop1:mt-0 `}
                      >
                        {content.texts.hero.obsHero.text}
                      </p>
                    </div>
                  </div>
                </MotionDivDownToUp>
              </div>
            </div>
            {/* Imagem principal */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLpi;
