import content from "../../../content/content";
import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import ContactCardLP from "./ContactCardLP";

export default function ContactLP() {
  return (
    <>
      <SectionArea paddingTopAndBottom={false} className="bg-white">
        <SectionWrapper>
          <div className="mt-[60px] text-black  font-mainFont desktop1:flex desktop1:flex-wrap justify-center">
            {/* <h1 className="text-center mb-[16px]">Entre em contato</h1> */}
            {/* <ContactCardLP
              label={contentLp01.contact.card1.title}
              icon={contentLp01.contact.card1.icon}
              description={contentLp01.contact.card1.description}
            /> */}

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap">
                <ContactCardLP
                  label={contentLp01.contact.card3.title}
                  icon={contentLp01.contact.card3.icon}
                  description={contentLp01.contact.card3.description}
                />
                <ContactCardLP
                  label={contentLp01.contact.card2.title}
                  icon={contentLp01.contact.card2.icon}
                  description={contentLp01.contact.card2.description}
                />

                {/* <ContactCardLP
              label={contentLp01.contact.card4.title}
              icon={contentLp01.contact.card4.icon}
              description={contentLp01.contact.card4.description}
            /> */}

                {/* <ContactCardLP
                  label={contentLp01.contact.card1.title}
                  icon={contentLp01.contact.card1.icon}
                  description={contentLp01.contact.card1.description}
                /> */}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
