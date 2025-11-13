import PropTypes from "prop-types";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";

export default function ImgTextAndButtonsCard(props) {
  const { img, alt, button1Label, button1Link, text } = props;

  ImgTextAndButtonsCard.propTypes = {
    img: PropTypes.any,
    alt: PropTypes.string,
    button1Label: PropTypes.any,
    button1Link: PropTypes.any,
    text: PropTypes.any,
  };

  return (
    <div className="w-full tablet1:w-[45%] desktop1:w-[29%]  bg-bgSectionLight p-[15px] my-[14px] rounded-[10px] flex flex-col gap-[15px]">
      <MotionDivLeftToRight>
        <div className="flex justify-center items-center h-[125px] phone3:h-[80px] tablet1:h-[125px]">
          <img src={img} alt={alt} className="max-h-[90px] max-w-[150px]" />
        </div>
      </MotionDivLeftToRight>
      <p className="text-center font-mainFont text-paragraph3 text-quaternary">
        <MotionDivLeftToRight>
          <p>{text}</p>
        </MotionDivLeftToRight>
      </p>
      <a href={button1Link} target="_blank" className="w-full">
        <button className="text-colorWhite bg-red-700 rounded-[10px] py-[8px] px-[31px] font-mainFont font-medium text-paragraph3 w-full transition hover:bg-red-900">
          <MotionDivLeftToRight>
            <p>{button1Label}</p>
          </MotionDivLeftToRight>
        </button>
      </a>
    </div>
  );
}
