import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fa") ? "fa" : "en";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden
                 bg-bg-card border border-border
                 hover:border-accent/50 transition-all duration-500
                 hover:-translate-y-2"
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-3 z-10 start-3 flex items-center gap-1 px-2.5 py-1 rounded-full
                        bg-accent/90 backdrop-blur-sm text-white text-xs font-medium"
        >
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-bg-soft">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top
                     group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-txt-muted leading-relaxed mb-4 flex-1">
          {project.description[lang]}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md
                         bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2
                       rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium
                       transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {t("projects.view_demo")}
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View code on GitHub"
            className="inline-flex items-center justify-center p-2 rounded-lg
                       border border-border hover:border-accent
                       text-txt-muted hover:text-accent transition-colors"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
