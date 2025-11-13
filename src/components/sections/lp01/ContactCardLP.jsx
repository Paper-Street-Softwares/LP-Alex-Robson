import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

export default function ContactCardLP({ icon, label, description }) {
  return (
    <MotionDivDownToUp>
      <div className="flex flex-wrap p-[9px]">
        <div className="flex gap-[10px]">
          <div className="h-[60px] w-[60px] bg-minititle flex justify-center items-center text-black">
            {icon}
          </div>
          <div className="flex flex-col justify-center text-black">
            <h1 className="font-semibold">{label}</h1>
            <p className="opacity-80 text-[12px] phone2:text-[14px] phone3:text-[16px] font-secondFont">
              {description}
            </p>
          </div>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
