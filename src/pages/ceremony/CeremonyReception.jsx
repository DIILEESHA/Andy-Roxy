import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./ceremony.css";
import arch from "../../assets/arch.avif";
import drink from "../../assets/second.avif";
import third from "../../assets/third.avif";
import dance from "../../assets/dance.avif";
import unnamed from "../../assets/unnamed.jpg";
import mali from "../../assets/maliraj.jpg";

// Animation variants (same as previous component)
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

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
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

const CeremonyReception = () => {
  const ceremonyData = [
    {
      id: 1,
      img: arch,
      title: "Wedding Ceremony – 2:30 PM",
      sub: "St. Peter's Church, Brač",
    },
    {
      id: 2,
      img: drink,
      title: " Welcome Drinks & Nibbles",
      sub: "After the ceremony",
    },
    {
      id: 3,
      img: third,
      title: " Dinner",
      sub: "Mali Raj Restaurant",
    },
    {
      id: 4,
      img: dance,
      title: " Dancing with DJ",
      sub: "After dinner until 1:00 AM",
    },
  ];

  const ceremonyDatas = [
    {
      id: 1,
      img: arch,
      title: "Starter",
      sub: "A sharing plate of Dalmatian prosciutto, cheese, tuna pâté, organic tomatoes, olives, and homemade bread.",
    },
    {
      id: 2,
      img: drink,
      title: " First Course (choose one)",
      sub: "🖤 Black Risotto – a Croatian classic rich in flavor🌿 Vegetable Risotto – light, creamy, and seasonal",
    },
    {
      id: 3,
      img: third,
      title: " Second Course (choose one)",
      sub: "🍖 Grilled Lamb – served with grilled veggies, roast potatoes, and salad � Sea Bass – paired with grilled vegetables, roast potatoes, and salad",
    },
    {
      id: 4,
      img: dance,
      title: " Dessert",
      sub: " 🎂 A slice of our delicious wedding cake to end the meal on a sweet note.",
    },
  ];

  return (
    <div className="ceremony">
      <AnimatedSection>
        <motion.h2 className="cer" variants={itemVariants}>
          Ceremony & Reception
        </motion.h2>
        <motion.p className="cer_p" variants={itemVariants}>
          Join us at St. Peter's Church on the island of Brač on Saturday, 6th
          June 2026, at 2:30 PM for our wedding ceremony. Afterward, enjoy welcome
          drinks and nibbles before heading to Mali Raj Restaurant for an
          unforgettable dinner with a stunning view. The night will continue with
          dancing, guided by our DJ, until 1:00 AM.
        </motion.p>
      </AnimatedSection>

      <AnimatedSection>
        <motion.h2 className="wediing" variants={itemVariants}>
          Wedding Day Schedule
        </motion.h2>
        <motion.div className="line" variants={lineVariants} />
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="card_grid" variants={containerVariants}>
          {ceremonyData.map((item) => (
            <motion.div 
              key={item.id} 
              className="sub_card"
              variants={cardVariants}
            >
              <motion.img 
                src={item.img} 
                alt={item.title} 
                className="sub_img" 
                variants={imageVariants}
              />
              <h3 className="sub_title">{item.title}</h3>
              <p className="sub_paragraph">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.h2 className="wediing" variants={itemVariants}>
          Venue
        </motion.h2>
        <motion.div className="line" variants={lineVariants} />
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grid" variants={containerVariants}>
          <motion.div className="venue_i" variants={imageVariants}>
            <img src={unnamed} alt="" className="venue_io" />
          </motion.div>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title">🕊️ St. Peter's Church</h2>
            <h3 className="sub_titles">The Ceremony</h3>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              St. Peter's Church is a serene and historic gem tucked away on the
              picturesque island of Brač, Croatia.
              <br />
              <br />
              Perched on a gentle hill overlooking the surrounding landscape, this
              charming little church offers a peaceful and intimate setting,
              making it the perfect location for the beginning of a beautiful new
              chapter.
              <br />
              <br />
              With its timeless architecture, stone walls, and tranquil
              surroundings, it provides an atmosphere that feels both sacred and
              romantic — just what we envisioned for our special day.
            </p>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="venue_grid saba" variants={containerVariants}>
          <motion.div className="venue_i" variants={itemVariants}>
            <h2 className="venue_title">Mali Raj Restaurant</h2>
            <h3 className="sub_titles">The Reception Dinner</h3>
            <motion.div className="line" variants={lineVariants} />
            <p className="sub_paragraph sha">
              After the ceremony, join us at Mali Raj, one of Brač's most charming
              dining spots near Zlatni Rat Beach.
              <br />
              <br />
              Surrounded by olive trees and coastal views, it's the perfect place
              to wine, dine, and celebrate. Enjoy refreshing welcome drinks, a
              delicious Dalmatian-inspired dinner, and a slice of our wedding
              cake—all crafted with fresh, local ingredients.
              <br />
              <br />
              As the night unfolds, a DJ will set the mood, and we'll dance under
              the stars until late. With its cozy ambiance and scenic setting,
              Mali Raj truly lives up to its name—"Little Paradise." We're so
              excited to share this special place and moment with you!
            </p>
          </motion.div>
          <motion.div className="venue_i" variants={imageVariants}>
            <img src={mali} alt="" className="venue_io" />
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.h2 className="wediing" variants={itemVariants}>
          Wedding Menu at Mali Raj
        </motion.h2>
        <motion.div className="line" variants={lineVariants} />
      </AnimatedSection>

      <AnimatedSection>
        <motion.div className="card_grid moldo" variants={containerVariants}>
          {ceremonyDatas.map((item) => (
            <motion.div 
              key={item.id} 
              className="sub_card"
              variants={cardVariants}
            >
              <h3 className="sub_title nk">{item.title}</h3>
              <p className="sub_paragraph nk">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default CeremonyReception;