import React, { useEffect, useRef } from "react";
import fastedchat from "../assets/fastedchat.png";
import memecoin from "../assets/memecoin.png";
import movie from "../assets/movie.png";
import suhsiman from "../assets/sushiman.png";
import vimai from "../assets/vimai.png";

const ProjectCard = React.forwardRef(({ project, colorClass, borderColor }, ref) => (
    <div ref={ref} className="relative group">
        <div className={`relative ${colorClass} border-1 rounded-3xl h-64 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}>
            <div className="text-center object-contain w-fuill h-full overflow-hidden rounded-2xl">
                <img src={project.image} alt={project.title} />
            </div>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <div className={`w-10 h-10 border-2 ${borderColor} rounded-full flex items-center justify-center transform rotate-45`} style={{ color: project.textColor }}>
                    <a href={project.link} className="text-sm">→</a>
                </div>
            </div>
        </div>

        <div className="flex gap-2 mt-4">
            {project.tags.map((tag, index) => (
                <span key={index} className={`text-xs px-3 py-1 border ${borderColor} rounded-full`} style={{ color: project.textColor }}>
                    {tag}
                </span>
            ))}
        </div>
    </div>
));

const Projects = () => {
    const headingRef = useRef(null);
    const featureRef = useRef(null);
    const cardRefs = useRef([]);

    const projects = [
        {
            title: "MEMECOIN Web Design",
            category: "Web Design · Frontend",
            description: "A modern crypto landing platform built with React and Node.js, designed to promote a memecoin with a bold visual identity, smooth call-to-action flow, and seamless links to on-chain tools like DEXTools. The interface is fully responsive, optimized for mobile and desktop, and blends Web3 culture with clean, high-performance frontend engineering.",
            tags: ["React", "CSS"],
            technologies: ["React", "TailwindCSS"],
            textColor: "#e74c3c",
            colorClass: "bg-red-50",
            borderColor: "border-red-300",
            link: "https://memecoin-rho.vercel.app/",
            image: memecoin
        },
        {
            title: "MovieVerse",
            category: "Web App · UI/UX",
            description: "A modern movie streaming and discovery platform featuring a cinematic interface, fast search across a curated movie library, and a fully responsive design optimized for seamless viewing on any device.",
            tags: ["React", "UI/UX"],
            technologies: ["React", "Node.js", "REST API", "TailwindCSS",],
            textColor: "#3498db",
            colorClass: "bg-blue-50",
            borderColor: "border-blue-300",
            link: "https://movie-9vyqocetn-notashifs-projects.vercel.app/",
            image: movie
        },
        {
            title: "SUSHIMAN – Restaurant Website",
            category: "Landing Page · UI/UX",
            description: "A modern Japanese restaurant landing page showcasing traditional cuisine with a clean, elegant layout, smooth interactions, and a responsive design optimized for all devices.",
            tags: ["UI/UX", "Frontend"],
            technologies: ["HTML", "CSS"],
            textColor: "#f39c12",
            colorClass: "bg-yellow-50",
            borderColor: "border-yellow-300",
            link: "http://sushiman-snowy.vercel.app/",
            image: suhsiman
        },
        {
            title: "VimAI – AI Code Editor",
            category: "AI Tool · Developer Productivity",
            description: "An AI-powered terminal-based code editor that enhances developer productivity through intelligent code suggestions, contextual explanations, and a distraction-free Vim-style editing experience.",
            tags: ["Python", "AI"],
            technologies: ["Python", "AI APIs", "Terminal UI", "REST API"],
            textColor: "#9b59b6",
            colorClass: "bg-purple-50",
            borderColor: "border-purple-300",
            link: "#",
            image: vimai      
        }

    ];

    useEffect(() => {
        // Simple CSS-based animations since GSAP isn't available in this environment
        const animateElement = (element, delay = 0) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
            }
        };

        // Animate heading
        animateElement(headingRef.current, 100);

        // Animate featured project
        animateElement(featureRef.current, 300);

        // Animate cards with stagger
        cardRefs.current.forEach((card, index) => {
            if (card) {
                animateElement(card, 500 + (index * 200));
            }
        });

    }, []);

    return (
        <section id="projects" className="project-section flex flex-col items-center justify-center bg-black py-20 px-6" style={{ cursor: 'none' }}>
            <div className="w-full max-w-6xl text-center mb-12">
                <h1 ref={headingRef} className="text-6xl md:text-8xl text-[#B6B09F] font-extrabold tracking-wider">
                    <span>•</span> Projects <span>•</span>
                </h1>
            </div>

            <div ref={featureRef} className="relative group w-full max-w-6xl rounded-xl overflow-hidden shadow-md mb-16">
                <img
                    src={fastedchat}
                    alt="IBGroup Vietnam Website"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="w-12 h-12 border-2 border-[#B6B09F] rounded-full flex items-center justify-center transform rotate-45 text-[#B6B09F] bg-black/20 backdrop-blur-sm">
                        <a href="https://fastedchat.vercel.app/" className="text-lg">→</a>
                    </div>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex flex-wrap gap-3 mb-4">
                        <span className="text-xs text-white border border-[#B6B09F] px-3 py-1 rounded-full">2023</span>
                        {["HTML", "TailwindCSS", "JavaScript", "Figma"].map((tech) => (
                            <span key={tech} className="text-xs text-white border border-[#B6B09F] px-3 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                        IBGROUP VIETNAM WEBSITE
                    </h2>
                    <p className="text-sm text-white mt-1 tracking-tight opacity-80">
                        Web Design · Frontend Development
                    </p>
                </div> */}
            </div>

            <div className="w-full max-w-6xl space-y-16">
                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2">
                            <ProjectCard
                                ref={(el) => {
                                    if (el) cardRefs.current[index] = el;
                                }}
                                project={project}
                                colorClass={project.colorClass}
                                borderColor={project.borderColor}
                            />
                        </div>

                        <div className="w-full md:w-1/2 text-white">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-6xl font-bold text-[#B6B09F] opacity-20">
                                        0{index + 2}
                                    </span>
                                    <div className="h-px bg-[#B6B09F] flex-1 opacity-30"></div>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-[#B6B09F] tracking-wide">
                                    {project.title.toUpperCase()}
                                </h3>

                                <p className="text-lg text-white/80 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="text-sm px-4 py-2 border border-[#B6B09F] rounded-full text-[#B6B09F] hover:bg-[#B6B09F] hover:text-black transition-all duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button className="group mt-6 flex items-center gap-3 text-[#B6B09F] font-semibold tracking-wide hover:gap-4 transition-all duration-300">
                                    <span>VIEW PROJECT</span>
                                    <div className="w-8 h-8 border border-[#B6B09F] rounded-full flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                                        <a href={project.link} className="text-sm transform -rotate-45 group-hover:-rotate-90 transition-transform duration-300">→</a>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <button className="group relative px-8 py-4 border-2 border-[#B6B09F] text-[#B6B09F] font-semibold tracking-wide transition-all duration-300 hover:bg-[#B6B09F] hover:text-black">
                    <a href="https://github.com/notAshif" className="relative z-10">VIEW ALL PROJECTS</a>
                    <div className="absolute inset-0 bg-[#B6B09F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
            </div>
        </section>
    );
};

export default Projects;