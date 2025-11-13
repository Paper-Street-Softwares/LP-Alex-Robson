import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import AcordionModalServices from "../interactives/AcordionModalServices";
import Button from "../interactives/Button";
import content from "../../content/content";

const ServicesModal = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        size="small"
        removeAnchor={true}
        removeTarget={true}
        tagName="div"
        label={"Saber mais"}
        icon={content.texts.features.card4.servicesIconButton}
        onClick={() => setVisible(true)}
        className="bg-colorBlack text-secondary"
      />

      <Dialog
        header={"Áreas de atuação"}
        headerStyle={{ paddingBottom: "0px" }}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "384px", "426px": "90vw" }}
        contentStyle={{ padding: "1rem" }}
      >
        <div className="flex flex-col w-full gap-[12px] p-2">
          <div>
            <p className="text-paragraph4 font-secondFont w-[90%]">
              {"Selecione a área que deseja saber mais sobre:"}
            </p>
          </div>
          <div className="flex justify-center w-full">
            <AcordionModalServices />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

ServicesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default ServicesModal;
