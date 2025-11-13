import contentLp01 from "../../content/contentLp01";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import WhatsappForm from "./WhatsappForm";
import Button from "./Button";
import content from "../../content/content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function WhatsAppLinks({ form }) {
  return form ? (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-scroll bg-colorBlack bg-center bg-cover bg-opacity-70 desktop1:bg-fixed"
      style={{
        backgroundImage: `url(${contentLp01.cta.bgImg})`,
        backgroundRepeat: "",
      }}
    >
      <div className="flex items-center justify-center w-full h-screen bg-colorBlack bg-opacity-70">
        <div className="flex flex-col items-center p-4">
          <MotionDivDownToUp className="flex justify-center desktop1:justify-start">
            <img
              src={contentLp01.hero.logo.logoImg}
              alt={contentLp01.hero.logo.alt}
              className="mb-[60px] max-w-[280px] phone2:max-w-[320px] phone3:max-w-[270px]"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <h1 className="mb-6 text-xl font-semibold text-center text-colorWhite">
              Preencha o Formulário:
            </h1>
          </MotionDivDownToUp>
          <MotionDivDownToUp className="w-full">
            <WhatsappForm />
          </MotionDivDownToUp>
          <footer className="">
            <MotionDivDownToUp>
              <button
                className="mt-12 bg-bgSectionLight text-black font-bold px-8 py-2 rounded transition hover:scale-110"
                onClick={() => (window.location.href = "/")}
              >
                Voltar
              </button>
            </MotionDivDownToUp>
          </footer>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="flex flex-col items-center bg-bgSectionDark justify-center min-h-screen bg-scroll bg-colorBlack bg-center bg-cover bg-opacity-70 desktop1:bg-fixed"
      // style={{
      //   backgroundImage: `url(${contentLp01.cta.bgImg})`,
      //   backgroundRepeat: "",
      // }}
    >
      <div className="flex items-center justify-center w-full h-screen bg-colorBlack bg-opacity-70">
        <div className="flex flex-col items-center p-4">
          <MotionDivDownToUp className="flex justify-center desktop1:justify-start">
            <img
              src={contentLp01.hero.logo.logoImg}
              alt={contentLp01.hero.logo.alt}
              className="mb-[60px] max-w-[280px] phone2:max-w-[320px] phone3:max-w-[270px]"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <h1 className="mb-6 text-xl font-semibold text-center text-colorWhite">
              Escolha um contato do WhatsApp:
            </h1>
          </MotionDivDownToUp>
          <div className="flex flex-col w-full max-w-xs items-center gap-3 space-y-4">
            <Button
              aria-label="Botão de contato"
              label="Dra. Sheila"
              buttonLink={content.texts.links.ctaWhatsapp}
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

            <Button
              aria-label="Botão de contato"
              label="Dra. Viviane"
              buttonLink={content.texts.links.phoneSecundario}
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

            <Button
              aria-label="Botão de contato"
              label="Dra. Thirsa"
              buttonLink={content.texts.links.phoneTerciario}
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
          </div>

          <footer className="">
            <MotionDivDownToUp>
              <button
                className="mt-12 bg-bgSectionLight text-black font-bold px-8 py-2 rounded transition hover:scale-110"
                onClick={() => (window.location.href = "/")}
              >
                Voltar
              </button>
            </MotionDivDownToUp>
          </footer>
        </div>
      </div>
    </div>
  );
}
