import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";
import Button from "../../interactives/Button";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea paddingtop={true} className="squares">
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.whyUs.sectionHeader.miniTag}
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            sectionHeaderTitle={contentLp01.whyUs.sectionHeader.title}
            sectionHeaderSubtitle={contentLp01.whyUs.sectionHeader.subtitle}
            color=""
            titleColorSet="text-black"
            subtitleColorSet="text-black"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentLp01.whyUs.cards.card1.icon}
              title={contentLp01.whyUs.cards.card1.title}
              description={contentLp01.whyUs.cards.card1.description}
              hasModal={true}
              modalContent={
                <div>
                  <p>Conteúdo do modal aqui.</p>
                  <Button label="Clique aqui" onClick={() => alert("Ação")} />
                </div>
              }
            />
            <FeatureCardLP
              icon={contentLp01.whyUs.cards.card2.icon}
              title={contentLp01.whyUs.cards.card2.title}
              description={contentLp01.whyUs.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentLp01.whyUs.cards.card3.icon}
              title={contentLp01.whyUs.cards.card3.title}
              description={contentLp01.whyUs.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentLp01.whyUs.cards.card4.icon}
              title={contentLp01.whyUs.cards.card4.title}
              description={contentLp01.whyUs.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
