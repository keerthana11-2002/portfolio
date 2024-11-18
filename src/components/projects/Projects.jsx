// //  import { useRef } from "react";
// // import "./Projects.scss";
// // import { motion, useScroll, useSpring, useTransform } from "framer-motion";


// // const Single = ({ item }) => {
// //   const ref = useRef();
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start start", "end start"],
// //   });

// //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

// //   return (
// //     <section ref={ref}>
// //       <div className="container">
// //         <div className="wrapper">
// //           <div className="imageContainer">
// //             <img src={item.image} alt={item.title} />
// //              <img src="button.png" {item.code}/>
// //           </div>
// //           <motion.div className="textContainer" style={{ y }}>
// //             <h2>{item.title}</h2>
// //             <p>{item.description}</p>
// //             <a href={item.link} target="_blank" rel="noopener noreferrer">
// //               <button>Visit Project</button>
// //             </a>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Projects = () => {
// //   const ref = useRef();
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["end end", "start start"],
// //   });

// //   const scaleX = useSpring(scrollYProgress, {
// //     stiffness: 100,
// //     damping: 30,
// //   });

// //   return (
// //     <div className="projects" ref={ref}>
// //       <div className="progress">
// //         <h1>Projects</h1>
// //         <motion.div style={{ scaleX }} className="progressbar"></motion.div>
// //       </div>
// //       {items.map((item) => (
// //         <Single item={item} key={item.id} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default Projects;
// import { useState, useRef } from "react";
// import "./Projects.scss";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// const items = [
//   {
//     id: 1,
//     title: "Hirez-Job Portal",
//     image: "/logo31.png",
//     description:
//       "Hirez is a modern job portal designed to bridge the gap between talented individuals and the right career opportunities. With advanced search filters, users can easily find jobs tailored to their preferences, while personalized dashboards make it simple for job seekers to manage applications and for recruiters to oversee job postings.",
//     link: "https://hirez-project1.vercel.app/",
//     code:"https://github.com/keerthana11-2002/HirezProject1"
//   },
//   {
//     id: 2,
//     title: "Plannr-schedule the meeting",
//     image: "/logo41.png",
//     description:
//       "Plannr is an intuitive and efficient meeting scheduler designed to simplify the process of organizing and managing your professional or personal meetings. Effortlessly coordinate with participants, find suitable time slots, and streamline communication.",
//     link: "https://plannr-two.vercel.app/",
//     code:"https://github.com/keerthana11-2002/plannr",
//   },
//   {
//     id: 3,
//     title: "Streamfiy",
//     image:"/logo52.png",
       
//     description:
//       "A fully functional YouTube clone built with modern web technologies. Mimics core YouTube features like video playback, search, authentication, and dynamic content loading. Integrates APIs for real-time data.",
//     link: "https://youtube-seven-sigma.vercel.app/",
//     code:"https://github.com/keerthana11-2002/youtube",
//   },
// ];
// const Single = ({ item }) => {
//   const [showButton, setShowButton] = useState(true); // Track visibility of the button
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

//   // Handle button click to open code page and hide the button
//   const handleButtonClick = () => {
//     window.open(item.code, "_blank"); // Open the source code in a new tab
//     setShowButton(false); // Hide the button
//   };

//   return (
//     <section ref={ref}>
//       <div className="container">
//         <div className="wrapper">
//           <div className="imageContainer">
//             <img src={item.image} alt={item.title} />
//             {/* Show the button if it's visible */}
//             {showButton && (
//               <button onClick={handleButtonClick}>View Source Code</button>
//             )}
//           </div>
//           <motion.div className="textContainer" style={{ y }}>
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <a href={item.link} target="_blank" rel="noopener noreferrer">
//               <button>Visit Project</button>
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Projects = () => {
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div className="projects" ref={ref}>
//       <div className="progress">
//         <h1>Projects</h1>
//         <motion.div style={{ scaleX }} className="progressbar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Projects;
import { useRef, useState } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Hirez-Job Portal",
    image: "/logo31.png",
    description:
      "Hirez is a modern job portal designed to bridge the gap between talented individuals and the right career opportunities. With advanced search filters, users can easily find jobs tailored to their preferences, while personalized dashboards make it simple for job seekers to manage applications and for recruiters to oversee job postings.",
    link: "https://hirez-project1.vercel.app/",
    code: "https://github.com/keerthana11-2002/HirezProject1"
  },
  {
    id: 2,
    title: "Plannr-schedule the meeting",
    image: "/logo41.png",
    description:
      "Plannr is an intuitive and efficient meeting scheduler designed to simplify the process of organizing and managing your professional or personal meetings. Effortlessly coordinate with participants, find suitable time slots, and streamline communication.",
    link: "https://plannr-two.vercel.app/",
    code: "https://github.com/keerthana11-2002/plannr",
  },
  {
    id: 3,
    title: "VidFusion",
    image: "/logo52.png",
    description:
      "A fully functional VidFusion built with modern web technologies. Mimics core YouTube features like video playback, search, and dynamic content loading. Integrates APIs for real-time data.",
    link: "https://youtube-seven-sigma.vercel.app/",
    code: "https://github.com/keerthana11-2002/youtube",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const [showCode, setShowCode] = useState(false);

   

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.image} alt={item.title} />
            <a href={item.code} target="_blank" rel="noopener noreferrer">
               
              <img src="button.png" className="codeButton" width="10" alt=""/>
            </a>
            {showCode && (
              <div className="codeSection">
                <a href={item.code} target="_blank" rel="noopener noreferrer">
                  <img src="button.png" alt=""/>
                </a>
              </div>
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Visit Project</button>
            </a>
             
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
