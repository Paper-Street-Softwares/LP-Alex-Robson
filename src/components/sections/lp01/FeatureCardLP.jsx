import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

export default function FeatureCardLP({ icon, title, description, className }) {
  return (
    <>
      <MotionDivDownToUp
        className={`bg-transparent rounded-xl w-full flex tablet2:w-[60%] desktop1:w-[60%] desktop2:w-[45%] flex-col items-center desktop1:hover:scale-110 px-[18px] py-[18px] ${className}`}
      >
        <div className="h-[64px] w-[64px] mb-[24px] bg-minititle rounded-md flex justify-center items-center text-iconButtons">
          {icon}
        </div>
        <h1 className="h-auto leading-[28px] font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
          {title}
        </h1>
        <p className="text-center text-black opacity-70 font-secondFont w-full text-paragraph3">
          {description}
        </p>
      </MotionDivDownToUp>
    </>
  );
}
