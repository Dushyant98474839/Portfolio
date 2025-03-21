"use client";
import React from "react";
import { skills } from "@/constants/skills";

import { IconCloudDemo } from "../sub/IconCloud";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";

interface SkillItem {
    name: string;
    image: string;
    fluency: string;
}

interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col z-10 items-center mt- relative py-12"
            style={{ pointerEvents: 'auto' }} // Ensure pointer events are enabled
        >
            <div className="w-full flex flex-col items-center px-16">
                <div className="block sm:flex flex-row items-center gap-4">
                    <div className="block sm:flex flex-col gap-4">
                        <motion.div
                            variants={slideInFromLeft(0.25)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{
                                position: 'relative',
                                zIndex: 20, // Higher z-index to prevent overlap issues
                            }}
                        >
                            <span>
                                <span className="px-16  text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">

                                    {" "}
                                    Skills{" "}
                                </span>
                            </span>


                            <p className="px-16 mt-4 text-lg text-gray-100 sm:text-md">
                                Here are some of my skills on which I have been working for the past 3 years.
                            </p>
                        </motion.div>
                    </div>
                    {/* Isolated IconCloudDemo container */}
                    <div className="relative w-full max-w-lg mb-12 pointer-events-auto">
                        <motion.div
                            variants={slideInFromRight(0.25)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{
                                position: 'relative',
                                zIndex: 20, // Higher z-index to prevent overlap issues
                            }}
                        >
                            <IconCloudDemo />
                        </motion.div>
                    </div>
                </div>

                    <h1 className="text-gray-100 mb-8 z-20">Hover to check Fluency !</h1>
                {/* Skills Cards */}
                <div className="flex flex-wrap justify-center gap-12">
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute top-[300px]  h-half w-full z-[0] opacity-[0.3] object-cover "
                    >
                        {/* <source src="/blackhole.webm" type="video/webm" /> */}
                        <source src="/cards-video.webm" type="video/webm" />
                    </video>
                    {skills.map((skill: SkillCategory, index: number) => (
                        <motion.div
                            key={`skill-${index}`}
                            variants={(index % 2 == 0 ? slideInFromLeft : slideInFromRight)(0.25)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        // style={{
                        //     position: 'relative',
                        //     // zIndex: 20, // Higher z-index to prevent overlap issues
                        // }}
                        >
                            {/* // <Tilt key={`skill-${index}`}> */}

                            <div className="w-full max-w-lg h-full bg-[rgba(85,193,247,0.22)] backdrop-blur-xs border border-gray-500 shadow-lg rounded-xl p-6 text-white pointer-events-auto">
                                <h3 className="text-2xl font-semibold text-center mb-4 text-gray-300">
                                    {skill.title}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {skill.skills.map((item: SkillItem, index_x: number) => (
                                        <div key={`skill-x-${index_x}`} className="relative group">
                                            {/* Skill Card */}
                                            <div className="flex items-center gap-2 border border-gray-500 rounded-lg px-4 py-2 text-gray-300 text-sm relative z-10">
                                                <img src={item.image} alt={item.name} className="w-3 h-3 sm:w-6 sm:h-6" />
                                                {item.name}
                                            </div>

                                            {/* Overlay with Fluency (Hidden by Default) */}
                                            <div className="z-20 absolute inset-0 bg-cyan-600 text-white-900 font-semibold flex items-center justify-center rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                
                                                {item.fluency}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            {/* // </Tilt> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;