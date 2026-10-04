import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code2, Zap, Heart } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import profileImg from "../../assets/profile.jpg";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: "7+", label: t("about.stats_projects") },
    { value: "8+", label: t("about.stats_tech") },
    { value: "1+", label: t("about.stats_years") },
  ];

  const values = [
    { icon: Code2, title: "Clean Code", desc: t("about.values_clean_code") },
    { icon: Zap, title: "Performance", desc: t("about.values_performance") },
    { icon: Heart, title: "Detail", desc: t("about.values_detail") },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title={t("about.title")} />

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* عکس */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative"
          >
            <div className="relative max-w-[240px] mx-auto md:mx-0">
              <div className="absolute -inset-3 border border-accent/30 rounded-2xl" />
              <div className="absolute -inset-3 border border-accent/10 rounded-2xl rotate-3" />
              <img
                src={profileImg}
                alt="Mohsen Golzad"
                className="relative w-full rounded-2xl object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* متن */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-txt-muted text-lg leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-txt-muted leading-relaxed">{t("about.p2")}</p>
            <p className="text-txt-muted leading-relaxed">{t("about.p3")}</p>

            {/* لینک‌های داخلی */}
            <p className="text-sm">
              <span className="text-txt-dim">→ </span>
              <a href="#projects" className="text-accent hover:underline">
                {t("about.view_projects")}
              </a>
              <span className="text-txt-dim"> · </span>
              <a href="#contact" className="text-accent hover:underline">
                {t("about.contact_me")}
              </a>
            </p>

            {/* ارزش‌ها */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl bg-bg-soft border border-border
                             hover:border-accent/40 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-xs text-txt-dim leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* آمار */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-bg-soft border border-border
                         hover:border-accent/40 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {value}
              </div>
              <div className="text-xs md:text-sm text-txt-muted">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
