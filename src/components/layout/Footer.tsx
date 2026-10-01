import { useTranslation } from "react-i18next";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/mohsen-goli", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/mohsen-golzad",
    label: "LinkedIn",
  },
  { icon: FaTelegram, href: "https://t.me/mohsen_golzad", label: "Telegram" },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-lg font-bold">
              Mohsen<span className="text-accent">.</span>
            </a>
            <p className="text-xs text-txt-dim">
              © {year} Mohsen Golzad — {t("footer.rights")}
            </p>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-xs text-txt-dim">
            <span>{t("footer.built")}</span>
            <Heart className="w-3 h-3 text-accent fill-current animate-pulse" />
            <span>React + TypeScript</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg border border-border
                           text-txt-muted hover:text-accent hover:border-accent
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
