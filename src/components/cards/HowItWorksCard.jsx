import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function HowItWorksCard({
  number,
  title,
  description,
  animation = true,
  colorMode = "default", // 'light', 'dark' ou 'default'
}) {
  let textColor, textOpacity;

  switch (colorMode) {
    case "light":
      textColor = "text-secondary";
      textOpacity = "opacity-90";
      break;
    case "dark":
      textColor = "text-white";
      textOpacity = "opacity-80";
      break;
    case "default":
    default:
      textColor = "text-white";
      textOpacity = "opacity-80";
      break;
  }

  const BaseContent = (
    <div className="flex flex-col items-center justify-center transition desktop1:items-start font-mainFont desktop1:hover:scale-110 h-auto">
      <div className="bg-buttonColor mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-labelButtons text-title1 font-semibold">
        {number}
      </div>

      <h1
        className={`text-[20px] text-center desktop1:text-start font-bold mb-[24px] ${textColor}`}
      >
        {title}
      </h1>
      <p
        className={`text-[16px] text-center font-secondFont desktop1:text-left w-full ${textColor} ${textOpacity}`}
      >
        {description}
      </p>
    </div>
  );

  const StaticContent = (
    <div className="flex flex-col items-center justify-center tablet1:w-[45%] transition desktop1:items-start font-mainFont desktop1:hover:scale-110 h-auto">
      <div className="bg-buttonColor mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-labelButtons text-title1 font-semibold">
        {number}
      </div>
      <h1 className="text-[20px] text-colorWhite font-bold mb-[24px]">
        {title}
      </h1>
      <p className="text-[16px] text-colorWhite opacity-70 text-center desktop1:text-left w-full">
        {description}
      </p>
    </div>
  );

  return animation ? (
    <MotionDivDownToUp className="tablet1:w-[45%]">
      {BaseContent}
    </MotionDivDownToUp>
  ) : (
    StaticContent
  );
}
