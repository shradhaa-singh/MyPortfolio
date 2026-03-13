import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Cyber Teal",
    colors: {
      "--background": "220 20% 7%",
      "--foreground": "210 20% 90%",
      "--card": "220 18% 10%",
      "--card-foreground": "210 20% 90%",
      "--primary": "174 72% 56%",
      "--primary-foreground": "220 20% 7%",
      "--secondary": "220 16% 14%",
      "--secondary-foreground": "210 20% 80%",
      "--muted": "220 14% 16%",
      "--muted-foreground": "215 12% 50%",
      "--accent": "174 72% 56%",
      "--accent-foreground": "220 20% 7%",
      "--border": "220 16% 18%",
      "--input": "220 16% 18%",
      "--ring": "174 72% 56%",
      "--glow": "174 72% 56%",
    },
    preview: "hsl(174 72% 56%)",
  },
  {
    name: "Neon Violet",
    colors: {
      "--background": "260 20% 7%",
      "--foreground": "260 10% 90%",
      "--card": "260 18% 10%",
      "--card-foreground": "260 10% 90%",
      "--primary": "270 85% 65%",
      "--primary-foreground": "260 20% 7%",
      "--secondary": "260 16% 14%",
      "--secondary-foreground": "260 10% 80%",
      "--muted": "260 14% 16%",
      "--muted-foreground": "260 10% 50%",
      "--accent": "270 85% 65%",
      "--accent-foreground": "260 20% 7%",
      "--border": "260 16% 18%",
      "--input": "260 16% 18%",
      "--ring": "270 85% 65%",
      "--glow": "270 85% 65%",
    },
    preview: "hsl(270 85% 65%)",
  },
  {
    name: "Amber Glow",
    colors: {
      "--background": "30 15% 6%",
      "--foreground": "35 20% 88%",
      "--card": "30 14% 9%",
      "--card-foreground": "35 20% 88%",
      "--primary": "38 95% 58%",
      "--primary-foreground": "30 15% 6%",
      "--secondary": "30 12% 13%",
      "--secondary-foreground": "35 15% 78%",
      "--muted": "30 10% 15%",
      "--muted-foreground": "30 10% 48%",
      "--accent": "38 95% 58%",
      "--accent-foreground": "30 15% 6%",
      "--border": "30 12% 17%",
      "--input": "30 12% 17%",
      "--ring": "38 95% 58%",
      "--glow": "38 95% 58%",
    },
    preview: "hsl(38 95% 58%)",
  },
  {
    name: "Rose Pink",
    colors: {
      "--background": "340 18% 7%",
      "--foreground": "340 10% 90%",
      "--card": "340 16% 10%",
      "--card-foreground": "340 10% 90%",
      "--primary": "340 82% 62%",
      "--primary-foreground": "340 18% 7%",
      "--secondary": "340 14% 14%",
      "--secondary-foreground": "340 10% 78%",
      "--muted": "340 12% 15%",
      "--muted-foreground": "340 8% 48%",
      "--accent": "340 82% 62%",
      "--accent-foreground": "340 18% 7%",
      "--border": "340 14% 17%",
      "--input": "340 14% 17%",
      "--ring": "340 82% 62%",
      "--glow": "340 82% 62%",
    },
    preview: "hsl(340 82% 62%)",
  },
  {
    name: "Emerald",
    colors: {
      "--background": "150 18% 6%",
      "--foreground": "150 10% 90%",
      "--card": "150 16% 9%",
      "--card-foreground": "150 10% 90%",
      "--primary": "152 70% 50%",
      "--primary-foreground": "150 18% 6%",
      "--secondary": "150 14% 13%",
      "--secondary-foreground": "150 10% 78%",
      "--muted": "150 12% 14%",
      "--muted-foreground": "150 8% 46%",
      "--accent": "152 70% 50%",
      "--accent-foreground": "150 18% 6%",
      "--border": "150 14% 16%",
      "--input": "150 14% 16%",
      "--ring": "152 70% 50%",
      "--glow": "152 70% 50%",
    },
    preview: "hsl(152 70% 50%)",
  },
  {
    name: "Arctic Light",
    colors: {
      "--background": "210 25% 96%",
      "--foreground": "220 20% 12%",
      "--card": "210 20% 100%",
      "--card-foreground": "220 20% 12%",
      "--primary": "210 80% 50%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "210 15% 92%",
      "--secondary-foreground": "220 15% 30%",
      "--muted": "210 12% 90%",
      "--muted-foreground": "215 10% 45%",
      "--accent": "210 80% 50%",
      "--accent-foreground": "0 0% 100%",
      "--border": "210 15% 88%",
      "--input": "210 15% 88%",
      "--ring": "210 80% 50%",
      "--glow": "210 80% 50%",
    },
    preview: "hsl(210 80% 50%)",
  },
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const applyTheme = (index: number) => {
    const root = document.documentElement;
    const theme = themes[index];
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    setActive(index);
    setOpen(false);
    localStorage.setItem("portfolio-theme", String(index));
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved !== null) {
      applyTheme(Number(saved));
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-16 right-0 glass glow-border rounded-xl p-3 min-w-[180px]"
          >
            <p className="text-xs font-mono text-muted-foreground mb-2 px-1">Choose Theme</p>
            <div className="flex flex-col gap-1">
              {themes.map((theme, i) => (
                <button
                  key={theme.name}
                  onClick={() => applyTheme(i)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all hover:bg-secondary ${
                    active === i ? "bg-secondary" : ""
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full shrink-0 border border-border"
                    style={{ backgroundColor: theme.preview }}
                  />
                  <span className={active === i ? "text-foreground font-medium" : "text-muted-foreground"}>
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full glass glow-border flex items-center justify-center hover:border-primary/40 transition-all group"
        aria-label="Change theme"
      >
        <Palette className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
