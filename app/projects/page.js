
const projects = [
  {
    title: "Dairy Cow Fertility Predictor",
    description: "Boosted herd productivity using ensemble ML models to predict fertility based on spectroscopy data.",
    stack: ["Python", "Scikit-learn", "XGBoost", "MLP"],
    link: "https://github.com/harinivanmeeganathan/dairy-fertility-predictor",
  },
  {
    title: "Financial Sentiment Classifier",
    description: "Real-time BERT-based financial sentiment analysis with FastAPI deployment on Render.",
    stack: ["BERT", "FastAPI", "Transformers"],
    link: "https://github.com/harinivanmeeganathan/financial-sentiment-classifier",
  },
  {
    title: "LLM-Powered Crime News Summariser",
    description: "LLM pipeline to extract and summarise Australian crime news articles.",
    stack: ["GPT API", "Selenium", "BeautifulSoup"],
    link: "https://github.com/harinivanmeeganathan/crime-news-summariser",
  },
  {
    title: "Authorship Attribution Model",
    description: "Improved accuracy of author classification using LSTM, Transformers, and n-gram models.",
    stack: ["Transformers", "LSTMClassifier", "Scikit-learn"],
    link: "https://github.com/harinivanmeeganathan/authorship-attribution",
  },
];

export default function Projects() {
  return (
    <section className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <div className="text-sm text-gray-600 mt-2 mb-2">{project.stack.join(', ')}</div>
            <a href={project.link} target="_blank" className="text-indigo-600 underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
