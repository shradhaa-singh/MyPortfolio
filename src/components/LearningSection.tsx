import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Sparkles, Target } from "lucide-react";

const items = [
  { 
    icon: Target, 
    title: "LeetCode", 
    desc: "Practicing Data Structures and Algorithms and solving coding challenges regularly.", 
    link: "https://leetcode.com/shradhaa_singh"
  },
  { 
    icon: Rocket, 
    title: "HackerRank", 
    desc: "Improving coding and problem-solving skills through structured programming challenges.", 
    link: "https://www.hackerrank.com/shradhaa_singh"
  },
  { 
    icon: Sparkles, 
    title: "Codeforces", 
    desc: "Participating in competitive programming contests to strengthen algorithmic thinking.", 
    link: "https://codeforces.com/profile/shradhaa_singh"
  },
];

const LearningSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

return (
  <section id="learning" className="section-padding" ref={ref}>
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm mb-2">
          04. Learning & Exploration
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Coding Profiles
        </h3>

        <p className="text-muted-foreground max-w-xl mb-10">
          Here's how I stay sharp and keep pushing boundaries.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="flex gap-4 items-start glass glow-border rounded-xl p-5 hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={20} />
              </div>

              <div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
};

export default LearningSection;
