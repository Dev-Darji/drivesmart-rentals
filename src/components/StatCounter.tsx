import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

const StatCounter = ({ value, suffix = "", className = "" }: StatCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString('en-IN')
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export default StatCounter;
