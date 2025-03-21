"use client";
import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Socials } from "@/constants";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formSpreeUrl = "https://formspree.io/f/xpwppoay"; // Replace with your Formspree ID
  
    try {
      const response = await fetch(formSpreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  return (
    <section id="contact" className="z-10 mt-48">
      <div className="font-sans w-full px-8 sm:px-48 mx-auto p-5 bg-[rgba(85,193,247,0)] min-h-screen">
        <div className="flex flex-col gap-1">
        <div className="mb-2">
          <span className="text-6xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Let's Connect!
          </span>
        </div>
          <p className="font-light text-gray-100 mt-1">
            Please fill in the details and submit to ping me.
          </p>
        </div>
        <div className="bg-[rgba(85,193,247,0)] pt-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="block sm:flex flex-row gap-8">
              <motion.div
                variants={slideInFromLeft(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full sm:w-1/2"
              >
                <div className="flex flex-col gap-4">
                  <label htmlFor="name" className="font-semibold text-gray-100">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-400"
                    required
                  />
                  <label htmlFor="email" className="font-semibold text-gray-100">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-400"
                    required
                  />
                  <label htmlFor="subject" className="font-semibold text-gray-100">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Phone No"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-400"
                    required
                  />
                </div>
              </motion.div>
              <motion.div
                variants={slideInFromRight(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="flex flex-col h-full">
                  <label htmlFor="message" className="mt-4 sm:mt-0 pb-4 font-semibold text-gray-100">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Drop your Message . . ."
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-[200px] sm:h-full w-full resize-y placeholder-gray-400 text-gray-400"
                    required
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={slideInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full py-3 rounded-md mt-3 mb-8 sm:mt-15 px-4 cursor-pointer border-[1.5px] border-[#7042f8] opacity-[0.9] hover:scale-102 transition-all duration-300 ease-in-out"
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center cursor-pointer"
              >
                <SparklesIcon className="text-[#b49bff] ml-[-6px] mr-2 h-4 w-4" />
                <h1 className="Welcome-text text-md  !text-white sm:text-md">Connect</h1>
              </button>
            </motion.div>
          </form>

          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-row justify-center mt-6">
              <div className="flex flex-row gap-4 mt-3">
                {Socials.map((social) => (
                    <a href={social.href} target="_blank" rel="noopener noreferrer">

                  <Image
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    width={32}
                    height={32}
                    className="cursor-pointer hover:scale-110 transition"
                    
                    />
                    </a>
                ))}
              </div>
            </div>
            <h1 className="text-gray-100 block text-center mt-24 text-[0.9rem]">
            👾 Built by Dushyant 👾
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;