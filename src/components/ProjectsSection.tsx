import { motion, useInView } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  tech: string[];
}
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects: Project[] = [
  /*{
    title: "Sentiment Analyzer",
    desc: "Real-time sentiment analysis engine that classifies customer reviews using NLP transformers, achieving 94% accuracy on benchmark datasets.",
    tech: ["Python", "Hugging Face", "Flask", "React"],
  },
  {
    title: "Image Classifier",
    desc: "Deep learning model trained on custom datasets for medical image classification, helping early detection of anomalies with CNN architectures.",
    tech: ["PyTorch", "OpenCV", "FastAPI", "Docker"],
  },
  {
    title: "Smart Study Planner",
    desc: "AI-powered study scheduling app that adapts to learning patterns using reinforcement learning to optimize retention and productivity.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
  },
  {
    title: "Stock Predictor",
    desc: "LSTM-based time series forecasting model for stock market trends with interactive visualization dashboard and real-time data feeds.",
    tech: ["Python", "Keras", "Pandas", "Plotly"],
  },
  {
    title: "Chatbot Framework",
    desc: "Modular conversational AI framework with intent recognition, entity extraction, and context management for domain-specific assistants.",
    tech: ["Python", "Rasa", "spaCy", "MongoDB"],
  },
  {
    title: "Data Pipeline Engine",
    desc: "Automated ETL pipeline for processing large-scale datasets with real-time monitoring, error handling, and scalable architecture.",
    tech: ["Python", "Apache Airflow", "SQL", "Docker"],
  }, */
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">03. Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">Things I've Built</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass glow-border rounded-xl p-6 flex flex-col justify-between group hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-mono text-primary text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-primary/70">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
