"use client";
import { Mail, Linkedin, Github} from "lucide-react";
import { FaKaggle, FaMedium, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-white dark:from-gray-900 dark:to-gray-800 text-white py-20">
      {/* Overlay */}
      <div className="max-w-4xl mx-auto rounded-2xl shadow-xl px-10 py-8 bg-white/30 backdrop-blur-md text-gray-900 dark:text-white ring-1 ring-white/20 hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-3xl font-bold mb-4 text-center text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1 transition-all duration-500">
          Contact
        </h2>

        {/* Email */}
        <div className="flex justify-center items-center gap-3 mt-6 text-md text-gray-700 dark:text-gray-300">
          <Mail className="text-indigo-500" />
          <span>vanmeeganathanharini@gmail.com</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-5 mt-8">
          {[
            { icon: <Linkedin />, link: "https://linkedin.com/in/harinivanmeeganathan" },
            { icon: <Github />, link: "https://github.com/harinivanmeeganathan" },
            { icon: <FaXTwitter className="w-6 h-6" />, link: "https://x.com/harinivanmee" },
            { icon: <FaKaggle />, link: "https://www.kaggle.com/harinivanmeeganathan" },
            { icon: <FaMedium />, link: "https://medium.com/@vanmeeganathanharini" },
            { icon: <FaGlobe />, link: "https://harinivanmeeganathan-portfolio.vercel.app/" },
            { icon: <span className="text-xl">🤗</span>, link: "https://huggingface.co/harinivanmeeganathan" },
          ].map(({ icon, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="text-indigo-500 hover:text-indigo-700 transition duration-300 border-2 border-indigo-300 rounded-full p-3"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}