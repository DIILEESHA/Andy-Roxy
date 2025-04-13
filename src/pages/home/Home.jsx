import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./home.css";
import ab from "../../assets/couple.webp";
import { Link } from "react-router-dom";

// Animation variants (consistent with other components)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="home_container">
      <AnimatedSection className="details">
        <motion.div className="top_img" variants={imageVariants}>
          <img className="cimg" src={ab} alt="couple_img" />
        </motion.div>

        <motion.div className="couple_names" variants={containerVariants}>
          <motion.h2 className="couple_name" variants={itemVariants}>
            Andy
          </motion.h2>
          <motion.h2 className="couple_name" variants={itemVariants}>
            &
          </motion.h2>
          <motion.h2 className="couple_name" variants={itemVariants}>
            Roxy
          </motion.h2>
        </motion.div>

        <motion.div className="line" variants={lineVariants} />

        <motion.p className="home_p" variants={itemVariants}>
          Join us for our special day on the magical island of Brač, Croatia –
          <br />
          Saturday, 6th June 2026
        </motion.p>

        <motion.div className="rsvp_btn" variants={itemVariants}>
          <motion.button
            className="rsvp"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link className="a" to="/rsvp">RSVP</Link>
          </motion.button>
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
