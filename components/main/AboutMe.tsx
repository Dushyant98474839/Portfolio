// components/AboutMe.tsx
"use client";
import Image from 'next/image';
import { useState } from 'react';
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";

interface TabContent {
    education: string[],
    achievements: string[];
    roles: string[];
    hobbies: string[];
}

const AboutMe: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'achievements' | 'roles' | 'hobbies'>('education');

    const tabContent: TabContent = {
        education: [
            `Saint Joseph's School`,
            // `12th: Chand Ram Public School`,
            'B.Tech in Computer Science and Design @IIIT-Delhi',
            // 'M.Tech in Computer Science Engineering',
        ],
        achievements: [
            
        ],
        roles: [
            'Mar,23 – Jan,24: Member of ECELL Design and Events Team',
            'Dec,22 – Aug,23: Member of Electroholics',
            'Jul,23 – Aug,23: Member of OT for RoboWars (Flagship Event of ESYA)'
        ],
        hobbies: [
            'My interests are in Cosmos, History and World Affairs.' ,
            'My Hobbies include Badminton, Reading and Video Games.'
        ]
    };

    return (
        <section id="about-me" className="py-16 px-8 mt-96 text-white z-10" >
            <div className="max-w-6xl mx-auto flex flex-wrap gap-16 z-[10]">
                <motion.div
                    variants={slideInFromLeft(0.8)}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Side - Image */}

                    <div className="flex-1 min-w-[300px]">
                        <Image
                            src="/pic3.png"
                            alt="Profile Picture"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover shadow-[3px_2px_5px_rgba(85,193,247,0.6)]"

                        />
                    </div>
                </motion.div>



                {/* Right Side - Content */}

                <div className="flex-2 min-w-[300px]">
                    <motion.div
                        variants={slideInFromRight(0.8)}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                    >
                        {/* Short Description */}
                        <div className="mb-8">
                            <div className='mb-4'>
                                <span
                                    className="text-6xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">About Me
                                </span>
                            </div>
                            <p className="text-gray-100 leading-relaxed">
                                I'm a passionate web developer having experience in creating
                                responsive and user-friendly applications. I specialize in modern JavaScript
                                frameworks and love turning ideas into reality through code. I also like to work in AI/ML domain and try to integrate the best of both worlds.
                            </p>
                        </div>

                        {/* Slider Menu */}
                        <div className="bg-[rgba(85,193,247,0.22)] backdrop-blur-xs p-4 rounded-lg shadow-md">

                            <div className="flex flex-wrap justify-center border-b-2 border-gray-200/20 mb-4">
                                {['education', 'achievements', 'roles', 'hobbies'].map((tab, index) => (
                                    <button key={index}
                                        className={`px-6 py-3 transition-all cursor-pointer ${activeTab === tab
                                            ? 'text-blue-400 border-b-2 border-blue-400'
                                            : 'text-gray-100 hover:text-white'
                                        }`}
                                        onClick={() => setActiveTab(tab as "education" | "achievements" | 'roles' | "hobbies")}

                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                                {/* <button
                                    className={`px-6 py-3 transition-all cursor-pointer ${activeTab === 'education'
                                            ? 'text-blue-400 border-b-2 border-blue-400'
                                            : 'text-gray-100 hover:text-white'
                                        }`}
                                    onClick={() => setActiveTab('education')}

                                >
                                    Education
                                </button>
                                <button
                                    className={`px-6 py-3 transition-all cursor-pointer ${activeTab === 'achievements'
                                            ? 'text-blue-400 border-b-2 border-blue-400'
                                            : 'text-gray-100 hover:text-white'
                                        }`}
                                    onClick={() => setActiveTab('achievements')}
                                >
                                    Achievements
                                </button>
                                <button
                                    className={`px-6 py-3 transition-all cursor-pointer ${activeTab === 'offices'
                                            ? 'text-blue-400 border-b-2 border-blue-400'
                                            : 'text-gray-100 hover:text-white'
                                        }`}
                                    onClick={() => { console.log('offices'); setActiveTab('offices') }}
                                >
                                    Offices
                                </button>
                                <button
                                    className={`px-6 py-3 transition-all cursor-pointer ${activeTab === 'hobbies'
                                            ? 'text-blue-400 border-b-2 border-blue-400'
                                            : 'text-gray-100 hover:text-white'
                                        }`}
                                    onClick={() => setActiveTab('hobbies')}

                                >
                                    Hobbies
                                </button> */}
                            </div>

                            {/* Tab Content with Vertical Line and Dots */}
              <div className="relative">
                <ul className="list-none p-0 pl-6 relative">
                  {tabContent[activeTab].map((item, index) => (
                    <li
                      key={index}
                      className="py-2 text-gray-100 relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                  {/* Vertical Line */}
                  <span className="absolute left-[3] top-2 bottom-2 w-px bg-blue-400" />
                </ul>
              </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;