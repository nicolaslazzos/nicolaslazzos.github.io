import React from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../../assets/profile.jpg";

import "./styles.css";

function Slider({ sections, onChange }) {
  const constraintsRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => setHeight(window.innerHeight);

  const calculate = (xDrag, yDrag) => {
    const { x, y, height, width } = containerRef.current.getBoundingClientRect();
    const event = { percent: 0, section: 0 };

    if (yDrag <= y) {
      event.percent = 0;
    } else if (yDrag > y && yDrag < y + height) {
      const percent = Math.round(((yDrag - y) * 100) / height);
      event.percent = percent;
    } else {
      event.percent = 100;
    }

    event.section = parseInt(event.percent / (100 / sections));

    onChange?.(event);
  };

  const mainheight = { height: 700 };
  const axisHeight = { height: 700 - 40 };

  return (
    <div ref={containerRef} className="slider-container slider-width" style={mainheight}>
      <div className="slider-axis" style={axisHeight} />
      <motion.div className="slider-constraints slider-width" ref={constraintsRef} style={mainheight}>
        <motion.img
          className="slider-avatar slider-width"
          drag
          dragConstraints={constraintsRef}
          dragMomentum={false}
          dragElastic={0.05}
          src={ProfilePicture}
          whileTap={{ scale: 1.1 }}
          onDrag={(event, info) => calculate(info.point.x, info.point.y)}
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
  avatar: { width: 150, height: 150, borderRadius: 150, overflow: "hidden", cursor: "pointer" },
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
