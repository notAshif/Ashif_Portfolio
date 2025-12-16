import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
    { label: "home", icon: "bx bx-home", href: "#home" },
    { label: "about", icon: "bx bx-user", href: "#about-us" },
    { label: "projects", icon: "bx bx-briefcase", href: "#projects" },
    { label: "skills", icon: "bx bx-award", href: "#skills" },
    { label: "contact", icon: "bx bx-message", href: "#contact" },
];

function Navbar({ showContent, scrollToSection }) {
    useEffect(() => {
        if (!showContent) return;

        const initScrollTriggers = () => {
            // Set initial navbar style
            gsap.set(".navbar", {
                backgroundColor: "#B6B09F",
                color: "#000000"
            });

            const triggers = [
                {
                    trigger: ".main-section",
                    enterColor: "#000000",
                    enterText: "#B6B09F",
                    leaveColor: "#B6B09F",
                    leaveText: "#000000"
                },
                {
                    trigger: ".about-us",
                    enterColor: "#B6B09F",
                    enterText: "#000000",
                    leaveColor: "#000000",
                    leaveText: "#B6B09F"
                },
                {
                    trigger: ".project-section",
                    enterColor: "#000000",
                    enterText: "#B6B09F",
                    leaveColor: "#B6B09F",
                    leaveText: "#000000"
                },
                {
                    trigger: ".skill-section",
                    enterColor: "#B6B09F",
                    enterText: "#000000",
                    leaveColor: "#000000",
                    leaveText: "#B6B09F"
                },
                {
                    trigger: ".contact-section",
                    enterColor: "#000000",
                    enterText: "#B6B09F",
                    leaveColor: "#B6B09F",
                    leaveText: "#000000"
                }
            ];

            const createdTriggers = triggers.map(({ trigger, enterColor, enterText, leaveColor, leaveText }) =>
                ScrollTrigger.create({
                    trigger,
                    start: "top 10%",
                    end: "bottom bottom",
                    scroller: ".smooth-wrapper",
                    scrub: 0.5,
                    onEnter: () => {
                        gsap.to(".navbar", {
                            backgroundColor: enterColor,
                            color: enterText,
                            duration: 0.1,
                            overwrite: true,
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(".navbar", {
                            backgroundColor: leaveColor,
                            color: leaveText,
                            duration: 0.1,
                            overwrite: true,
                        });
                    }
                })
            );

            return () => {
                createdTriggers.forEach(trigger => trigger.kill());
            };
        };

        requestAnimationFrame(() => {
            const cleanup = initScrollTriggers();
            return () => {
                cleanup();
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        });
    }, [showContent]);

    return (
        <div className="navbar flex fixed top-0 left-0 w-full z-50 items-center justify-between p-4 sm:p-7 tracking-tighter bg-[#B6B09F] text-[#000000] transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="lines flex flex-col gap-[3px] sm:gap-[5px] ml-1 sm:ml-3">
                    <div className="line w-8 sm:w-15 h-1 sm:h-2 bg-current"></div>
                    <div className="line w-5 sm:w-8 h-1 sm:h-2 bg-current"></div>
                    <div className="line w-3 sm:w-5 h-1 sm:h-2 bg-current"></div>
                </div>
                <h1 className="text-xl sm:text-3xl font-general-sans font-extrabold hover:scale-110 transform duration-300">
                    Ashif
                </h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center text-[13px] space-x-7 cursor-none">
                {navItems.map((item, index) => (
                    <HoverNavItem key={index} {...item} scrollToSection={scrollToSection} />
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
                <a
                    href="#contact"
                    className="relative group inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-[#000000] border border-[#000000] text-[#B6B09F] hover:text-[#000000] overflow-hidden"
                >
                    <span className="relative z-10">Let's Talk</span>
                    <span className="absolute inset-0 bg-[#B6B09F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                </a>
            </div>
        </div>
    );
}

function HoverNavItem({ label, icon, href, scrollToSection }) {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);
    const iconRef = useRef(null);

    const handleMouseEnter = () => {
        if (!icon || isVisible) return;
        gsap.to(textRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.3,
            onComplete: () => {
                setIsVisible(true);
                gsap.fromTo(iconRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
            },
        });
    };

    const handleMouseLeave = () => {
        if (!icon || !isVisible) return;
        gsap.to(iconRef.current, {
            opacity: 0,
            y: 10,
            duration: 0.3,
            onComplete: () => {
                setIsVisible(false);
                gsap.fromTo(textRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
            },
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (scrollToSection) {
            scrollToSection(href);
        }
    };

    return (
        <li
            className="font-general-sans text-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={href} onClick={handleClick} className="cursor-pointer">
                <span ref={textRef} style={{ display: isVisible ? "none" : "inline-block" }}>
                    {label}
                </span>
                <span ref={iconRef} style={{ display: isVisible ? "inline-block" : "none" }} className="text-xl">
                    <i className={icon}></i>
                </span>
            </a>
        </li>
    );
}

export default Navbar;
