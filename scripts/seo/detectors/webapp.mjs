export function detectWebAppFromHtml($) {
  const h1 = $("h1, h2").filter((_, el) => /(калькулятор|calculator|вычислит|расчёт|конфигуратор)/i.test($(el).text())).first();
  if (!h1.length) return null;
  return { "@context":"https://schema.org","@type":"WebApplication", name: h1.text().trim() || "Калькулятор", applicationCategory: "UtilityApplication", offers: { "@type":"Offer", price: "0", priceCurrency: "RUB" }, operatingSystem: "Web" };
}
