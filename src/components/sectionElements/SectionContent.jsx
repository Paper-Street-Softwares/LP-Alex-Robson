import { Children } from "react";
import PropTypes from "prop-types";

export default function SectionContent({ children }) {
  SectionContent.propTypes = {
    children: PropTypes.any,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex flex-wrap items-center justify-between w-full">
      {childrenArray}
    </div>
  );
}
