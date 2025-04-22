"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    duration: "Completed 40-hour course by Andrei Neagoie and Yihua Zhang",
    place: "@ UDEMY",
    link: "https://www.udemy.com/certificate/UC-754ba92e-41d5-40f1-a4e9-6006d0694c10/",
  },
  {
    title: "Microsoft Power BI Desktop for Business Intelligence (2023)",
    duration:
      "Mastered Power BI Desktop for data analysis with hands-on assignments & projects",
    place: "@ UDEMY",
    link: "https://www.udemy.com/certificate/UC-4cc21124-c641-4870-a324-153fc47bff9e/",
  },
  {
    title: "Advance Java",
    duration: "Completed 40 hours course Offline",
    place: "@ SILICON SOFTWARE",
  },
  {
    title:
      "Core Java (Java SE 8 Programming - Cloud Edition, Oracle WDP Program)",
    duration:
      "Completed through Oracle's Workforce Development Program at Eyeopen Technologies",
    place: "@ ORACLE | Eyeopen Technologies",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1 transition-all duration-500">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-indigo-500 w-5 h-5" />
                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
                  {cert.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {cert.duration}
              </p>
              <p className="text-sm text-indigo-500 mt-1">{cert.place}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
