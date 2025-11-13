import PropTypes from "prop-types";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import { Link } from "react-router-dom";

export default function ImgAndButtonsCard(props) {
  const { img, alt, button1Label, button1Link } = props;

  const handleClick = () => {
    window.location.href = button1Link + "#";
  };

  ImgAndButtonsCard.propTypes = {
    img: PropTypes.any,
    alt: PropTypes.string,
    button1Label: PropTypes.any,
    button1Link: PropTypes.any,
  };

  return (
    <div className="w-full phone3:w-[45%] desktop1:w-[23%]  bg-bgSectionLight p-[15px] my-[14px] rounded-[10px] flex flex-col gap-[15px]">
      <div className="flex justify-center items-center h-[125px] phone3:h-[80px] tablet1:h-[125px]">
        <MotionDivLeftToRight>
          <img src={img} alt={alt} className="max-h-[90px] max-w-[135px]" />
        </MotionDivLeftToRight>
      </div>

      <Link onClick={handleClick} className="w-full">
        <button className="text-colorWhite bg-red-700 rounded-[10px] text-paragraph3 py-[8px] px-[31px] font-mainFont font-medium w-full transition hover:bg-red-900">
          <MotionDivLeftToRight>
            <p>{button1Label}</p>
          </MotionDivLeftToRight>
        </button>
      </Link>
    </div>
  );
}
