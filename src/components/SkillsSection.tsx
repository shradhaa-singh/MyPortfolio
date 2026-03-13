import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "C"],
  },
  {
    title: "Data Science & AI Tools",
    skills: ["Matplotlib", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Development Technologies",
    skills: ["React"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Linux", "VS Code"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">02. Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">Technical Arsenal</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * ci, duration: 0.5 }}
                className="glass glow-border rounded-xl p-6"
              >
                <h4 className="font-mono text-primary text-xs uppercase tracking-wider mb-4">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground hover:bg-primary/15 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
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

export default SkillsSection;
