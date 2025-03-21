// components/Projects.tsx
"use client";
import Image from "next/image";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    href: string,
}

const Projects: React.FC = () => {
    // Sample project data
    const projects: Project[] = [
        {
            id: 1,
            title: "NuScene VQA",
            description: "Application of Visual Question Answering concepts to NuScenes dataset, a large-scale benchmark for autonomous driving scenarios.Developing and implementing methods to improve the accuracy of one of the parameters of the official Benchmark.",
            imageSrc: "/ip.png",
            href:"https://github.com/sujalsoni26/IP_VQA",
        },
        {
            id: 5,
            title: "Visa Predictor",
            description: "An ML model for predicting H1-B visa approval outcomes. The dataset was taken from US Labor official website and was processed. The predictions were made with an accuracy of 65%.",
            imageSrc: "/visa.png",
            href: "https://github.com/sujalsoni26/Visa-Acceptance-Prediction",
        },
        {
            id: 2,
            title: "Veda",
            description: "An online medicine delivery website which keeps track of users, medicines, vendors etc using a SQL database. ",
            imageSrc: "/veda.jpg",
            href:"https://github.com/Karan54820/Online-Medicine-Store-Vedaa",
        },
        {
            id: 3,
            title: "Stick Hero",
            description: "A video game made using JavaFX and SceneBuilder full of challenges and animations and sounds that adds to the thrill. ",
            imageSrc: "/stickhero.png",
            href:"https://github.com/Dushyant98474839/Stick-Hero-Game",
        },
        {
            id: 4,
            title: "DnD ChatBot",
            description: "The AI Dungeon Master is a chatbot that generates dynamic, interactive storytelling experiences. This is achieved using a combination of Large Language Models (LLMs), vector databases for memory, and Flask for API interactions.",
            imageSrc: "/dnd.png",
            href:"https://github.com/Dushyant98474839/chat-system"
        },

        {
            id: 6,
            title: "Dream Dot (On Going)",
            description: "A secure social media platform with p2p marketplace and chat functionality using Socket.io and MERN",
            imageSrc: "/projects/chat.jpg",
            href: "https://github.com/Dushyant98474839/chat-system",
        },
    ];

    return (
        <section className="py-16 px-8 text-white z-10" id="projects">
            
                <div className="w-full mx-auto">
                    <motion.div variants={slideInFromRight(0.8)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="mb-8 text-center">
                            <div className='mb-8'>
                                <span
                                    className="text-6xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">My Projects
                                </span>
                            </div>
                            <p className="text-gray-100 leading-relaxed">
                                Here's some of my work.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={slideInFromLeft(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                    {/* Scrollable Carousel Container */}
                    
                    <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-3">
                        <div className="flex gap-8 w-max px-8">
                            {projects.map((project) => (
                                <a href={project.href} target="_blank" rel="noopener noreferrer">


                                <div
                                    key={project.id}
                                    className="relative flex-none w-[300px] sm:w-[600px] bg-[rgba(85,193,247,0.22)] backdrop-blur-xs border border-cyan-500 rounded-lg shadow-md overflow-hidden snap-start group transition-all duration-500 transform hover:-translate-y-3 hover:shadow-lg"
                                    >
                                    {/* Image */}
                                    <Image
                                        src={project.imageSrc}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-105"
                                        />

                                    {/* Overlay Container */}
                                    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-300 px-4">{project.description}</p>
                                    </div>
                                </div>
                                </a>
                            ))}
                        </div>

                    </div>
            </motion.div>
                </div>

        </section>
    );
};

export default Projects;