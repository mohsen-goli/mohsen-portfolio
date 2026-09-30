import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title={t("tech.title")} subtitle={t("tech.subtitle")} />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {technologies.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl
                         bg-bg-soft border border-border
                         hover:border-accent/40 hover:-translate-y-1
                         transition-all duration-300 cursor-default"
            >
              <Icon
                size={28}
                className="transition-all duration-300 group-hover:scale-110"
                style={{ color }}
              />
              <span className="text-xs text-txt-muted group-hover:text-txt-primary transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
