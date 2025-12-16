import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Page1 from "./components/Main";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Projects from "./components/Projects";
import Skills from "./components/SkillPage";
import Contact from "./components/Contact";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [showContent, setShowContent] = useState(false);
  const smootherRef = useRef(null);

  useEffect(() => {
    if (showContent) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        if (!smootherRef.current) {
          // Kill any existing ScrollSmoother
          const existing = ScrollSmoother.get();
          if (existing) existing.kill();
          
          // Create new ScrollSmoother
          smootherRef.current = ScrollSmoother.create({
            wrapper: ".smooth-wrapper",
            content: ".smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: true,
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [showContent]);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const smoother = smootherRef.current;
    if (smoother) {
      const target = document.querySelector(sectionId);
      if (target) {
        smoother.scrollTo(target, true, "top 100px");
      }
    } else {
      // Fallback for regular scrolling
      const target = document.querySelector(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Only show navbar after transition animation completes */}
      {showContent && <Navbar showContent={showContent} scrollToSection={scrollToSection} />}
      <CustomCursor />
      <div className="smooth-wrapper custom-scrollbar">
        <div className="smooth-content">
          <Page1 setShowContent={setShowContent} />
          {showContent && <AboutUs />}
          {showContent && <Projects />}
          {showContent && <Skills />}
          {showContent && <Contact />}
        </div>
      </div>
    </>
  );
}

export default App;