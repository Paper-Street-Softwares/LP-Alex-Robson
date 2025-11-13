import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import PropTypes from "prop-types";
import content from "../../content/content";
import Button from "../interactives/Button";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconFeatureCard from "../cards/IconFeatureCard";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

const MoreFeaturesModal = () => {
  const [visible, setVisible] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div>
      <Button
        size="small"
        removeAnchor={true}
        removeTarget={true}
        tagName="div"
        label="Saber mais"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="text-secondary bg-colorBlack "
      />

      <Dialog
        header="Demais Áreas de Atuação"
        className="font-mainFont"
        headerStyle={{ paddingBottom: "3px" }}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "880px", "1440px": "60vw", "550px": "90vw" }}
        contentStyle={{ padding: "1rem", paddingLeft: "", paddingRight: "" }}
      >
        <div className="flex flex-col desktop1:flex-wrap desktop1:flex-row desktop1:justify-center items-center gap-[40px]">
          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.moreFeatures.card1.ico}
              title={content.texts.features.moreFeatures.card1.title}
              paragraph={content.texts.features.moreFeatures.card1.subtitle}
              className=" desktop1:h-auto mt-[30px] desktop1:w-[200px] "
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.moreFeatures.card2.ico}
              title={content.texts.features.moreFeatures.card2.title}
              paragraph={content.texts.features.moreFeatures.card2.subtitle}
              className=" desktop1:h-auto desktop1:w-[200px] "
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.moreFeatures.card3.ico}
              title={content.texts.features.moreFeatures.card3.title}
              paragraph={content.texts.features.moreFeatures.card3.subtitle}
              className=" desktop1:h-auto desktop1:w-[200px] "
            />
          </MotionDivDownToUp>
          <div className="w-full h-px bg-neutral-400"></div>
          <div className="flex flex-col mb-[30px] items-center">
            <p className="mb-[20px] text-center font-mainFont">
              Quer saber mais detalhes sobre nossas áreas de atuação? <br />
              <br />
              Clique abaixo 👇
            </p>
            <div>
              <Button
                aria-label={content.texts.about.ctaButtonAriaLabel}
                label={content.texts.about.ctaButtonText}
                buttonLink={whatsappContactLink}
                animation={false}
                className="hover:scale-105"
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
        </div>
      </Dialog>
    </div>
  );
};

MoreFeaturesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default MoreFeaturesModal;
