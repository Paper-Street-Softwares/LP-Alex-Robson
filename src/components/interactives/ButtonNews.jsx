import React from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function ButtonNews({
  icon,
  label,
  buttonLink,
  className,
  textclassName,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
  color = "bg-primary",
  animation = true,
}) {
  if (size === "small") {
    sizeFeatures = "rounded-[4px] px-[18px] py-[10px]";
    textclassName = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-[8px] px-[30px] py-[16px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  const Animation = animation ? MotionDivDownToUp : "div";
  const CustomTagName = removeAnchor ? "div" : "a"; // Forçando um <a>

  return (
    <a
      href={buttonLink}
      target="an_blk"
      className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-colorBlack hover:scale-110`}
    >
      <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
        <div className="">{icon}</div>
        <p className={`flex items-center ${textclassName}`}>{label}</p>
      </div>
    </a>
  );
}
