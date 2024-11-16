import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={variants}>
          Hi! I'm <span class="highlight">Keerthana</span>
        </motion.h1>
        <motion.h2 className="role" variants={variants}>
          Frontend Developer
        </motion.h2>
        <motion.p className="description" variants={variants}>
          I'm passionate about crafting responsive, user-friendly interfaces
          with modern web technologies. Turning ideas into visually appealing
          and functional designs is my forte, ensuring seamless user
          experiences.
        </motion.p>
        <motion.div className="links-button" variants={variants}  >
            <motion.button className="download" whileHover={{color:"lightgray"}}>Download CV</motion.button>
           
          <motion.button className="connect">Let's Connect</motion.button>
        </motion.div>
        <motion.img
          className="scroll"
          src="scroll.png"
          alt=""
          variants={variants}
          animate="scrollButton"
        />
      </motion.div>

      <motion.div className="slidingcontainer" variants={slideVariants} initial="initial" animate="animate">
        Design. Code. Create. Innovate. Collaborate. Deliver.
      </motion.div>
      <div className="imagecontainer">
        <img src="banner.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
