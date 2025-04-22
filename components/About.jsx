"use client";
import Image from "next/image";
import profilePic from "../public/media/Harini.jpg"; 

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <Image
            src={profilePic}
            alt="Harini Vanmeeganathan Lakshmi"
            className="rounded-xl shadow-lg w-72 h-auto object-cover"
          />
        <div>
            <h3 className="text-indigo-600 font-semibold mb-2 border-b border-indigo-200 pb-1">Skills</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Programming Languages: Python, Java, R, JavaScript, SQL, C++</li>
              <li>ML  and Python Libraries: Pandas, NumPy, Scikit-learn, PyTorch, TensorFlow, Keras</li>
              <li>Natural Language Processing and LLMs: Transformers (Hugging Face), GPT APIs, LangChain (familiar), LlamaIndex (familiar), SpaCy, NLTK</li>
              <li>Web Development: React, Next.js, FastAPI, Node.js</li>
              <li>Databases: SQL, PostgreSQL, MongoDB</li>
            </ul>
          </div>

          <div>
            <h3 className="text-indigo-600 font-semibold mb-2 border-b border-indigo-200 pb-1">Tools</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Cloud Computing and Big Data Platforms: Amazon Web Services (AWS), Google Cloud Platform (GCP), Databricks, Hadoop, Apache Spark</li>
              <li>GitHub Actions, Docker</li>
            </ul>
          </div>
        </div>

        {/* Right Column - About Text */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="text-justify">
            <h2 className="text-3xl font-bold mb-4 text-center text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1 transition-all duration-500">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              I’m Harini Vanmeeganathan Lakshmi, a passionate Machine Learning Engineer with 3 years of full-stack experience and a Master's in Data Science (AI Analytics) from Swinburne University of Technology. My journey blends the best of engineering and AI — where I’ve built scalable AI systems, deployed LLM pipelines, and crafted NLP solutions using FastAPI and Databricks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-2">
              I specialize in building intelligent systems for text understanding and summarization, powered by Hugging Face and MLOps frameworks. I’m curious about ethical and human-centered AI applications. Whether mentoring or presenting, I strive to innovate and grow in tech and communication.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-2">
              Whether it’s presenting technical solutions to stakeholders or mentoring fellow engineers, I thrive at the intersection of innovation, communication, and technology. I’m constantly seeking opportunities to learn, grow, and push the boundaries of what’s possible with AI.
            </p>
            <p className="text-indigo-500 italic text-sm mt-3">
              Outside of tech, I enjoy writing, networking aspiring data scientists, and exploring cafés with a good book in hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="text-indigo-600 font-semibold mb-2 border-b border-indigo-200 pb-1">Software</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>VS Code, PyCharm</li>
                <li>Postman, Jupyter, Microsoft Office</li>
              </ul>
            </div>

            <div>
              <h3 className="text-indigo-600 font-semibold mb-2 border-b border-indigo-200 pb-1">Domains</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Natural Language Processing</li>
                <li>Deep Learning</li>
                <li>LLM Engineering</li>
                <li>AI Deployment & MLOps</li>
                <li>Front End Development</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}