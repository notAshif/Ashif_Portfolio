import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import me from "../assets/me.jpeg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const paragraph1Ref = useRef(null);
    const paragraph2Ref = useRef(null);
    const decorativeElementsRef = useRef(null);
    const decorativeRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const header = headerRef.current;
        const image = imageRef.current;
        const title = titleRef.current;
        const paragraph1 = paragraph1Ref.current;
        const paragraph2 = paragraph2Ref.current;
        const decorativeElements = decorativeElementsRef.current;
        const decorative = decorativeRef.current;

        gsap.set([header, image, title, paragraph1, paragraph2, decorativeElements], {
            y: 100,
            opacity: 0
        });

        gsap.set(decorative, {
            scale: 0,
            rotation: -180,
            opacity: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                scroller: ".smooth-wrapper"
            }
        });

        tl.to(header, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })
            .to(image, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1.2,
                ease: "back.out(1.7)"
            }, "-=0.6")
            .to(title, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8")
            .to(paragraph1, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")
            .to(paragraph2, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5")
            .to(decorativeElements, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.4")
            .to(decorative, {
                scale: 1,
                rotation: 0,
                opacity: 0.1,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)"
            }, "-=1");

        const imageHover = () => {
            gsap.to(image, {
                scale: 1.05,
                rotation: 2,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const imageLeave = () => {
            gsap.to(image, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const titleHover = () => {
            gsap.to(title, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const titleLeave = () => {
            gsap.to(title, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        image?.addEventListener("mouseenter", imageHover);
        image?.addEventListener("mouseleave", imageLeave);
        title?.addEventListener("mouseenter", titleHover);
        title?.addEventListener("mouseleave", titleLeave);

        return () => {
            image?.removeEventListener("mouseenter", imageHover);
            image?.removeEventListener("mouseleave", imageLeave);
            title?.removeEventListener("mouseenter", titleHover);
            title?.removeEventListener("mouseleave", titleLeave);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            id="about-us"
            ref={sectionRef}
            className="about-us bg-[#B6B09F] min-h-screen py-20 px-8 relative overflow-hidden"
        >
            <div className="text-center mb-16">
                <h1
                    ref={headerRef}
                    className="text-6xl md:text-7xl font-bold text-[#6a763a] tracking-wider"
                >
                    <span>&#x2022;</span> ABOUT ME <span>&#x2022;</span>
                </h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="flex justify-center lg:justify-start">
                    <div
                        ref={imageRef}
                        className="w-80 h-96 bg-gradient-to-br from-green-900 via-green-700 to-green-500 rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer transition-shadow duration-300 hover:shadow-3xl"
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <img src={me} alt="Me" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                        <div className="absolute inset-0 border-2 border-white border-opacity-20 rounded-3xl"></div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold text-black leading-tight cursor-pointer"
                    >
                        A brief intro, who am I?
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p
                            ref={paragraph1Ref}
                            className="tracking-tight"
                        >
                            I am a fresher full stack developer with a passion for creating user-friendly and visually appealing web applications.
                            I specialize in front-end development using React, and Tailwind CSS, and back-end development using Node.js and Express.js with MongoDB.
                            I am a quick learner and a team player, and I am always looking for new challenges and opportunities to grow and improve my skills.
                        </p>

                        <p ref={paragraph2Ref}>
                            When I am not developing or designing, I love to play video games in free time, like valorant.
                            Sometimes hangout with my friends and family.
                            And learning from my friends.
                            I also love to listen to music during game play or coding.
                        </p>
                    </div>

                    <div
                        ref={decorativeElementsRef}
                        className="flex items-center gap-4 pt-6"
                    >
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        <div className="w-4 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>

            <div
                ref={decorativeRef}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none"
            >
                <div className="w-32 h-32 border-2 border-black rounded-full"></div>
            </div>

            <div className="absolute left-10 bottom-20 opacity-5 pointer-events-none">
                <div className="w-20 h-20 border border-black rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
        </section>
    );
};

export default AboutUs;