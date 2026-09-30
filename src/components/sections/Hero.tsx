import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* هاله‌ی بنفش پشت صفحه */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-glow-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* ستون چپ: متن */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* بج آنلاین */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-accent/10 border border-accent/30 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-txt-muted">
              {t("hero.available") || "Available for work"}
            </span>
          </motion.div>

          {/* Greeting */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-txt-muted text-2xl md:text-3xl block mb-2">
              {t("hero.greeting")}
            </span>
            <span className="gradient-text glow-text">{t("hero.role")}</span>
          </h1>

          {/* Tagline */}
          <p className="text-txt-muted text-lg leading-relaxed max-w-md">
            {t("hero.tagline")}
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         bg-accent hover:bg-accent-hover text-white font-medium
                         transition-all duration-300 glow-accent"
            >
              {t("hero.cta_primary")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         border border-border hover:border-accent
                         text-txt-primary font-medium
                         transition-all duration-300"
            >
              <Download className="w-4 h-4 group-hover:text-accent transition-colors" />
              {t("hero.cta_secondary")}
            </a>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-txt-dim text-sm">
              {t("hero.follow") || "Find me on"}
            </span>
            <div className="h-px flex-1 bg-border max-w-[40px]" />
            {[
              {
                icon: FaGithub,
                href: "https://github.com/mohsen-goli",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/in/mohsen-golzad",
                label: "LinkedIn",
              },
              {
                icon: FaTelegram,
                href: "https://t.me/mohsen_golzad",
                label: "Telegram",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-txt-muted hover:text-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ستون راست: عکس */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* حلقه‌های تزئینی */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-accent/20 animate-float" />
            <div
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-accent/10 animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* عکس */}
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-hover blur-2xl opacity-40" />
            <img
              src={profileImg}
              alt="Mohsen Golzad"
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover
                         border-2 border-accent/30 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* فلش اسکرول */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-txt-muted hover:text-accent transition-colors"
      >
        <span className="text-xs tracking-wider uppercase">
          {t("hero.scroll")}
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
