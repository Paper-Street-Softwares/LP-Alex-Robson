import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AccordionExpandDefault() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getPanelStyle = (panel) => ({
    boxShadow:
      expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
    border:
      expanded === panel
        ? "1px solid transparent"
        : "1px solid rgba(0, 0, 0, 0.1)",
    borderTop: expanded === panel ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
  });

  return (
    <div>
      {[1, 2, 3, 4].map((num) => (
        <Accordion
          key={`panel${num}`}
          className="mb-[3%]"
          expanded={expanded === `panel${num}`}
          onChange={handleChange(`panel${num}`)}
          style={getPanelStyle(`panel${num}`)}
        >
          <AccordionSummary
            expandIcon={<ChevronDown size={24} />}
            aria-controls={`panel${num}-content`}
            id={`panel${num}-header`}
          >
            <Typography component="div">
              <h1 className="font-bold font-secondFont text-black">
                {t(`faq.questions.question${num}.question`)}
              </h1>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div
              className="font-secondFont text-paragraph4 text-paragraphLight"
              dangerouslySetInnerHTML={{
                __html: t(`faq.questions.question${num}.answer`),
              }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
