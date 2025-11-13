import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children } from "react";
import PropTypes from "prop-types";

export default function MotionDivUpToDown({ children, className }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const childrenArray = Children.toArray(children);

  MotionDivUpToDown.propTypes = {
    children: PropTypes.any,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 1 }}
      className={`${className}`}
    >
      {childrenArray}
    </motion.div>
  );
}
