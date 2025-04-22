"use client";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/media/deeca3.jpg",
    title: "DEECA Internship – ML in Agriculture",
    category: "Presentation",
  },
  {
    src: "/media/deeca2.jpg",
    title: "DEECA Internship – ML in Agriculture",
    category: "Presentation",
  },
  {
    src: "/media/deeca1.jpg",
    title: "DEECA Internship – ML in Agriculture",
    category: "Presentation",
  },
  {
    src: "/media/latrobe.jpg",
    title: "La Trobe Student Union – Social Service",
    category: "Community",
  },
  {
    src: "/media/cii.jpg",
    title: "CII Tech Mahindra Hackathon",
    category: "Hackathon",
  },
  {
    src: "/media/rsp.jpg",
    title: "NSS Volunteer",
    category: "Volunteering",
  },
];

const achievements = [
  "Spotlight of the Month: La Trobe University (2025)",
  "La Trobe Onshore Excellence Scholarship (2023)",
  "Kudos Hour Recognition: Verizon (2023)",
  "Quarterly Spotlight Award: Verizon (2022)",
  "Commitment Award: Verizon (2022)",
];

const volunteering = [
  {
    role: "Scout Member – Bharat Scouts & Guides (2011 - 2014)",
    impact: [
      "Participated in national-level camps and emergency readiness.",
    ],
  },
  {
    role: "Student Volunteer – PrettyLilHearts (2018 - 2023)",
    impact: [
      "Helped in old age homes and served food to the disabled.",
      "Organized awareness activities for rural school students.",
    ],
  },
];

const blogPosts = [
  {
    title: "Building a Financial Sentiment Analysis API Using NLP & FastAPI",
    link: "https://medium.com/@vanmeeganathanharini/building-a-financial-sentiment-analysis-api-using-nlp-fastapi-6340b4f84fde",
  },
  {
    title: "Demystifying Machine Learning: Techniques, Methods, and Algorithms Explained",
    link: "https://medium.com/@vanmeeganathanharini/demystifying-machine-learning-techniques-methods-and-algorithms-explained-c2deeed428df",
  },
  {
    title: "Unveiling News Insights: Web Scraping and NLP with Australian News Channels",
    link: "https://medium.com/@vanmeeganathanharini/unveiling-news-insights-web-scraping-and-nlp-with-australian-news-channels-df2bafc2abe8",
  },
];

export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1">
          Gallery
        </h2>

        {/* 🔹 Image Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                  {item.category}
                </h4>
                <p className="text-gray-800 dark:text-white text-sm mt-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      <h2 className="text-3xl font-bold mb-12 text-indigo-900 dark:text-indigo-200 border-b-4 border-indigo-400 w-fit mx-auto pb-1">
        Recognitions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        {/* Achievements Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
        <h3 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            Achievements & Awards
          </h3>
          <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed space-y-2">
            {achievements.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>

        {/* Volunteering Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
        <h3 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-300">
            Volunteering Contributions
          </h3>
          <div className="space-y-6">
            {volunteering.map((entry, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">
                  {entry.role}
                </h4>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mt-1">
                  {entry.impact.map((point, i) => (
                    <p key={i}>{point}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


        {/* 📝 Medium Blogs */}
        <h3 className="text-2xl font-bold mb-6 text-indigo-800 dark:text-indigo-300">
          Featured Medium Blogs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-indigo-500 text-left"
            >
              <h4 className="text-md font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Read on Medium →
              </p>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
