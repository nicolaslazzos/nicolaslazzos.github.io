import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

const Pagination = ({ page }) => {
  return (
    <motion.div
      // initial="rotated"
      // variants={{
      //   rotated: {
      //     rotate: 90
      //   }
      // }}
      className="pagination-container rotation"
    >
      <p className="pagination-text">{page}</p>
    </motion.div>
  );
};

export default Pagination;
