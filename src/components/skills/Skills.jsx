 
import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import skills from "../../skills.json";

// Define animation variants for each skill card
const cardVariants = {
  hidden: { opacity: 0, x: 50 }, // Start hidden and to the right
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2, // Stagger animation
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const Skills = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true); // Trigger animation when the component mounts
    return () => {
      setIsAnimating(false); // Reset animation when the component unmounts
    };
  }, []);

  return (
    <div className="skills">
      <h2>Skills</h2>
      <motion.div
        className="skills-carousel"
        initial="hidden"
        animate={isAnimating ? "visible" : "hidden"} // Reset animation on mount
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="skills-grid"
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"} // Only animate when the page is visited
        >
          {skills.map((item, index) => (
            <motion.div
              key={item.title}
              className="skill-card"
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
