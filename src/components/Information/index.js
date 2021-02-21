import React from "react";
import { motion, useAnimation } from "framer-motion";

import ReactLogo from "../../assets/react.png";
import NodeLogo from "../../assets/node.png";

import "./styles.css";

const Information = ({ section: sec }) => {
  const [section, setSection] = React.useState(sec);

  const controls = useAnimation();

  React.useEffect(() => {
    controls.start("visible");
  }, []);

  React.useEffect(() => {
    animate();
  }, [sec]);

  const animate = async () => {
    controls.start("hidden");

    await new Promise((resolve) => setTimeout(resolve, 500));

    await setSection(sec);

    controls.start("visible");
  };

  const sections = {
    0: [
      <div className="information-content">
        <p className="information-p">
          I'm an Information Systems Engineer graduated from the UTN-FRC. I'm currently working as a web and mobile
          full-stack developer mainly with React, React Native and Node JS, and also I'm a Data Science and Machine
          Learning enthusiast.
        </p>
      </div>,
      <div className="information-content">
        <p className="information-p">
          Most of my free time I dedicate to work on personal projects or take courses to earn experience, learn new
          things or re enforce previous knowledges.
        </p>
      </div>
    ],
    1: [
      <div className="information-content">
        <p className="information-p">2015 - 2020</p>
        <p className="information-t">Information Systems Engineering</p>
        <p className="information-p">Universidad Tecnologica Nacional - Facultad Regional Cordoba</p>
        <p className="information-d">GPA: 9.11 / 10</p>
      </div>,
      <div className="information-content">
        <p className="information-p">2009 - 2014</p>
        <p className="information-t">Bachelor in Economics and Administration</p>
        <p className="information-p">Instituto Nuestra Señora de Lourdes</p>
      </div>
    ],
    2: [
      <div className="information-content">
        <p className="information-p">August 2020 - Now</p>
        <p className="information-t">Software Developer</p>
        <p className="information-p">Mobbex</p>
        <p className="information-d">
          Currently working with React and React Native using TypeScript in the web and mobile applications.
        </p>
      </div>
    ],
    3: [
      <div className="information-content">
        <div className="skills-container">
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
          <motion.div className="skill"></motion.div>
        </div>
      </div>
    ]
  };

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.3
      },
      y: 0
    }),
    hidden: (i) => ({
      opacity: 0,
      transition: {
        delay: (sections[section].length - 1 - i) * 0.15,
        duration: 0.3
      },
      y: 200
    })
  };

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <div className="information-container">
      <p className="information-title">Nicolas Lazzos</p>
      <p className="information-subtitle">Information Systems Engineer</p>
      <br />
      <motion.ul initial="hidden" animate={controls} variants={list}>
        {sections[section].map((item, i) => (
          <motion.li custom={i} initial="hidden" animate={controls} variants={variants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Information;
