import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./rsvp.css";

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

const formItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
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

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_rx0paix",
  TEMPLATE_ID: "template_rxgj897",
  PUBLIC_KEY: "_vTTWOQvcvvV5S2sB",
};

const Rsvp = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAttending, setIsAttending] = useState(null);

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.attendance) {
      newErrors.attendance = "Please select an option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAttendanceChange = (e) => {
    setIsAttending(e.target.value === "yes");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      attendance: e.target.attendance.value,
      diet: isAttending ? e.target.diet?.value : "Not applicable (not attending)",
    };

    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("RSVP sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
          setErrors({});
          setIsAttending(null);
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send RSVP. Please try again.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="ceremony">
      <div className="opp">
        <ToastContainer />
      </div>

      <AnimatedSection>
        <motion.h2 className="cer" variants={itemVariants}>
          RSVP & Dietary Information
        </motion.h2>
        <motion.p className="cer_p" variants={itemVariants}>
          Kindly confirm your attendance and let us know of any dietary
          requirements. You can RSVP by filling out the form below or by
          emailing us at{" "}
          <a href="mailto:andyroxywedding@gmail.com">
            andyroxywedding@gmail.com
          </a>
          . We look forward to celebrating with you!
        </motion.p>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div 
          className="form_section" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <form className="rsvp_form" ref={form} onSubmit={sendEmail}>
            <motion.h2 className="lod" variants={formItemVariants}>
              Contact Information
            </motion.h2>
            <motion.div className="line" variants={lineVariants} />

            <motion.div className="form_group" variants={formItemVariants}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <motion.span 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.name}
                </motion.span>
              )}
            </motion.div>

            <motion.div className="form_group" variants={formItemVariants}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <motion.span 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.email}
                </motion.span>
              )}
            </motion.div>

            <motion.div className="form_group" variants={formItemVariants}>
              <label htmlFor="attendance">Will you attend?</label>
              <select
                id="attendance"
                name="attendance"
                className={errors.attendance ? "error" : ""}
                onChange={handleAttendanceChange}
                defaultValue=""
                required
              >
                <option value="">-- Please select --</option>
                <option value="yes">Yes, can't wait!</option>
                <option value="no">Sorry, can't make it</option>
              </select>
              {errors.attendance && (
                <motion.span 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.attendance}
                </motion.span>
              )}
            </motion.div>

            {isAttending && (
              <motion.div
                className="form_group"
                variants={formItemVariants}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="diet">Dietary Requirements (if any)</label>
                <textarea id="diet" name="diet" rows="3"></textarea>
              </motion.div>
            )}

            <motion.div 
              className="dor"
              variants={formItemVariants}
            >
              <motion.button
                type="submit"
                className="rsvp"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send RSVP"
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </AnimatedSection>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Rsvp;