import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function FeaturesLP() {
  return (
    <>
      <SectionArea className="squares">
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.features.sectionHeader.miniTag}
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            sectionHeaderTitle={contentLp01.features.sectionHeader.title}
            color=""
            titleColorSet="text-black"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentLp01.features.cards.card1.icon}
              title={contentLp01.features.cards.card1.title}
              description={contentLp01.features.cards.card1.description}
            />
            <FeatureCardLP
              icon={contentLp01.features.cards.card2.icon}
              title={contentLp01.features.cards.card2.title}
              description={contentLp01.features.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentLp01.features.cards.card3.icon}
              title={contentLp01.features.cards.card3.title}
              description={contentLp01.features.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentLp01.features.cards.card4.icon}
              title={contentLp01.features.cards.card4.title}
              description={contentLp01.features.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
