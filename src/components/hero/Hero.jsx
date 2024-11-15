import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <div class="hero-content">
          <h1>
            Hi! I'm <span class="highlight">Keerthana</span>
          </h1>
          <h2 class="role">Frontend Developer</h2>
          <p class="description">
            I’m passionate about crafting responsive, user-friendly interfaces
            with modern web technologies. Turning ideas into visually appealing
            and functional designs is my forte, ensuring seamless user
            experiences.
          </p>
        </div>
      </div>
      <div className="imagecontainer">
        <img src="banner.png" />
      </div>
      <div className="links-button">
<button className="download">Download CV</button>
<button className="connect">Let's Connect</button>
      </div>
    </div>
  );
};

export default Hero;
