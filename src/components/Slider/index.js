import React from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../../assets/profile.jpg";

import "./styles.css";

function Slider(props) {
  const { sections, orientation } = { sections: 1, orientation: "vertical", ...props };

  const constraintsRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const calculate = (xDrag, yDrag) => {
    const { x, y, height, width } = containerRef.current.getBoundingClientRect();

    const data = {};

    if (orientation === "vertical") {
      data.drag = yDrag;
      data.init = y;
      data.length = height;
    } else {
      data.drag = xDrag;
      data.init = x;
      data.length = width;
    }

    const { drag, init, length } = data;
    const event = { percent: 0, section: 0 };

    if (drag <= init) {
      event.percent = 0;
    } else if (drag > init && drag < init + length) {
      const percent = Math.round(((drag - init) * 100) / length);
      event.percent = percent;
    } else {
      event.percent = 100;
    }

    const section = parseInt(event.percent / (100 / sections));
    event.section = section > sections - 1 ? section - 1 : section;

    props?.onChange?.(event);
  };

  return (
    <div ref={containerRef} className="slider-container slider-width">
      <div className="slider-axis" />
      <motion.div className="slider-constraints" ref={constraintsRef}>
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

export default Slider;
