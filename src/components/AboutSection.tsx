import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">01. About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Who I Am</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Brain, title: "Data Science Enthusiast", desc: "Exploring data analysis, machine learning, and visualization to extract insights and build intelligent solutions from real-world data."  },
              { icon: Code2, title: "DSA learner", desc: "Currently strengthening problem-solving skills through Data Structures and Algorithms to write efficient and optimized code." },
              { icon: Lightbulb, title: "Lifelong Learner", desc: "Constantly experimenting with new frameworks, reading research papers, and building projects to sharpen my craft." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="glass glow-border rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            I'm a Computer Science undergraduate with a deep curiosity for artificial intelligence
            and its potential to reshape how we interact with technology. My journey began with a
            simple Python script and evolved into exploring neural networks, natural language
            processing, and computer vision. I believe in building technology that is not just
            technically sound, but genuinely useful for people.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;