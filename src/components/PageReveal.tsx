import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageRevealProps {
  children: ReactNode;
}

const PageReveal = ({ children }: PageRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // Custom liquid-smooth cubic bezier
          opacity: { duration: 0.8 },
          filter: { duration: 0.8 }
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default PageReveal;
