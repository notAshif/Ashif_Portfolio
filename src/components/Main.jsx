import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Page1({ setShowContent }) {
  const svgRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(
      ".vi-mask-group",
      {
        scale: 10,
        duration: 2,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onComplete: () => {
          if (svgRef.current) {
            svgRef.current.remove();
          }
          document.body.style.overflow = "auto";
          setShowContent(true);
        },
      },
      "<"
    );

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: 1.2,
      ease: "Expo.easeInOut",
    });

    const onMouseMoveMain = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%` });
    };

    const onMouseMoveMain2 = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main2 .text2", { x: `${xMove * 0.4}%` });
    };

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", onMouseMoveMain);

    const main2 = document.querySelector(".main2");
    main2?.addEventListener("mousemove", onMouseMoveMain2);

    return () => {
      main?.removeEventListener("mousemove", onMouseMoveMain);
      main2?.removeEventListener("mousemove", onMouseMoveMain2);
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, [setShowContent]);

  return (
    <>
      {/* Splash Animation */}
      <div
        ref={svgRef}
        className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#B6B09F] flex items-center justify-center"
      >
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  A
                </text>
              </g>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#000000" mask="url(#viMask)" />
        </svg>
      </div>

      {/* Main Content */}
      <div id="home" className="main w-full rotate-[-10deg] scale-[1.7]">
        <div className="landing relative w-full h-screen bg-[#B6B09F]">
          <div className="imagesdiv relative w-full h-screen flex items-center justify-center">
            {/* Smaller background box on smaller screens */}
            <div className="bg w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] bg-[url('/bg.svg')] bg-cover bg-center rounded-xl shadow-xl"></div>

            {/* Larger responsive text */}
            <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-general-sans text-center">
                HEY, I'M Ashif
              </h1>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-general-sans text-transparent text-center"
                style={{ WebkitTextStroke: "2px black" }}
              >
                HEY, I'M Ashif
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-general-sans text-black opacity-70 text-center">
                HEY, I'M Ashif
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="main-section bg-[#030303] min-h-screen flex items-center justify-center p-8">
        <div className="main2 text-[#B6B09F] w-full max-w-6xl">
          <span className="text2 block text-3xl md:text-5xl lg:text-7xl xl:text-7xl tracking-tight text-center leading-tight font-light">
            I create digital experiences and user interfaces that inspire and connect
            people. Bringing joy through design and development is what drives me. These
            passions fuel everything I build.
          </span>
        </div>
      </div>
    </>
  );
}

export default Page1;
