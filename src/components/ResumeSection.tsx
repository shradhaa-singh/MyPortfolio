import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown, Eye } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">05. Resume</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h3>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Get a comprehensive overview of my education, experience, skills, and achievements.
          </p>

          <div className="glass glow-border rounded-2xl p-8 md:p-12 inline-block">
            <div className="w-20 h-28 mx-auto mb-6 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
              <FileDown className="text-primary" size={32} />
            </div>
            <h4 className="font-semibold text-lg mb-1">Shradha Singh — Resume</h4>
            <p className="text-muted-foreground text-sm mb-6">PDF · Updated March 2026</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all glow-border"
              >
                <FileDown size={16} /> Download Resume
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-all"
              >
                <Eye size={16} /> Preview
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
