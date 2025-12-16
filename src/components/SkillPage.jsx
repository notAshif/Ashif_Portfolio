import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillPage() {
  const headingRef = useRef(null);
  const leftheadingRef1 = useRef(null);
  const leftsmallRef1 = useRef(null);
  const leftheadingRef2 = useRef(null);
  const leftsmallRef2 = useRef(null);
  const rightheadingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skill-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        scroller: ".smooth-wrapper",
      },
    });

    const heading = headingRef.current;
    const leftheading1 = leftheadingRef1.current;
    const leftsmall1 = leftsmallRef1.current;
    const leftheading2 = leftheadingRef2.current;
    const leftsmall2 = leftsmallRef2.current;
    const rightheading = rightheadingRef.current;

    gsap.set(
      [heading, leftheading1, leftsmall1, leftheading2, leftsmall2, rightheading],
      {
        y: 100,
        opacity: 0,
      }
    );

    tl.to(heading, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(leftheading1, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(leftsmall1, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(leftheading2, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(leftsmall2, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(rightheading, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });

    return () => tl.kill();
  }, []);

  return (
    <section
      id="skills"
      className="skill-section bg-[#B6B09F] text-black min-h-screen px-6 md:px-10 py-20 md:py-32"
    >
      <h1
        ref={headingRef}
        className="flex items-center justify-center text-[#6a763a] text-4xl md:text-6xl lg:text-7xl font-bold"
      >
        <span>•</span>&nbsp;Skills&nbsp;<span>•</span>
      </h1>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-20">
          <div>
            <h2
              ref={leftheadingRef1}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 border-b-4 border-[#88827c] inline-block pb-2"
            >
              my expertise.
            </h2>
            <p
              ref={leftsmallRef1}
              className="text-lg sm:text-xl md:text-2xl text-[#2f2e2b] mt-4 max-w-2xl"
            >
              I specialize in designing and developing responsive, user-centric websites and apps.
              With a strong foundation in both design and frontend technologies, I bring ideas to life
              through code, creativity, and attention to detail.
            </p>
          </div>

          <div>
            <h2
              ref={leftheadingRef2}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 border-b-4 border-[#88827c] inline-block pb-2"
            >
              my digital stack.
            </h2>
            <p
              ref={leftsmallRef2}
              className="text-lg sm:text-xl md:text-2xl text-[#2f2e2b] mt-4 max-w-2xl"
            >
              I work with modern tools and frameworks to build powerful experiences.
              My stack is constantly evolving as I explore new technologies and approaches
              to deliver innovative and scalable digital solutions.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          ref={rightheadingRef}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#d7d1c0] space-y-3 ml-40"
        >
          <p className="text-[#88827c]">Web Development</p>
          <p className="text-[#88827c]">Web Design</p>
          <p className="text-[#88827c]">Wireframing</p>
          <p className="text-[#88827c]">UI/UX Design</p>
          <p className="text-[#88827c] mb-8">Branding</p>

          <p className="opacity-50">JavaScript</p>
          <p className="opacity-50">Node.js / Express / MongoDB</p>
          <p className="opacity-50">Tailwind CSS</p>
          <p className="opacity-50">Figma</p>
          <p className="opacity-50">GSAP</p>
          <p className="opacity-50">React</p>
        </div>
      </div>
    </section>
  );
}

export default SkillPage;
