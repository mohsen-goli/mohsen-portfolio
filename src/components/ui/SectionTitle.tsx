import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 mb-12 ${alignment}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="w-16 h-1 bg-accent rounded-full" />
      {subtitle && <p className="text-txt-muted max-w-xl">{subtitle}</p>}
    </motion.div>
  );
}
