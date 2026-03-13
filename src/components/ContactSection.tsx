import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">06. Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h3>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, research ideas,
            or just having a conversation about AI and technology. Feel free to reach out!
          </p>

          <div className="flex justify-center gap-6 mb-10">
            {[
              { icon: Mail, label: "Email", href: "mailto:shradhasingh72558@gmail.com" },
              { icon: Github, label: "GitHub", href: "https://github.com/shradhaa-singh" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shradhaasingh" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-border rounded-xl p-5 flex flex-col items-center gap-2 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <item.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <a
            href="mailto:shradhasingh72558@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all glow-border"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
