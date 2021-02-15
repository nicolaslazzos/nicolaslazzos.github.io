import React from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../assets/profile.jpg";

function Slider() {
  const constraintsRef = React.useRef(null);

  return (
      <div style={styles.container}>
        <div style={styles.axis} />
        <motion.div style={styles.constraints} ref={constraintsRef}>
          <motion.img
            drag
            dragConstraints={constraintsRef}
            dragMomentum={false}
            dragElastic={0.05}
            style={styles.avatar}
            src={ProfilePicture}
            whileTap={{ scale: 1.1 }}
          />
        </motion.div>
      </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 600,
    width: 150
  },
  avatar: { backgroundColor: "white", width: 150, height: 150, borderRadius: 150, overflow: "hidden", cursor: 'pointer' },
  constraints: {
    position: "absolute",
    height: 600,
    width: 150
  },
  axis: {
    display: "flex",
    position: "relative",
    width: "45%",
    height: "100%",
    margin: 20,
    borderRadius: 75,
    backgroundColor: "#525252",
    opacity: 0.8
  }
};

export default Slider;
