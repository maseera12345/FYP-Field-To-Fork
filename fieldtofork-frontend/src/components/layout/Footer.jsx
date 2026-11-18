import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../brand/Logo";
import Button from "../ui/Button";
import Container from "./Container";
import { useLanguage } from "../../context/LanguageContext";

const columns = [
  {
    title: "footer.platform",
    links: [
      { key: "nav.marketplace", to: "/marketplace" },
      { key: "nav.mandi", to: "/mandi-prices" },
      { key: "nav.weather", to: "/weather" },
      { key: "footer.disease", to: "/disease-detection" },
    ],
  },
  {
    title: "footer.company",
    links: [
      { key: "footer.aboutLink", to: "/about" },
      { key: "nav.how", to: "/how-it-works" },
      { key: "footer.contactLink", to: "/contact" },
    ],
  },
  {
    title: "footer.legal",
    links: [
      { key: "footer.privacy", to: "/privacy" },
      { key: "footer.terms", to: "/terms" },
    ],
  },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email.trim())) {
      setStatus({ type: "error", message: "Enter a valid email address." });
      return;
    }
    // TODO (backend phase): POST /api/newsletter { email }
    setStatus({ type: "success", message: "You're subscribed. Thank you!" });
    setEmail("");
  };

  return (
    <footer className="bg-brand-900 text-[#CFE3DF]">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="space-y-5">
          <Logo theme="dark" size={40} tagline />
          <p className="max-w-sm text-sm leading-relaxed">{t("footer.about")}</p>

          <form onSubmit={onSubmit} noValidate className="max-w-sm">
            <label htmlFor="newsletter-email" className="mb-2 block text-sm font-medium text-white">
              {t("footer.newsletter")}
            </label>
            <div className="flex gap-2">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status.type !== "idle") setStatus({ type: "idle", message: "" });
                }}
                placeholder={t("footer.emailPlaceholder")}
                aria-invalid={status.type === "error"}
                aria-describedby="newsletter-msg"
                className="w-full min-w-0 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-harvest-500 focus:outline-none focus:ring-2 focus:ring-harvest-500/30"
              />
              <Button type="submit" variant="cta" size="sm">
                {t("footer.subscribe")}
              </Button>
            </div>
            <p
              id="newsletter-msg"
              role={status.type === "error" ? "alert" : "status"}
              className={`mt-2 flex min-h-5 items-center gap-1.5 text-sm ${status.type === "error" ? "text-[#FFB4B4]" : "text-[#A7E3A0]"}`}
            >
              {status.type === "success" && <CheckCircle2 className="h-4 w-4" aria-hidden="true" />}
              {status.message}
            </p>
          </form>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={t(col.title)}>
            <h3 className="mb-4 text-sm font-bold text-white">{t(col.title)}</h3>
            <ul className="space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-harvest-500">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-4 py-6 text-sm md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} FieldToFork. {t("footer.rights")}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label={t("footer.contact")}>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" /> hello@fieldtofork.pk
            </li>
            <li className="flex items-center gap-2" dir="ltr">
              <Phone className="h-4 w-4" aria-hidden="true" /> +92 300 0000000
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" /> Pakistan
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
