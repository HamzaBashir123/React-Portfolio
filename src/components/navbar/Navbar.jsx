import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{duration:0.5}}
        >
          Hamza Bashir
        </motion.span>
        <motion.div className="social" initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{duration:0.5}}>
          <a href="#">
            <img src="/LinkedIn.png" alt="" />
          </a>
          <a href="#">
            <img src="/github.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
