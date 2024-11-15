import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo3.png" width={150} />
        </motion.span>
        <div className="social">
          <a href="https://github.com/keerthana11-2002">
            <img src="/github1.png" alt=""  />
          </a>
          <a href="https://www.linkedin.com/in/keerthana-k-16b6442a0/">
            <img src="/linkedin1.png" alt=""  />
          </a>
        </div>
         
      </div>
    </div>
  );
};

export default Navbar;
