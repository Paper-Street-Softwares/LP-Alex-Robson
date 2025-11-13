import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function HowltWorksCardLPV({
  icon,
  title,
  description,
  animation = true,
  colorMode = "default", // 'light', 'dark' ou 'default'
}) {
  let textColor, textOpacity;

  switch (colorMode) {
    case "light":
      textColor = "text-black";
      textOpacity = "opacity-90";
      break;
    case "dark":
      textColor = "text-white";
      textOpacity = "opacity-80";
      break;
    case "default":
    default:
      textColor = "text-black";
      textOpacity = "opacity-80";
      break;
  }

  const BaseContent = (
    <div className="flex flex-col items-center transition desktop1:items-center font-mainFont text-center min-w-[255px] desktop1:min-w-[180px] m-auto tablet1:m-0desktop1:hover:scale-110 h-[150px] justify-between p-4 ">
      <div
        className={`p-[18px] mb-[18px] flex justify-center items-center text-labelButtons bg-primary rounded-full`}
      >
        {icon}
      </div>

      <h1 className={`text-[20px] min-h-[60px] ${textColor}`}>{title}</h1>
      <p
        className={`text-[16px] text-center w-full ${textColor} ${textOpacity}`}
      >
        {description}
      </p>
    </div>
  );

  const StaticContent = (
    <div className="flex flex-col items-center transition desktop1:items-center font-mainFont text-center min-w-[255px] desktop1:min-w-[180px] m-auto tablet1:m-0desktop1:hover:scale-110 h-[150px] justify-between p-4 bg-primary rounded-md  ">
      <h1 className={`text-[20px] min-h-[30px] text-black`}>{title}</h1>
      <p
        className={`text-[16px] text-center w-full h-[80px] text-black ${textOpacity}`}
      >
        {description}
      </p>
    </div>
  );

  return animation ? (
    <MotionDivDownToUp className="tablet1:w-[45%]">
      {BaseContent}
    </MotionDivDownToUp>
  ) : (
    <MotionDivDownToUp className="tablet1:w-[45%]">
      {StaticContent}
    </MotionDivDownToUp>

  );
}
