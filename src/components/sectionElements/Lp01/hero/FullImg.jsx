import SectionArea from "../../SectionArea";
import SectionWrapper from "../../SectionWrapper";
import MotionDivDownToUp from "../../../animation/MotionDivDownToUp";
import Button from "../../../interactives/Button";
import contentLp01 from "../../../../content/contentLp01";
import { useNavigate } from "react-router-dom";

function FullImg({ obs }) {
  const navigate = useNavigate();

  return (
    <div className="gradient-LP-Hero">
      <div className="relative desktop1:hidden font-mainFont h-auto">
        {/* Fundo preto atrás de tudo */}
        <div className="absolute inset-0 bg-gradient-to-b from-lpvHeroGradientTop to-lpvHeroGradientBot z-0"></div>

        {/* Imagem de fundo */}
        <div
          className="relative z-10 bg-[size:100%_auto] phone2:bg-[size:100%_auto] phone3:bg-[size:100%_auto] bg-no-repeat"
          style={{
            backgroundImage: `url(${contentLp01.hero.bgImg})`,
          }}
        >
          {/* Gradiente por cima da imagem */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-lpvHeroGradientBot z-20"></div>

          {/* Conteúdo acima de tudo */}
          <div className="relative z-30">
            <MotionDivDownToUp className="flex justify-start desktop1:justify-start">
              <img
                src={contentLp01.hero.logo.logoImg}
                alt={contentLp01.hero.logo.alt}
                className="ml-[5%] max-w-[50%] mt-[15%] tablet1:py-[7px] bg-white rounded-md p-3"
              />
            </MotionDivDownToUp>

            <SectionArea paddingTopAndBottom={false}>
              <SectionWrapper>
                <div className="flex w-full mt-[-4%]">
                  <div className="flex phone1:flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[46px] pt-[15%] desktop1:pt-[68px] desktop1:pb-[96px]">
                    <div className="flex flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
                      <div className="desktop1:mt-0">
                        <MotionDivDownToUp>
                          <div className="flex text-white justify-center desktop1:justify-start font-medium font-mainFont leading-[30px] phone2:leading-[40px] phone3:leading-[45px] tablet1:leading-[55px] desktop1:leading-[70px] text-center desktop1:text-left text-title3 phone2:text-title4 phone3:text-title5 tablet1:text-title6 mb-[24px] [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                            {contentLp01.hero.textArea.title}
                          </div>
                        </MotionDivDownToUp>

                        <MotionDivDownToUp>
                          <div className="flex justify-center text-center text-white desktop1:text-left desktop1:justify-start phone1:w-full font-secondFont text-paragraph3 phone3:text-paragraph5">
                            <p className="mb-[40px] opacity-100 [text-shadow:_2px_2px_1px_rgb(0_0_0_/_100%)]">
                              {contentLp01.hero.textArea.subtitle}
                            </p>
                          </div>
                        </MotionDivDownToUp>

                        <div className="w-full phone2:w-full tablet2:w-auto">
                          <div className="flex justify-center w-full desktop1:justify-start">
                            <MotionDivDownToUp>
                              <Button
                                aria-label={
                                  contentLp01.hero.textArea.ctaButtonAriaLabel
                                }
                                label={contentLp01.hero.textArea.buttonLabel}
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
                            </MotionDivDownToUp>
                          </div>

                          {obs && (
                            <MotionDivDownToUp>
                              <div className="flex justify-center mt-12 desktop1:justify-start">
                                <div className="flex flex-col items-center desktop1:flex-row text-primary">
                                  {contentLp01.hero.textArea.obsHero.icon}
                                  <p className="text-white ml-[10px] text-center mt-[12px] desktop1:mt-0">
                                    {contentLp01.hero.textArea.obsHero.text}
                                  </p>
                                </div>
                              </div>
                            </MotionDivDownToUp>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </SectionArea>
          </div>
        </div>
      </div>

      {/*-------- Versão para tablet1 pra frente -------- */}
      <div
        className="hidden desktop1:flex bg-top font-mainFont bg-[size:100%_auto] phone2:bg-[size:100%_auto] phone3:bg-[size:100%_auto] tablet1:bg-cover bg-no-repeat h-auto"
        style={{
          backgroundImage: `url(${contentLp01.hero.bgImg})`,
          backgroundPosition: "top",
        }}
      >
        <SectionArea
          paddingTopAndBottom={false}
          className="h-full bg-black bg-opacity-60"
        >
          <SectionWrapper className="">
            <div className="flex w-full">
              <div className="flex phone1:flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between w-full max-w-[1215px] items-center pb-[64px] pt-[46px] desktop1:pt-[68px] desktop1:pb-[96px]">
                <div className="flex flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
                  <MotionDivDownToUp className="flex justify-start tablet1:justify-center desktop1:justify-start">
                    <img
                      src={contentLp01.hero.logo.logoImg}
                      alt={contentLp01.hero.logo.alt}
                      className="tablet1:w-[280px] desktop1:w-[250px] desktop1:mb-[60px] bg-white rounded-md p-3"
                    />
                  </MotionDivDownToUp>
                  <div className="mt-[30%] phone3:mt-[35%] tablet1:mt-[30px] desktop1:mt-0">
                    <MotionDivDownToUp className="">
                      <div className="flex text-white justify-center desktop1:justify-start font-bold leading-[45px] phone3:leading-[50px] tablet1:leading-[65px] desktop1:leading-[45px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 desktop1:text-title5 mb-[24px] [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                        {contentLp01.hero.textArea.title}
                      </div>
                    </MotionDivDownToUp>
                    <MotionDivDownToUp className="">
                      <div className="flex justify-center text-center text-white desktop1:text-left desktop1:justify-start phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5">
                        <p className="mb-[40px] opacity-100 [text-shadow:_2px_2px_1px_rgb(0_0_0_/_100%)]">
                          {contentLp01.hero.textArea.subtitle}
                        </p>
                      </div>
                    </MotionDivDownToUp>
                    <div className="w-full phone2:w-full tablet2:w-auto">
                      <div className="flex justify-center w-full desktop1:justify-start">
                        <MotionDivDownToUp>
                          <Button
                            aria-label={
                              contentLp01.hero.textArea.ctaButtonAriaLabel
                            }
                            label={contentLp01.hero.textArea.buttonLabel}
                            animation
                            className="w-[100%] text-colorBlack"
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
                        </MotionDivDownToUp>
                      </div>
                      {obs && (
                        <MotionDivDownToUp>
                          <div className="flex justify-center mt-12 desktop1:justify-start">
                            <div className="flex flex-col items-center desktop1:flex-row text-primary">
                              {contentLp01.hero.textArea.obsHero.icon}
                              <p className="text-white  ml-[10px] text-center mt-[12px] desktop1:mt-0">
                                {contentLp01.hero.textArea.obsHero.text}{" "}
                              </p>
                            </div>
                          </div>
                        </MotionDivDownToUp>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </SectionArea>
      </div>
    </div>
  );
}

export default FullImg;
