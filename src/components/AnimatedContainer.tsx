import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedContainerProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  stagger?: number;
  delayChildren?: number;
};

const AnimatedContainer = ({
  children,
  className = "",
  once = true,
  stagger = 0.3,
  delayChildren = 0,
}: AnimatedContainerProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delayChildren,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item}>{children}</motion.div>}
    </motion.div>
  );
};

export default AnimatedContainer;
