import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import "./scrollDownIndicator.css";

export default function ScrollDownIndicator() {
  return (
    <div className="flex justify-center desktop1:justify-start">
      <MotionDivRightToLeft>
        <div className="flex flex-col items-center desktop1:items-start">
          <p className="mb-[22px] desktop1:mt-[20px] text-paragraph4 w-[80%] desktop1:text-left text-yellow-400 font-secondFont">
            Deslize para baixo e veja porque ter um site pode levar seus lucros
            lá pro espaço
          </p>
          <div className="scrollDown">
            <span></span>
          </div>
        </div>
      </MotionDivRightToLeft>
    </div>
  );
}
