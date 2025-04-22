"use client";

import { motion } from "framer-motion";

export default function Education() {
  const items = [
    {
      school: "La Trobe University, Melbourne, Australia",
      logo: "/latrobe-logo.png",
      degree: "Master of Data Science (Artificial Intelligence Analytics)",
      duration: "February 2023 – December 2024",
      highlights: [
        "Relevant Coursework: Artificial Intelligence, Machine Learning, Natural Language Processing, Data Mining, Data Exploration and Analysis, Visual Analytics, and Big Data Management on the Cloud",
      ],
    },
    {
      school: "Anna University, Chennai, India",
      logo: "/annauniv-logo.png",
      degree: "Bachelor of Computer Science and Engineering",
      duration: "July 2016 – June 2020",
      highlights: ["Graduated with First-class Distinction"],
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1 transition-all duration-500">
          Education
        </h2>

        <div className="relative border-l-2 border-indigo-400 pl-6 space-y-12">
          {items.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative group hover:scale-[1.01] transition"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-4 top-6 w-3 h-3 rounded-full bg-indigo-500 shadow-md" />

              {/* Logo + content row */}
              <div className="flex items-start gap-4">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-12 h-12 object-contain mt-1"
                />
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {edu.school}
                  </h3>
                  <p className="text-gray-800 dark:text-white font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-500 italic mb-2">
                    {edu.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    {edu.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
