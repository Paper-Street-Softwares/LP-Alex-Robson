import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionWrapper({ children, className }) {
  SectionWrapper.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div
      className={`w-[90%] max-w-[1215px] flex flex-col items-center ${className}`}
    >
      {childrenArray}
    </div>
  );
}
