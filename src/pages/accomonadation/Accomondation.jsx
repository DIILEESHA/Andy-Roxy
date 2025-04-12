import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import arch from "../../assets/arch.avif";
import drink from "../../assets/second.avif";
import third from "../../assets/third.avif";
import dance from "../../assets/dance.avif";
import flight from "../../assets/flight.jpg";
import ferry from "../../assets/ferry.jpeg";
import tap from "../../assets/tap.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
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

const Accomondation = () => {
  return (
    <div className="ceremony">
      <AnimatedSection>
        <motion.h2 className="cer" variants={itemVariants}>
          Accommodation & Travel
        </motion.h2>
        <motion.p className="cer_p" variants={itemVariants}>
          For ease, we suggest staying in Bol, where transport to the ceremony at
          St. Peter's Church will depart around 1:00 PM on Saturday, 6th June
          2026. After the ceremony, we'll head to Mali Raj for dinner and dancing.
          Taxis will be available for guests staying outside Bol.
        </motion.p>
      </AnimatedSection>

      <AnimatedSection>
        <motion.h2 className="wediing" variants={itemVariants}>
          Arrival & Transport
        </motion.h2>
        <motion.div className="line" variants={lineVariants} />
        <motion.p className="nk" variants={itemVariants}>
          We'll be organizing transport from the center of Bol on the day of the
          wedding at 1:00 PM. Please be ready for pick-up at that time — the exact
          location will be shared closer to the date. Once we arrive at St.
          Peter's Church, there will be a short, uphill walk.
          <br />
          <br />
          Comfortable shoes are recommended. Our team will be available to assist
          anyone who may need help. After the ceremony and welcome drinks,
          transportation will be provided to take everyone to Mali Raj Restaurant
          for dinner and dancing.
        </motion.p>
      </AnimatedSection>

      <AnimatedSection>
        <motion.h2 className="wediing" variants={itemVariants}>
          Where to Stay
        </motion.h2>
        <motion.div className="line" variants={lineVariants} />
        <motion.p className="nk" variants={itemVariants}>
          We highly recommend staying in Bol, on the island of Brač. It's the most
          convenient location, especially since all wedding-day transport will
          depart from there. Brač is a small island, so staying in nearby towns is
          still manageable — but Bol makes everything easier for the big day.
        </motion.p>
      </AnimatedSection>

      <AnimatedSection>
        <motion.h2 className="wediing" variants={itemVariants}>
          ✈️ Getting to Brač from London
        </motion.h2>
        <motion.div className="line" variants={lineVariants} />
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grid" variants={containerVariants}>
          <motion.div className="venue_i" variants={imageVariants}>
            <img src={flight} alt="" className="venue_io null" />
          </motion.div>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title joras">Flights to Split (SPU)</h2>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              Planning your trip is simple—Split (SPU) is the closest airport to
              Brač, with several direct flights available from London. Below are
              some key flight details to help you get started!
            </p>

            <br />
            <br />
            <p className="sub_paragraph sha">
              Airport Shuttle: ~30 mins to Split Bus Station (next to the ferry
              port)
              <br />
              <br />
              Public Bus (No. 37): ~50 mins to the city
              <br />
              <br />
              💸 Return flights in <b>June 2026</b>
              are currently estimated from <b>£100–£150,</b>
              with one-way fares as low as <b>£35.99</b> (early booking
              recommended!)
            </p>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grid saba" variants={containerVariants}>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title joras">Split Airport to Ferry Port</h2>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              Reaching the ferry port from Split Airport is quick and convenient.
              Whether you prefer a shuttle, public bus, or taxi, you'll find
              several options to suit your travel style. The ferry terminal is
              located right next to the main bus station, making your journey to
              Brač smooth and stress-free.
            </p>
            <br />
            <br />

            <p className="sub_paragraph sha">
              ✈️ Direct flights take approx. 2.5 hours
              <br />
              <br />
              ✈️ Airlines: British Airways, easyJet, Croatia Airlines
              <br />
              <br />
              Taxi or Uber: ~30 mins (traffic dependent)
            </p>
          </motion.div>
          <motion.div className="venue_i" variants={imageVariants}>
            <img src={tap} alt="" className="venue_io null" />
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grid saba" variants={containerVariants}>
          <motion.div className="venue_i" variants={imageVariants}>
            <img src={ferry} alt="" className="venue_io null" />
          </motion.div>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title joras">Flights to Split (SPU)</h2>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              Getting to Bol is easy and beautiful! Hop on a direct catamaran from
              Split to Bol for a scenic one-hour ride across the Adriatic. Ferries
              are run by Jadrolinija and Kapetan Luka, with seasonal pricing—so we
              recommend booking your tickets in advance to secure the best rates
              and times.
            </p>

            <br />
            <br />
            <p className="sub_paragraph sha">
              ⛴ Operators: Jadrolinija or Kapetan Luka
              <br />
              <br />
              ⏱ Journey Time: ~1 hour
              <br />
              <br />
              💰 Cost: €5–30 (seasonal)
              <br />
              <br />
              🌐 More info:
              <a
                href="https://www.croatiaferries.com/split-bol-ferry.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                croatiaferries.com
              </a>
            </p>
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

export default Accomondation;