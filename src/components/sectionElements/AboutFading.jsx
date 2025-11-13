import { Trans } from "react-i18next";

export default function AboutFading({ colorMode = "default" }) {
  const textClasses = {
    dark: "text-white",
    light: "text-secondary",
    default: "text-white",
  };
  const fadeClasses = {
    dark: "to-bgFixedDark",
    light: "to-bgFixedLight",
    default: "to-bgSectionDark",
  };

  const textClass = textClasses[colorMode] || textClasses.default;
  const fadeClass = fadeClasses[colorMode] || fadeClasses.default;

  return (
    <div
      className={`
        relative font-secondFont text-paragraph4 ${textClass}
        max-h-[200px] overflow-hidden
      `}
    >
      <Trans i18nKey="about.paragraph" />

      <div
        className={`pointer-events-none absolute bottom-0 w-full h-[80px] bg-gradient-to-b from-transparent ${fadeClass}`}
      />
    </div>
  );
}
