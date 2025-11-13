import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionSubtitles({ children, className }) {
  SectionSubtitles.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };
  const childrenArray = Children.toArray(children);
  return <p className={` ${className}`}>{childrenArray}</p>;
}
