import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const dictionary = {
  en: {
    "nav.home": "Home",
    "nav.marketplace": "Marketplace",
    "nav.mandi": "Mandi prices",
    "nav.weather": "Weather",
    "nav.how": "How it works",
    "nav.about": "About",
    "nav.login": "Log in",
    "nav.start": "Get started",
    "nav.menu": "Open menu",
    "nav.close": "Close menu",
    "footer.tagline": "Direct farmer-buyer trade",
    "footer.about": "A marketplace that connects Pakistani farmers directly with buyers: fair prices, fresh crops, no middlemen.",
    "footer.platform": "Platform",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.contact": "Contact",
    "footer.disease": "AI crop doctor",
    "footer.aboutLink": "About us",
    "footer.contactLink": "Contact us",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Terms and conditions",
    "footer.newsletter": "Get mandi price updates",
    "footer.emailPlaceholder": "name@example.com",
    "footer.subscribe": "Subscribe",
    "footer.rights": "All rights reserved.",
  },
  ur: {
    "nav.home": "ہوم",
    "nav.marketplace": "مارکیٹ پلیس",
    "nav.mandi": "منڈی بھاؤ",
    "nav.weather": "موسم",
    "nav.how": "کیسے کام کرتا ہے",
    "nav.about": "ہمارے بارے میں",
    "nav.login": "لاگ ان",
    "nav.start": "شروع کریں",
    "nav.menu": "مینو کھولیں",
    "nav.close": "مینو بند کریں",
    "footer.tagline": "کھیت سے سیدھا آپ تک",
    "footer.about": "ایک مارکیٹ پلیس جو پاکستانی کسانوں کو براہِ راست خریداروں سے ملاتی ہے: مناسب قیمت، تازہ فصل، بغیر بیچ کے آدمی۔",
    "footer.platform": "پلیٹ فارم",
    "footer.company": "کمپنی",
    "footer.legal": "قانونی",
    "footer.contact": "رابطہ",
    "footer.disease": "اے آئی فصل ڈاکٹر",
    "footer.aboutLink": "ہمارے بارے میں",
    "footer.contactLink": "ہم سے رابطہ کریں",
    "footer.privacy": "پرائیویسی پالیسی",
    "footer.terms": "شرائط و ضوابط",
    "footer.newsletter": "منڈی کے نرخوں کی اپڈیٹس حاصل کریں",
    "footer.emailPlaceholder": "name@example.com",
    "footer.subscribe": "سبسکرائب کریں",
    "footer.rights": "جملہ حقوق محفوظ ہیں۔",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("f2f-lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    try {
      localStorage.setItem("f2f-lang", lang);
    } catch {
      /* storage unavailable: ignore */
    }
  }, [lang]);

  const toggleLanguage = useCallback(() => setLang((l) => (l === "en" ? "ur" : "en")), []);
  const t = useCallback((key) => dictionary[lang][key] ?? dictionary.en[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, toggleLanguage, t }), [lang, toggleLanguage, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
