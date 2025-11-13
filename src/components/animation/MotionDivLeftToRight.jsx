import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children } from "react";
import PropTypes from "prop-types";

export default function MotionDivLeftToRight({ children, className }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const childrenArray = Children.toArray(children);

  MotionDivLeftToRight.propTypes = {
    children: PropTypes.any,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -45 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -45 }}
      transition={{ duration: 1 }}
      className={`${className}`}
    >
      {childrenArray}
    </motion.div>
  );
}
