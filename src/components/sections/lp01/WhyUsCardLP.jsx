import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

export default function WhyUsCardLP({ icon, title, description, className }) {
  return (
    <>
      <MotionDivDownToUp
        className={`bg-neutral-100 rounded-xl w-full flex tablet2:w-[60%] desktop1:w-[60%] desktop2:w-[45%] flex-col items-center desktop1:hover:scale-110 px-[18px] py-[18px] ${className}`}
      >
        {/* <div className="h-[64px] w-[64px] mb-[24px] bg-bgSectionDark rounded-md flex justify-center items-center text-white">
          {icon}
        </div> */}
        <h1 className="h-auto leading-[28px] font-bold font-mainFont text-title3 text-center desktop1:text-start mb-[16px] text-secondary">
          {title}
        </h1>
        <p className="text-center desktop1:text-start text-black opacity-70 font-mainFont w-full text-paragraph3">
          {description}
        </p>
      </MotionDivDownToUp>
    </>
  );
}
