import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects, type ProjectCategory } from "../../data/projects";

type Filter = "all" | ProjectCategory;

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("projects.all") },
    { key: "react", label: t("projects.filter_react") },
    { key: "js", label: t("projects.filter_js") },
    { key: "css", label: t("projects.filter_css") },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium
                          border transition-all duration-300
                          ${
                            filter === key
                              ? "bg-accent border-accent text-white"
                              : "bg-transparent border-border text-txt-muted hover:border-accent/50 hover:text-txt-primary"
                          }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
