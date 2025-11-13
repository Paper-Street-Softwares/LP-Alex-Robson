import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMemberCards from "../cards/TeamMemberCards";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function TeamCards() {
  return (
    <SectionArea className="quinary" paddingbot={false}>
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.team.title}
        titleColorSet="text-secondary"
        subtitleColorSet="text-secondary"
        miniTitleBgColor={false}
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-[20px] tablet1:flex-row tablet1:flex-wrap tablet1:justify-center ">
            <TeamMemberCards
              name={content.texts.team.members.member1.name}
              description={content.texts.team.members.member1.description}
            />
            <TeamMemberCards
              name={content.texts.team.members.member2.name}
              description={content.texts.team.members.member2.description}
            />
            <TeamMemberCards
              name={content.texts.team.members.member3.name}
              description={content.texts.team.members.member3.description}
            />
            <TeamMemberCards
              name={content.texts.team.members.member4.name}
              description={content.texts.team.members.member4.description}
            />
            {/* <TeamMemberCards
              name={content.texts.team.members.member5.name}
              description={content.texts.team.members.member5.description}
            /> */}
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
