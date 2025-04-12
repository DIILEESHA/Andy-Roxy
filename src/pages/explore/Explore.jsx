import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fr from "../../assets/frs.webp";
import ferry from "../../assets/ferry.jpeg";
import tap from "../../assets/tap.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
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

const Explore = () => {
  return (
    <div className="ceremony">
      <AnimatedSection>
        <motion.h2 className="cer" variants={itemVariants}>
          Turn Your Trip into a Holiday
        </motion.h2>
        <motion.p className="cer_p" variants={itemVariants}>
          Make the most of your time in Croatia! From crystal-clear seas to
          ancient towns and natural wonders, it’s the perfect chance to enjoy a
          mini getaway. Whether you're staying just a few days or planning an
          extended holiday, here are some ideas to inspire your adventures
        </motion.p>
      </AnimatedSection>

      <AnimatedSection>
        <motion.h2 className="wediing" variants={itemVariants}>
          🏝 Discover Bol & Brač
        </motion.h2>
        <motion.div className="line" variants={lineVariants} />
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grid" variants={containerVariants}>
          <motion.div className="venue_i" variants={imageVariants}>
            <img src={fr} alt="" className="venue_io null" />
          </motion.div>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title joras">🏝 In Bol & Brač:</h2>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              {" "}
              Make the most of your time on the island! From stunning beaches to
              local wine and olive oil tastings, Bol and Brač offer the perfect
              mix of relaxation and adventure.{" "}
            </p>

            <br />
            <p className="sub_paragraph sha">
              <b>Zlatni Rat Beach</b>
              – Iconic for its unique shape and turquoise waters. Great for
              swimming, sunbathing, or water sports.
              <br />
              <br />
              <b>Vidova Gora</b>
              – Hike or drive to the highest point on Brač for breathtaking
              views of the Adriatic.
              <br />
              <br />
              <b>Wine Tasting</b>– Discover local vineyards and sample Brač’s
              signature white wine, Pošip.
              <br />
              <br />
              <b>Olive Oil Museum</b>– A quaint and tasty stop to learn about
              the island’s olive oil heritage (yes, there are tastings!).
            </p>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grid saba" variants={containerVariants}>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title joras">Further Afield:</h2>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              If you have some extra time, venture further afield to explore
              Croatia’s rich history and vibrant culture—from ancient palaces
              and buzzing harbors to serene national parks and legendary city
              walls.
            </p>
            <br />

            <p className="sub_paragraph sha">
              <b>Split</b>
              – Explore the historic old town and Diocletian’s Palace, a UNESCO
              World Heritage Site.
              <br />
              <br />
              <b>Hvar</b>
              – Take a boat to this chic island, famous for its lively harbor
              and beach clubs.
              <br />
              <br />
              <b>Krka National Park</b>– A day trip dream: waterfalls, wooden
              boardwalks, and natural pools.
              <br />
              <br />
              <b>Dubrovnik</b>– If you’ve got extra time, it’s well worth it.
              Walk the city walls and soak up that Game of Thrones magic.
            </p>
          </motion.div>
          <motion.div className="venue_i" variants={imageVariants}>
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/99/9a/f0.jpg"
              alt=""
              className="venue_io null"
            />
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grids saba" variants={containerVariants}>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title joras">A Little Note on Kids</h2>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              We absolutely adore your little ones, but due to venue
              limitations, we kindly ask that our celebration remain
              adults-only. We hope this gives you the chance to relax and enjoy
              a magical weekend away!
            </p>
            <br />
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Explore;
