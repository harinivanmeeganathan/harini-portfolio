"use client";

import { motion } from "framer-motion";

const workData = [
  {
    company: "DataDisca Pty Ltd",
    role: "Data Scientist Trainee",
    date: "Mar 2024 – Present",
    location: "Melbourne, VIC",
    logo: "/datadisca_logo.jpeg",
    description: [
      "Developed BERT-based financial sentiment classifier using FastAPI and deployed on Render.",
      "Built LLM-powered crime news summarization pipelines using Selenium and GPT APIs.",
      "Improved authorship attribution accuracy by 12% via Transformer and LSTM models.",
      "Optimized transformer models using hyperparameter tuning and cross-validation.",
    ],
  },
  {
    company: "Agriculture Victoria Research (DEECA)",
    role: "Machine Learning Research Intern",
    date: "Jul 2024 – Nov 2024",
    location: "Melbourne, VIC",
    logo: ["/deeca-logo.png","/DEECA.png"],
    description: [
      "Developed predictive ML models (SVM, XGBoost, MLP) for cow fertility prediction.",
      "Applied SMOTE + validation pipelines, boosting model accuracy by 15–18%.",
      "Delivered actionable insights to stakeholders to support a 17% productivity increase.",
    ],
  },
  {
    company: "Verizon Global Services",
    role: "Engineer II – Full Stack Developer",
    date: "Feb 2022 – Feb 2023",
    location: "Chennai, IND",
    logo: "/verizon.webp",
    description: [
      "Built secure and scalable APIs with Java Spring Boot, reducing latency by 20%.",
      "Integrated React front-end with backend systems for recruitment automation.",
      "Implemented token-based authentication and SSO, reducing unauthorized access by 30%.",
      "Reduced issue turnaround time by 48% through cross-functional collaboration.",
    ],
  },
  {
    company: "Solartis Technology Services",
    role: "Associate Software Engineer",
    date: "Jun 2020 – Feb 2022",
    location: "Chennai, IND",
    logo: "/solartis.jpeg",
    description: [
      "Created dashboards in ReactJS for insurance policy & quote management.",
      "Built microservices with Java Drools & BPMN to automate rule execution.",
      "Enhanced data querying speed by 20% through optimized MySQL logic.",
      "Maintained 99.9% uptime with fast production bug resolution.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {workData.map((job, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-3">
              {Array.isArray(job.logo) ? (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                {job.logo.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`${job.company} logo ${i + 1}`}
                    className="w-40 h-40 sm:w-28 sm:h-28 object-contain"
                />
                ))}
            </div>
            ) : (
            <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-40 h-40 sm:w-28 sm:h-28 object-contain"
            />
                )}

                <div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">
                    {job.company}
                  </h4>
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    {job.date} • {job.location}
                  </p>
                </div>
              </div>

              <h5 className="text-md font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                {job.role}
              </h5>

              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {job.description.map((point, i) => (
                  <li key={i} className="pl-1">• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
