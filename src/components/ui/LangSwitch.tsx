import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import type { Lang } from "../../i18n";

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const currentLang: Lang = i18n.language?.startsWith("fa") ? "fa" : "en";
  const nextLang: Lang = currentLang === "fa" ? "en" : "fa";

  const handleToggle = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={handleToggle}
      className="group flex items-center gap-2 px-3 py-2 rounded-lg
                 border border-border hover:border-accent
                 text-txt-muted hover:text-txt-primary
                 transition-all duration-300 text-sm font-medium"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 group-hover:text-accent transition-colors" />
      <span className="uppercase tracking-wide">{currentLang}</span>
      <span className="text-txt-dim group-hover:text-accent transition-colors">
        →
      </span>
      <span className="uppercase tracking-wide text-txt-dim group-hover:text-accent transition-colors">
        {nextLang}
      </span>
    </button>
  );
}
