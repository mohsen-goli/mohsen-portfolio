import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";

// ⚠️ اینجا Form ID خودت رو بذار
const FORMSPREE_ID = "mqpezewo";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohsen.golzad9069@gmail.com",
    href: "mailto:mohsen.golzad9069@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@mohsen-goli",
    href: "https://github.com/mohsen-goli",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Mohsen Golzad",
    href: "https://www.linkedin.com/in/mohsen-golzad-a549519b",
  },
  {
    icon: FaTelegram,
    label: "Telegram",
    value: "@mohsen_golzad",
    href: "https://t.me/mohsen_golzad",
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid md:grid-cols-5 gap-8">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 p-6 md:p-8 rounded-2xl bg-bg-soft border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-txt-muted"
                >
                  {t("contact.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.name_placeholder")}
                  className="w-full px-4 py-3 rounded-lg bg-bg border border-border
                             text-txt-primary placeholder:text-txt-dim
                             focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
                             transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-txt-muted"
                >
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.email_placeholder")}
                  className="w-full px-4 py-3 rounded-lg bg-bg border border-border
                             text-txt-primary placeholder:text-txt-dim
                             focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
                             transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-txt-muted"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.message_placeholder")}
                className="w-full px-4 py-3 rounded-lg bg-bg border border-border
                           text-txt-primary placeholder:text-txt-dim resize-none
                           focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
                           transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto
                         px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover
                         text-white font-medium transition-all duration-300
                         disabled:opacity-60 disabled:cursor-not-allowed
                         glow-accent"
            >
              {status === "idle" && (
                <>
                  <Send className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                  {t("contact.send")}
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  {t("contact.sent")}
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle className="w-4 h-4" />
                  {t("contact.error")}
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-bg-soft border border-border">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-4 h-4 text-accent" />
                <h3 className="font-semibold text-sm text-txt-muted uppercase tracking-wide">
                  {t("contact.or")}
                </h3>
              </div>

              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg transition-colors"
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg
                                    bg-accent/10 group-hover:bg-accent/20
                                    border border-accent/20 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-txt-dim mb-0.5">{label}</div>
                      <div
                        className="text-sm text-txt-primary truncate
                                      group-hover:text-accent transition-colors"
                      >
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
