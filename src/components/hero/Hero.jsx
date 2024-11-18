 
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
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const bannerVariants = {
  initial: {
    scale: 1,
    y: 0,
  },
  animate: {
    scale: 1.2,  
    y: [-10, 10], 
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",  
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
          Hi! I'm <span className="highlight">Keerthana</span>
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
        <motion.div className="links-button" variants={variants}>
          <motion.button
            className="download"
            whileHover={{ color: "lightgray" }}
          >
           <a href="https://1drv.ms/b/c/ebe652e938f8ee72/EQpA5cDzqAREg3mC6UNhqdMBTU-uCFp3QEoTXVNTOxfSug">Download CV</a> 
          </motion.button>

          <motion.button className="connect">
            <a href='#Contact'>Let's Connect</a></motion.button>
        </motion.div>
         
      </motion.div>

      <motion.div
        className="slidingcontainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Design. Code. Create. Innovate. Collaborate. Deliver.
      </motion.div>

      <div className="imagecontainer">
        <motion.img
          className="banner"
          src="banner.png"
          alt="banner"
          variants={bannerVariants}
          initial="initial"
          animate="animate"
        />
      </div>
    </div>
  );
};

export default Hero;
