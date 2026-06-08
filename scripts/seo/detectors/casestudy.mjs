export function detectCaseStudyFromHtml(text) {
  if (!/(кейс|case\s*study|внедрен|миграц)/i.test(text)) return null;
  const cm = text.match(/(?:клиент|заказчик|компани[яи]|customer|client)[:\s]+"?([А-ЯA-Z][^"<,\n]{3,50})/i);
  if (!cm) return null;
  const pm = text.match(/(?:проблем[аы]|problem)[:\s]([^.<\n]{15,150})/i);
  const rm = text.match(/(?:результат|result|итог|экономия|сократили|увеличили)[:\s]*([^.<\n]{10,150})/i);
  return { "@context":"https://schema.org","@type":"CaseStudy", headline: "Case Study", about: { "@type":"Organization", name: cm[1].trim() }, problem: pm?.[1]?.trim()||"Optimization needed", solution: "Solution implemented", result: rm?.[1]?.trim()||"Positive outcome" };
}
