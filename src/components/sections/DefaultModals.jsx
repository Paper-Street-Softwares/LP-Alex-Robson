import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dialog } from 'primereact/dialog'
import { CornerDownRight, X } from 'lucide-react'
import content from '../../content/content'
import Button from '../interactives/Button'
import SectionArea from '../sectionElements/SectionArea'
import SectionHeader from '../sectionElements/SectionHeader'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import IconButtonFeatureCard from '../cards/IconButtonFeatureCard'

export default function FeaturesParagraphs({ colorMode }) {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')

  const openModal = (cardNum) => {
    const card = content.texts.features[`card${cardNum}`]
    setModalTitle(t(`features.card${cardNum}.title`))

    setModalContent(
      <div className="text-paragraph3">
        <div
          dangerouslySetInnerHTML={{
            __html: t(`features.card${cardNum}.description`),
          }}
        />
      </div>
    )

    setVisible(true)
  }

  const bgClasses = {
    dark: 'bg-bgSectionOpacityDark',
    light: 'bg-bgSectionOpacityLight',
    default: 'bg-neutral-50',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-black',
    default: 'text-black',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const textClass = textClasses[colorMode] || textClasses.default

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={true}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t('features.miniTag')}
        sectionHeaderTitle={t('features.title')}
        sectionHeaderSubtitle={t('features.subtitle')}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode={colorMode}
      />

      <SectionWrapper>
        <div className="flex flex-col justify-center items-center tablet1:items-center w-full gap-6 tablet1:gap-4 desktop1:gap-16">
          {/* Coluna esquerda */}
          <div className="flex flex-wrap gap-6 w-full justify-center">
            <MotionDivDownToUp className="w-fit flex">
              <IconButtonFeatureCard
                icon={content.texts.features.card1.icon}
                title={t('features.card1.title')}
                paragraph={t('features.card1.subtitle')}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  // icon={<CornerDownRight w />}
                  size="small"
                  className="bg-transparent mt-4 uppercase font-bold"
                  labelColor="text-primary"
                  label={t('features.card1.buttonLabel')}
                  onClick={() => openModal(1)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp className="w-fit flex">
              <IconButtonFeatureCard
                icon={content.texts.features.card2.icon}
                title={t('features.card2.title')}
                paragraph={t('features.card2.subtitle')}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  // icon={<CornerDownRight w />}
                  size="small"
                  className="bg-transparent mt-4 uppercase font-bold"
                  labelColor="text-primary"
                  label={t('features.card2.buttonLabel')}
                  onClick={() => openModal(2)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp className="w-fit flex">
              <IconButtonFeatureCard
                icon={content.texts.features.card3.icon}
                title={t('features.card3.title')}
                paragraph={t('features.card3.subtitle')}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  // icon={<CornerDownRight w />}
                  size="small"
                  className="bg-transparent mt-4 uppercase font-bold"
                  labelColor="text-primary"
                  label={t('features.card3.buttonLabel')}
                  onClick={() => openModal(3)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp className="w-fit flex">
              <IconButtonFeatureCard
                icon={content.texts.features.card4.icon}
                title={t('features.card4.title')}
                paragraph={t('features.card4.subtitle')}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  // icon={<CornerDownRight w />}
                  size="small"
                  className="bg-transparent mt-4 uppercase font-bold"
                  labelColor="text-primary"
                  label={t('features.card4.buttonLabel')}
                  onClick={() => openModal(4)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp className="w-fit flex">
              <IconButtonFeatureCard
                icon={content.texts.features.card5.icon}
                title={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(`features.card5.title`),
                    }}
                  />
                }
                paragraph={t('features.card5.subtitle')}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  // icon={<CornerDownRight w />}
                  size="small"
                  className="bg-transparent mt-4 uppercase font-bold"
                  labelColor="text-primary"
                  label={t('features.card5.buttonLabel')}
                  onClick={() => openModal(5)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>

            <MotionDivDownToUp className="w-fit flex">
              <IconButtonFeatureCard
                icon={content.texts.features.card6.icon}
                title={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(`features.card6.title`),
                    }}
                  />
                }
                paragraph={t('features.card6.subtitle')}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  // icon={<CornerDownRight w />}
                  size="small"
                  className="bg-transparent mt-4 uppercase font-bold"
                  labelColor="text-primary"
                  label={t('features.card6.buttonLabel')}
                  onClick={() => openModal(6)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>
          </div>

          {/* Imagem central */}
          {/* <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[35%] ">
            <img
              src={content.texts.features.imgFeatures}
              alt={content.texts.features.alt}
              className="hidden h-[900px] object-cover w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
              loading="lazy"
            />
          </MotionDivDownToUp> */}

          {/* Coluna direita */}
          {/* <div className="flex flex-col tablet2:flex-wrap gap-6 items-center tablet1:items-start">
          
          </div> */}
        </div>
      </SectionWrapper>

      {/* Modal */}
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={
          <div className="w-full border-b border-gray-300 pb-2">
            <span dangerouslySetInnerHTML={{ __html: modalTitle }} />
          </div>
        }
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: '50vw' }}
        breakpoints={{ '4000px': '300px', '1024px': '300px', '641px': '300px' }}
      >
        {modalContent}
      </Dialog>
    </SectionArea>
  )
}
