import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Paragraphs from '../sectionElements/Paragraphs'
import SectionArea from '../sectionElements/SectionArea'
import SectionHeader from '../sectionElements/SectionHeader'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import SectionWrapper from '../sectionElements/SectionWrapper'
import AccordionExpandDefault from '../interactives/AcordionTwo'
import Button from '../interactives/Button'
import content from '../../content/content'

export default function Faq({ colorMode }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    // light: "bg-bgSectionOpacityLight",
    light: 'squares',
    default: 'bg-neutral-50',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-secondary',
    default: 'text-black',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const titleColor = textClasses[colorMode] || textClasses.default

  return (
    <SectionArea id="faq" className={`${bgClass}`}>
      <SectionHeader
        colorMode="light"
        className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
        miniTitle={t('faq.miniTag')}
        sectionHeaderTitle={t('faq.title')}
        sectionHeaderSubtitle={t('faq.subtitle')}
        titleColorSet={titleColor}
        subtitleColorSet={titleColor}
        mode="light"
      />
      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <AccordionExpandDefault />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <Paragraphs className={`text-center transition`}>
            <Button
              conversao
              className="hoover:scale-0 desktop1:hover:scale-10 transition-all duration-300"
              label={t('faq.paragraph')}
              colorMode={colorMode}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                </svg>
              }
            />
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  )
}
