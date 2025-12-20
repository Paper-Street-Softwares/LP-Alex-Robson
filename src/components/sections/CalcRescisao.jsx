import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeader from '../sectionElements/SectionHeader'
import { useTranslation } from 'react-i18next'
import Button from '../interactives/Button'
import content from '../../content/content'
import { Calculator } from 'lucide-react'

function CalcRescisao({ colorMode }) {
  const { t } = useTranslation()

  // Classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
    default: 'bg-bgCalcSection',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-secondary',
    default: 'text-white',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const textColor = textClasses[colorMode] || textClasses.default

  return (
    <div className={`${bgClass}`}>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={t('calc.miniTag')}
            sectionHeaderTitle={t('calc.title')}
            sectionHeaderSubtitle={t('calc.subtitle')}
            type=""
            titleColorSet={textColor}
            subtitleColorSet={textColor}
            miniTitleTextColor="text-primary"
            mode="dark"
          />

          <Button
            icon={<Calculator className="text-primary" />}
            label={t('calc.labelButton')}
            buttonLink={content.texts.calc.linkButton}
            textclassName="text-primary"
            className="mt-6 border border-primary"
            color="bg-bgSectionDark"
          />
        </SectionWrapper>
      </SectionArea>
    </div>
  )
}

export default CalcRescisao
