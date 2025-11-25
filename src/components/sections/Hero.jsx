import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import Button from "../interactives/Button";
import { useTranslation } from "react-i18next";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ImageGallery from "react-image-gallery";
import heroImg1 from "../../assets/imgs/hero/lawHero.webp";
import heroImg2 from "../../assets/imgs/hero/lawHero1.webp";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Hero({
  colorMode,
  defaultHero,
  influencer,
  panoramica,
}) {
  const images = [
    {
      original: heroImg1,
      thumbnail: heroImg1,
    },
    {
      original: heroImg2,
      thumbnail: heroImg2,
    },
  ];
  const { t } = useTranslation();
  const isMobile = window.innerWidth < 1024;

  // Cores de acordo com o tema
  const backgroundClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default;

  const renderHeroContent = ({
    minititleColor,
    titleTextColor,
    subtitleTextColor,
    obsTextColorOverride,
  }) => {
    return (
      <div className="flex flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
        <MotionDivDownToUp>
          <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-mainFont text-paragraph4">
            <p
              className={`mb-[16px] rounded-md px-[16px] py-[6px] inline-block text-paragraph2 ${minititleColor}`}
            >
              {t("hero.miniTag")}
            </p>
          </div>
        </MotionDivDownToUp>

        <MotionDivDownToUp>
          <div
            className={`flex justify-center desktop1:justify-start font-medium leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 mb-2 ${titleTextColor}`}
          >
            <h1 dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
          </div>
        </MotionDivDownToUp>

        <MotionDivDownToUp>
          <div className="flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5">
            <p className={`mb-[32px] ${subtitleTextColor}`}>
              {t("hero.subtitle")}
            </p>
          </div>
        </MotionDivDownToUp>

        <div className="w-full phone2:w-full tablet2:w-auto">
          <MotionDivDownToUp>
            <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
              <Button
                aria-label={t("hero.ctaButtonAriaLabel")}
                label={t("hero.ctaButtonText")}
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
                className={`flex flex-col items-center desktop1:flex-row ${obsTextColorOverride}`}
              >
                <span>{content.texts.hero.obsHero.icon}</span>
                <p
                  className={`ml-[10px] text-center font-secondFont desktop1:text-start mt-[12px] desktop1:mt-0 ${obsTextColorOverride}`}
                >
                  {t("hero.obsHero.text")}{" "}
                </p>
              </div>
            </div>
          </MotionDivDownToUp>

          {/* <MotionDivDownToUp>
            <div className="flex justify-center desktop1:justify-start">
              <div
                className={`flex flex-col items-center desktop1:flex-row ${obsTextColorOverride}`}
              >
                {content.texts.hero.obsHero.icon}
                <p className={`ml-[10px] text-center mt-[12px] desktop1:mt-0`}>
                  {t("hero.obsHero.text")}
                </p>
              </div>
            </div>
          </MotionDivDownToUp> */}
        </div>
      </div>
    );
  };
  // Seleciona a versão correta
  let HeroContent;
  if (panoramica) {
    HeroContent = renderHeroContent({
      minititleColor: isMobile
        ? "bg-minititle text-black"
        : "bg-primary text-minititleDarkLabel",
      titleTextColor: isMobile ? "text-primary" : "text-primary",
      subtitleTextColor: isMobile ? "text-white" : "text-primary",
      obsTextColorOverride: isMobile ? "text-white" : "text-primary",
    });
  } else if (influencer) {
    HeroContent = renderHeroContent({
      minititleColor: isMobile
        ? "bg-minititle text-white"
        : "bg-primary text-minititleDarkLabel",
      titleTextColor: isMobile ? "text-primary" : "text-primary",
      subtitleTextColor: "text-primary",
      obsTextColorOverride: "text-primary",
    });
  } else {
    HeroContent = renderHeroContent({
      minititleColor: isMobile
        ? "bg-minititle text-minititleLightLabel"
        : "bg-minititle text-minititleDarkLabel",
      titleTextColor: "text-white",
      subtitleTextColor: "text-white",
      obsTextColorOverride: "text-white",
    });
  }

  return (
    <>
      {defaultHero && (
        <div
          className={`w-full bg-center bg-repeat font-mainFont bg-gradient-to-b ${bgGradient}`}
          id="home"
        >
          <div className="relative z-10 flex w-full items-left">
            <div className="w-full text-secondary justify-evenly">
              <div className="h-[130px] phone2:h-[140px] phone3:h-[140px] tablet1:h-[150px] desktop3:h-[120px]" />
              <div className="flex flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px] desktop1:pt-[68px] desktop1:pb-[96px]">
                {HeroContent}
                {/* Imagem principal */}
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
                            ? "desktop1:shadow-custom-opacity desktop1:shadow-shadowHero/20"
                            : "shadow-custom-opacity shadow-shadowHero/20"
                        }`}
                      />
                    </picture>

                    {/* <div className="w-full">
                      <ImageGallery
                        items={images}
                        showNav={false}
                        showFullscreenButton={false}
                        useBrowserFullscreen={false}
                        showBullets={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        autoPlay={true}
                        slideInterval={3000}
                        additionalClass="custom-gallery"
                      />
                      <style>
                        {`
                    .custom-gallery .image-gallery-slide img {
                      height: auto; 
                      width: 100%;
                      border-radius: 5px;
                    }

                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                    }
                  `}
                      </style>
                    </div> */}
                  </MotionDivDownToUp>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {influencer && (
        <>
          {/* Mobile */}
          <div
            className="w-full bg-center bg-repeat bg-cover font-mainFont desktop1:pt-[45px] desktop1:hidden"
            style={{
              backgroundImage: `url(${content.texts.hero.backgroundPerson})`,
            }}
          >
            <div className="relative z-10 flex w-full bg-colorBlack bg-opacity-0 items-left">
              <div className="w-full text-secondary justify-evenly">
                <div className="h-[100px] desktop1:h-[140px]" />
                <div className="flex flex-col-reverse gap-[10px] desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px] pt-[40px] desktop1:pt-[0px] desktop1:pb-[0px]">
                  {HeroContent}
                  <div className="flex justify-center w-full tablet1:w-full desktop1:w-[35%]">
                    <MotionDivDownToUp className="relative flex items-end justify-center w-full desktop2:justify-end">
                      <img
                        src={content.texts.hero.heroImgPhone}
                        className="h-[100%] relative desktop1:hidden"
                        alt={content.texts.hero.alt}
                      />
                    </MotionDivDownToUp>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div
            className="hidden w-full bg-bottom bg-repeat bg-cover desktop1:flex font-mainFont"
            style={{
              backgroundImage: `url(${content.texts.hero.heroDesktop})`,
            }}
          >
            <SectionArea paddingTopAndBottom={false} className="relative">
              <div className="absolute inset-0 w-[65%] h-full bg-gradient-to-r from-darker to-transparent" />
              <SectionWrapper>
                <div className="relative z-10 flex w-full items-left pt-[36px] desktop1:py-[90px] desktop2:pb-[90px]">
                  <div className="w-full text-secondary">
                    <div className="h-[100px] desktop1:h-[140px]" />
                    <div className="flex flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between w-full items-center pb-[64px] pt-[40px] desktop1:pt-[0px] desktop1:pb-[0px]">
                      {HeroContent}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </SectionArea>
          </div>
        </>
      )}

      {panoramica && (
        <div id="home">
          {/* mobile */}
          <div className="w-full bg-top bg-repeat font-mainFont bg-bgSectionDark desktop1:hidden">
            <div className="relative z-10 flex w-full bg-minititleDarkLabel bg-opacity-0 items-left">
              <div className="w-full text-secondary justify-evenly">
                <div className="h-[130px] desktop3:h-[140px]" />
                <div className="flex flex-col-reverse gap-[40px]  desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px] pt-[40px] desktop1:pt-[68px] desktop1:pb-[96px]">
                  <div className="flex  flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
                    <MotionDivDownToUp>
                      <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4">
                        <p className="mb-[16px] bg-minititleDarkLabel text-primary bg-opacity-100 rounded-md px-[16px] py-[6px] inline-block text-paragraph2">
                          {t("hero.miniTag")}
                        </p>
                      </div>
                    </MotionDivDownToUp>
                    <MotionDivDownToUp>
                      <div className="text-white flex justify-center desktop1:justify-start font-semibold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title6">
                        <h1>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: t("hero.title"),
                            }}
                          />
                        </h1>{" "}
                      </div>
                    </MotionDivDownToUp>
                    <MotionDivDownToUp>
                      <div className="flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5">
                        <p className="text-white mb-[32px] ">
                          {t("hero.subtitle")}{" "}
                        </p>
                      </div>
                    </MotionDivDownToUp>
                    <div className="w-full phone2:w-full tablet2:w-auto">
                      <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                        <Button
                          aria-label={t("hero.ctaButtonAriaLabel")}
                          label={t("hero.ctaButtonText")}
                          animation
                          className="w-[100%]"
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              fill="primary"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                            </svg>
                          }
                        />
                      </div>
                      <MotionDivDownToUp>
                        <div className="flex justify-center desktop1:justify-start">
                          <div className="flex flex-col items-center desktop1:flex-row text-white">
                            {content.texts.hero.obsHero.icon}
                            <p className="text-white  ml-[10px] text-center mt-[12px] desktop1:mt-0">
                              {t("hero.obsHero.text")}{" "}
                            </p>
                          </div>
                        </div>
                      </MotionDivDownToUp>
                    </div>
                  </div>
                  <div className="flex justify-center w-full tablet1:w-[450px] desktop1:w-[42%] desktop2:w-[42.8%]">
                    <MotionDivDownToUp className="relative flex justify-end w-full ">
                      <div
                        className=" bg-top rounded-xl w-full h-[350px] tablet1:h-[380px] desktop1:h-[500px] desktop1:w-[500px] bg-cover bg-no-repeat tablet1:shadow-custom-opacity tablet1:shadow-shadowHero/10"
                        style={{
                          backgroundImage: `url(${content.texts.hero.heroDefaultImage})`,
                          backgroundSize: "",
                        }}
                      ></div>
                    </MotionDivDownToUp>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* desktop */}
          <div
            className="hidden w-full bg-top bg-repeat bg-cover font-mainFont desktop1:flex desktop1:justify-center "
            style={{
              backgroundImage: `url(${
                window.innerWidth < 1024
                  ? content.texts.hero.heroImgPhone
                  : content.texts.hero.heroImg
              })`,
            }}
          >
            <SectionArea paddingTopAndBottom={false} className="relative">
              <div className="absolute inset-0 w-[65%] h-full bg-gradient-to-r from-bgSectionDark to-transparent" />

              <SectionWrapper>
                <div className="relative z-10 flex w-full items-left pt-[36px] desktop1:py-[90px] desktop2:pb-[90px] ">
                  <div className="w-full text-secondary ">
                    <div className="desktop1:h-[100px]" />
                    <div className="flex flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between w-full items-center pb-[64px] pt-[40px] desktop1:pt-[0px] desktop1:pb-[0px]">
                      <div className="flex flex-col w-full desktop1:w-[50%] ">
                        <MotionDivDownToUp>
                          <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4">
                            <p className="mb-[16px] bg-primary text-minititleDarkLabel bg-opacity-100 rounded-md px-[16px] py-[6px] inline-block text-paragraph2">
                              {t("hero.miniTag")}
                            </p>
                          </div>
                        </MotionDivDownToUp>
                        <MotionDivDownToUp>
                          <div className="text-primary flex justify-center desktop1:justify-start font-semibold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7">
                            <h1>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: t("hero.title"),
                                }}
                              />
                            </h1>{" "}
                          </div>
                        </MotionDivDownToUp>
                        <MotionDivDownToUp>
                          <div className="flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5">
                            <p className="text-primary mb-[32px] ">
                              {t("hero.subtitle")}{" "}
                            </p>
                          </div>
                        </MotionDivDownToUp>
                        <div className="w-full phone2:w-full tablet2:w-auto">
                          <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                            <Button
                              aria-label={t("hero.ctaButtonAriaLabel")}
                              label={t("hero.ctaButtonText")}
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
                          <MotionDivDownToUp>
                            <div className="flex justify-center desktop1:justify-start">
                              <div className="flex flex-col items-center desktop1:flex-row text-primary">
                                {content.texts.hero.obsHero.icon}
                                <p className="text-primary ml-[10px] text-center mt-[12px] desktop1:mt-0">
                                  {t("hero.obsHero.text")}{" "}
                                </p>
                              </div>
                            </div>
                          </MotionDivDownToUp>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </SectionArea>
          </div>
        </div>
      )}
    </>
  );
}
