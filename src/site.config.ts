const viteEnv = (typeof import.meta !== "undefined" ? (import.meta as any).env : undefined) as Record<string, string> | undefined;
const currentLocale = viteEnv?.VITE_LOCALE ?? (typeof process !== "undefined" ? process.env.VITE_LOCALE : undefined) ?? "ru";
const isRu = currentLocale === "ru";
const currentEdition = viteEnv?.VITE_EDITION ?? (typeof process !== "undefined" ? process.env.VITE_EDITION : undefined) ?? "pro";
const isPro = currentEdition === "pro";
const isFree = !isPro;

export const siteConfig = {
  // Core — site identity
  name: "PixInLink",
  description: isRu
    ? "PixInLink — AI-генератор изображений. Создавай динамические картинки через URL для сайтов, рассылок и приложений."
    : "PixInLink — AI image generator. Create dynamic images via URL for websites, emails and apps.",
  url: viteEnv?.VITE_SITE_URL || "https://pixinlink.ru",
  defaultImage: "https://pixinlink.ru/api/v1/1200x630/pixinlink-ai-image-generator",
  locale: currentLocale,
  edition: currentEdition,
  isPro,
  isFree,

  // Language domains
  ruDomain: viteEnv?.VITE_RU_DOMAIN || "https://pixinlink.ru",
  enDomain: viteEnv?.VITE_EN_DOMAIN || "https://pixinlink.ru",

  tinkoffTerminalKey: "",

  // Organization
  orgType: "Organization",
  orgName: "PixInLink",
  orgLegalName: "PixInLink",
  logoUrl: "/images/logo-230x48.svg",
  foundingDate: "2024",

  // Contacts
  phone1: "",
  email1: "info@pixinlink.ru",

  stores: [] as {
    name: string; storeType?: string; address: string;
    lat?: string; lng?: string; phone?: string; hours?: string; image?: string;
  }[],
  priceRange: "от 0 до 999 $",
  currenciesAccepted: "USD",
  paymentAccepted: "Online",
  areaServed: "Worldwide",

  // Social links
  socialLinks: [
    "https://github.com/PixInLink",
    "https://pixinlink.ru",
  ],
};
