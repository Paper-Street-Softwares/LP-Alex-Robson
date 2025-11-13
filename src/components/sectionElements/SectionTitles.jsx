import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionTitles({ children, className }) {
  SectionTitles.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };
  const childrenArray = Children.toArray(children);
  return (
    <h1
      className={`text-colorBlack mb-[22px] text-title4 leading-[34px] tablet1:leading-[54px] tablet1:text-title5 desktop1:text-title6 font-mainFont font-bold ${className}`}
    >
      {childrenArray}
    </h1>
  );
}
