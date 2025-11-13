import content from "../../../content/content";
import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function FooterLP() {
  return (
    <div>
      <SectionArea paddingTopAndBottom={false} className="bg-white">
        <SectionWrapper>
          <div className="w-full text-black text-center font-mainFont pt-[36px] phone1:pb-[27%] tablet1:pb-[80px] tablet2:pb-[36px] opacity-70">
            <p>
              {contentLp01.footer.copyrightLine}
              <br />

              {/* {contentLp01.footer.disclaimer} */}
              <p>
                <a
                  className="transition hover:underline"
                  target="_blank"
                  href="https://www.paperstreet.com.br"
                >
                  {" "}
                  {content.texts.footer.footerDivulgacaoText}
                </a>
              </p>
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
