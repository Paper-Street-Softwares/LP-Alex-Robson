import React from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { getWhatsappLink } from "../util/WhatsappLink"; // Importando a função

export default function Button({
  icon,
  label,
  onClick,
  buttonLink,
  className,
  textclassName,
  labelColor,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
  color,
  animation = true,
  colorMode,
  noScale = false,
}) {
  // Define estilos com base no tamanho
  let textSizeClass = "";
  if (size === "small") {
    sizeFeatures = "rounded-[4px] px-[18px] py-[10px]";
    textSizeClass = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-[8px] px-[30px] py-[16px]";
    textSizeClass = "text-paragraph2 tablet1:text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  const Animation = animation ? MotionDivDownToUp : "div";
  const CustomTagName = removeAnchor ? "div" : tagName || "a";

  const buttonColors = {
    dark: "text-labelButtons",
    light: "text-labelButtons",
    default: "text-labelButtons",
  };
  const buttonColor = buttonColors[colorMode] || buttonColors.default;

  const shouldRedirectToWhatsapp = !buttonLink && !onClick;
  const finalButtonLink = shouldRedirectToWhatsapp
    ? getWhatsappLink()
    : buttonLink;

  return (
    <CustomTag
      tagName={CustomTagName}
      {...(removeTarget ? {} : { target: "_blank" })}
      {...(removeAnchor ? {} : { href: finalButtonLink })}
      className="inline-block max-w-full w-fit"
    >
      {animation ? (
        <MotionDivDownToUp className="w-auto">
          <button
            onClick={onClick}
            className={`flex ${className} ${sizeFeatures} shadow-custom-opacityButton shadow-shadowHero/0 ${
              color || "bg-buttonColor"
            } flex-row items-center justify-around transition text-labelButtons ${
              noScale ? "" : "desktop1:hover:scale-110"
            }`}
          >
            <div
              className={`flex items-center text-center ${gap} min-h-[24px]`}
            >
              {icon && <div className={`${buttonColor}`}>{icon}</div>}
              <p
                className={`flex items-center  ${textSizeClass} ${
                  labelColor || buttonColor
                } ${textclassName}`}
              >
                {label}
              </p>
            </div>
          </button>
        </MotionDivDownToUp>
      ) : (
        <div className="w-auto">
          <button
            onClick={onClick}
            className={`flex ${className} ${sizeFeatures} shadow-custom-opacityButton shadow-shadowHero/0 bg-buttonColor flex-row items-center justify-around transition ${color} text-labelButtons desktop1:hover:scale-110`}
          >
            <div
              className={`flex items-center text-center ${gap} min-h-[24px]`}
            >
              {icon && <div className={`${buttonColor}`}>{icon}</div>}
              <p
                className={`flex items-center ${textSizeClass} ${
                  labelColor || buttonColor
                } ${textclassName}`}
              >
                {label}
              </p>
            </div>
          </button>
        </div>
      )}
    </CustomTag>
  );
}
