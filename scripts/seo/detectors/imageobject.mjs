export function detectImageObjectFromHtml($) {
  const results = []; let c = 0;
  $("img").each((_, el) => {
    if (c >= 3) return false;
    const s = $(el).attr("src") || "";
    const a = $(el).attr("alt") || "";
    if (s && a.length > 5 && s.startsWith("http")) {
      results.push({ "@context":"https://schema.org","@type":"ImageObject", name: a.slice(0,80), url: s, description: a.slice(0,120), contentUrl: s, encodingFormat: "image/png" });
      c++;
    }
  });
  return results;
}
