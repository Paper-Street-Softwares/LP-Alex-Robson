import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMember from "../cards/TeamMember";
import { useTranslation } from "react-i18next";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Team() {
  const { t } = useTranslation();
  return (
    <SectionArea className="bg-bgSectionDark" paddingtop={false} id="team">
      <SectionHeader
        className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
        miniTitle={t("team.miniTag")}
        sectionHeaderTitle={t("team.title")}
        sectionHeaderSubtitle={t("team.subtitle")}
        titleColorSet="text-white"
        subtitleColorSet="text-white"
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-[20px] tablet1:flex-wrap justify-evenly tablet1:items-start tablet1:gap-[20px]">
            <div className="flex flex-wrap justify-center gap-6 items-start">
              <TeamMember
                img={content.texts.team.members.member1.img.img}
                alt={content.texts.team.members.member1.img.alt}
                name={t("team.team1.title")}
                role={t("team.team1.subtitle")}
                modalTitle={t("team.team1.title")}
                modalContent={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("team.team1.description"),
                    }}
                  ></span>
                }
              />
              <TeamMember
                img={content.texts.team.members.member2.img.img}
                alt={content.texts.team.members.member2.img.alt}
                name={t("team.team2.title")}
                role={t("team.team2.subtitle")}
                modalTitle={t("team.team2.title")}
                modalContent={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("team.team2.description"),
                    }}
                  ></span>
                }
              />
              <TeamMember
                img={content.texts.team.members.member3.img.img}
                alt={content.texts.team.members.member3.img.alt}
                name={t("team.team3.title")}
                role={t("team.team3.subtitle")}
                modalTitle={t("team.team3.title")}
                modalContent={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("team.team3.description"),
                    }}
                  ></span>
                }
              />
              <TeamMember
                img={content.texts.team.members.member4.img.img}
                alt={content.texts.team.members.member4.img.alt}
                name={t("team.team4.title")}
                role={t("team.team4.subtitle")}
                modalTitle={t("team.team4.title")}
                modalContent={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("team.team4.description"),
                    }}
                  ></span>
                }
              />
            </div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
