import React from "react";
import { motion } from "framer-motion";

import "./index.css";

const Skill = ({ children }) => {
  return (
    <motion.div className="skill-container">
      <p className="skill-text">{children}</p>
    </motion.div>
  );
};

export default Skill;
