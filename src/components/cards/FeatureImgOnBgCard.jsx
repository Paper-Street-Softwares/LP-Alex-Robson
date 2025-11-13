import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeatureImgOnBgCard(props) {
  const { bgImg, title, description } = props;

  FeatureImgOnBgCard.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
  };

  return (
    <MotionDivDownToUp className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]  tablet1:w-[47%] desktop1:w-[22%]">
      <div
        className="w-full h-[464px] rounded-2xl flex flex-col justify-end bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-end w-full h-full bg-colorBlack bg-opacity-10 rounded-2xl">
          <MotionDivDownToUp className="w-full h-auto bg-bgSectionLight rounded-2xl mx-[10px] mb-[10px] p-[20px] gap-[18px] flex flex-col">
            <h1 className="font-mainFont font-medium text-[26px] desktop1:text-paragraph5 desktop2:text-[26px]">
              {title}
            </h1>
            <p className="font-secondFont text-paragraph4 text-quaternary">
              {description}
            </p>
          </MotionDivDownToUp>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
