import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import CeremonyReception from "./pages/ceremony/CeremonyReception";
import Footer from "./components/footer/Footer";
import Accomondation from "./pages/accomonadation/Accomondation";
import Lenis from "@studio-freight/lenis";
import { FaArrowUp } from "react-icons/fa";
import Explore from "./pages/explore/Explore";
import Rsvp from "./pages/rsvp/Rsvp";

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);

    // For Lenis smooth scroll, we need to reset its scroll position too
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
};

// ScrollToTopButton component
const ScrollToTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className={`scroll-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ceremony-reception" element={<CeremonyReception />} />
          <Route path="/accomondation" element={<Accomondation />} />
          <Route path="/Explore-Croatia" element={<Explore />} />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
        <Footer />
        {/* <ScrollToTopButton className="balti" /> */}
      </div>
    </Router>
  );
};

export default App;
