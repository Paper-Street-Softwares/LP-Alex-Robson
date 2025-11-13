import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown } from "lucide-react";
import content from "../../content/content";
import services from "../../content/services";
import ModalComponent from "./ModalComponent";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import { useTranslation } from "react-i18next";

export default function AcordionModalServices() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getPanelStyle = (panel) => {
    return {
      boxShadow:
        expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
      border:
        expanded === panel
          ? "1px solid rgba(0, 0, 0, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
      borderTop:
        expanded === panel
          ? "1px solid rgba(0, 0, 0, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
    };
  };

  return (
    <div className="w-full">
      {/* Accordion 1 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel1"}
        style={getPanelStyle("panel1")}
      >
        <AccordionSummary
          expandIcon={<ChevronDown className="w-6 h-6" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">Demais áreas</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="flex flex-col gap-[8px] font-secondFont text-paragraph4 text-paragraphLight">
              {/* Link 8 */}
              <ModalComponent
                header={t("features.card8.title")}
                content={
                  <ServiceDetailCard
                    img={content.texts.features.card8.imgModal}
                    // subtitle={content.texts.features.card9.subtitle}
                    description={t("features.card8.subtitle")}
                    buttonLabel={content.texts.features.card8.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {t("features.card8.title")}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 9 */}
              <ModalComponent
                header={t("features.card9.title")}
                content={
                  <ServiceDetailCard
                    img={content.texts.features.card9.imgModal}
                    // subtitle={content.texts.features.card9.subtitle}
                    description={t("features.card9.subtitle")}
                    buttonLabel={content.texts.features.card9.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {t("features.card9.title")}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 10 */}
              <ModalComponent
                header={t("features.card10.title")}
                content={
                  <ServiceDetailCard
                    img={content.texts.features.card10.imgModal}
                    // subtitle={
                    //   services.moreServices.demaisAreas.service2.cardSubtitle
                    // }
                    description={t("features.card10.subtitle")}
                    buttonLabel={content.texts.features.card10.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {t("features.card10.title")}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 11 */}
              <ModalComponent
                header={t("features.card11.title")}
                content={
                  <ServiceDetailCard
                    img={content.texts.features.card11.imgModal}
                    // subtitle={
                    //   services.moreServices.demaisAreas.service3.cardSubtitle
                    // }
                    description={t("features.card11.subtitle")}
                    buttonLabel={content.texts.features.card11.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service3.buttonLink
                    }
                    bgPosition="bg-bottom"
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {t("features.card11.title")}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 12 */}
              <ModalComponent
                header={t("features.card12.title")}
                content={
                  <ServiceDetailCard
                    img={content.texts.features.card12.imgModal}
                    // subtitle={
                    //   services.moreServices.demaisAreas.service4.cardSubtitle
                    // }
                    description={t("features.card12.subtitle")}
                    buttonLabel={content.texts.features.card12.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {t("features.card12.title")}
                  </span>
                </button>
              </ModalComponent>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
