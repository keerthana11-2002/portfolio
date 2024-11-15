import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Hirez-Job Portal",
    image:
      "https://cdn.freepixel.com/preview/free-vector-graphic-abstract-golden-bokeh-lights-effect-on-black-background-preview-1101183235.jpg",
    description:
      "HiRez is a modern job portal designed to bridge the gap between talented individuals and the right career opportunities. With advanced search filters, users can easily find jobs tailored to their preferences, while personalized dashboards make it simple for job seekers to manage applications and for recruiters to oversee job postings.  ",
  },
  {
    id: 2,
    title: "Plannr-schedule the meeting",
    image:
      "https://cdn.freepixel.com/preview/free-vector-graphic-abstract-golden-bokeh-lights-effect-on-black-background-preview-1101183235.jpg",
    description:
      "Plannr is an intuitive and efficient meeting scheduler designed to simplify the process of organizing and managing your professional or personal meetings. With Plannr, you can effortlessly coordinate with participants, find suitable time slots, and streamline communication for seamless scheduling. Whether it's a quick team sync or a formal client discussion.",
  },
  {
    id: 3,
    title: "Youtube-clone",
    image:
      "https://cdn.freepixel.com/preview/free-vector-graphic-abstract-golden-bokeh-lights-effect-on-black-background-preview-1101183235.jpg",
    description:
      "A fully functional YouTube clone built with modern web technologies. This project mimics the core features of YouTube, including video playback, search functionality, user authentication, and dynamic content loading. The app allows users to browse videos, watch content, and interact with a user-friendly interface. It integrates with an API to display real-time data, offering a seamless, responsive experience across all devices.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start","end start"]
     
  });
  const y = useTransform(scrollYProgress,[0,1],["0%","-300%"])

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
            <div className="imageContainer">
        <img src={item.image} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2> {item.title}</h2>
          <p>{item.description}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
