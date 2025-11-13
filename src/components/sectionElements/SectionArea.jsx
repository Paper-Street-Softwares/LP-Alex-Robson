import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionArea({
  children,
  className,
  id,
  paddingtop = true,
  paddingbot = true,
  paddingTopAndBottom,
}) {
  SectionArea.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    id: PropTypes.string,
    paddingtop: PropTypes.bool,
    paddingbot: PropTypes.bool,
    paddingTopAndBottom: PropTypes.bool,
  };

  if (paddingTopAndBottom === false) {
    paddingtop = paddingTopAndBottom;
    paddingbot = paddingTopAndBottom;
  }

  const childrenArray = Children.toArray(children);
  const paddingTopp = paddingtop ? "pt-[64px] desktop1:pt-[96px]" : "";
  const paddingBottom = paddingbot ? "pb-[64px] desktop1:pb-[96px]" : "";


  return (
    <div
      id={id}
      className={`w-full flex flex-col items-center ${paddingTopp} ${paddingBottom} ${paddingTopAndBottom} ${className}`}
    >
      {childrenArray}
    </div>
  );
}
