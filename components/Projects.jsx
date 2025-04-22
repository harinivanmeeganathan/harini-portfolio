"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const mlProjects = [
  {
    title: "Financial Sentiment Classifier",
    category: "NLP / Sentiment Analysis",
    description:
      "BERT-based model for financial text sentiment classification. Achieved 82% accuracy and deployed with FastAPI.",
    tech: ["Python", "Transformers", "BERT", "FastAPI"],
    link: "https://github.com/harinivanmeeganathan/financial-sentiment-analysis",
  },
  {
    title: "Authorship Attribution",
    category: "NLP / Classification",
    description:
      "Transformer, LSTM, and N-gram based approach to identify authorship in anonymous text datasets.",
    tech: ["Python", "LSTM", "Transformers"],
    link: "https://github.com/harinivanmeeganathan/author_identification_challenge_NLP",
  },
  {
    title: "LLM Crime News Summariser",
    category: "LLM / Summarization",
    description:
      "Built pipeline with GPT & Selenium to extract and summarize Australian crime news stories.",
    tech: ["Python", "OpenAI", "Selenium"],
    link: "https://github.com/harinivanmeeganathan/news_data_extraction_LLM",
  },
  {
    title: "Dairy Cow Fertility Predictor",
    category: "ML / Predictive Modeling",
    description:
      "Used SVM, XGBoost & MLP to predict cow fertility from Mid-IR spectroscopy data.",
    tech: ["Python", "XGBoost", "Scikit-learn"],
    link: "https://github.com/harinivanmeeganathan/Dairy-Cow-Machine-Learning",
  },
];

const fullStackProjects = [
  {
    title: "Shop-Zone E-Commerce",
    category: "React / Firebase",
    description:
      "E-commerce app with full shopping experience, admin dashboard & Stripe integration.",
    tech: ["React", "Firebase", "Redux", "Stripe"],
    link: "https://github.com/harinivanmeeganathan/shop-zone",
  },
  {
    title: "Personal Portfolio v2",
    category: "Next.js / Tailwind",
    description:
      "My portfolio rebuilt in Next.js with Framer Motion, dark mode, and smooth animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://github.com/harinivanmeeganathan/harini-portfolio",
  },
];

const tabs = [
  { name: "🧠 ML / NLP Projects", data: mlProjects },
  { name: "💻 Full Stack Projects", data: fullStackProjects },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1 transition-all duration-500">
          Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab.name === tab.name
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          key={activeTab.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {activeTab.data.map((project, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700"
                >
                  <Github />
                </a>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="text-xs flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
