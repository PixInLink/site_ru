export function detectFaqFromHtml(html) {
  const items = [];
  const accordionRegex = /<button[^>]*data-bs-[^>]*>[^<]*([\s\S]*?)<\/button>[\s\S]*?<div[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = accordionRegex.exec(html)) !== null) {
    const q = m[1].replace(/<[^>]+>/g, "").trim();
    const a = m[2].replace(/<[^>]+>/g, "").trim();
    if (q && a && q.length > 5 && a.length > 10) items.push({ question: q, answer: a });
  }
  const mdFaqRegex = /\*\*Q:\s*(.+?)\*\*\s*([\s\S]*?)(?=\*\*Q:\s*|<\/)/gi;
  while ((m = mdFaqRegex.exec(html)) !== null) {
    const q = m[1].trim();
    const a = m[2].replace(/^\s*\*\*A:\s*\*\*?\s*/i, "").replace(/<[^>]+>/g, "").trim();
    if (q && a && q.length > 5 && a.length > 15) items.push({ question: q, answer: a });
  }
  if (items.length < 3) {
    const faqSectionRegex = /<(?:section|div)[^>]*id="faq"[^>]*>([\s\S]*?)<\/(?:section|div)>/i;
    const faqSection = html.match(faqSectionRegex)?.[1];
    if (faqSection) {
      const qaRegex = /<(?:strong|h[34])[^>]*>([^<]+)<\/(?:strong|h[34])>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
      let m;
      while ((m = qaRegex.exec(faqSection)) !== null) {
        const q = m[1].replace(/<[^>]+>/g, "").trim();
        const a = m[2].replace(/<[^>]+>/g, "").trim();
        if (q && a && q.length > 5 && a.length > 15 && !items.some(i => i.question === q)) {
          items.push({ question: q, answer: a });
        }
      }
    }
  }
  if (items.length < 3) {
    const rawFaqRegex = /<(?:strong|b)[^>]*>Q:\s*<\/\1>\s*<(?:p|div)[^>]*>([\s\S]*?)<\/(?:p|div)>\s*<(?:strong|b)[^>]*>A:\s*<\/\1>\s*<(?:p|div)[^>]*>([\s\S]*?)<\/(?:p|div)>/gi;
    let m;
    while ((m = rawFaqRegex.exec(html)) !== null) {
      const q = m[1].replace(/<[^>]+>/g, "").trim();
      const a = m[2].replace(/<[^>]+>/g, "").trim();
      if (q && a && q.length > 5 && a.length > 15 && !items.some(i => i.question === q)) {
        items.push({ question: q, answer: a });
      }
    }
  }
  return items.length >= 3 ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) } : null;
}

export function detectHowToFromHtml(html) {
  const steps = [];
  const stepCardRegex = /<div[^>]*class="[^"]*step-number[^"]*"[^>]*>([^<]+)<\/div>\s*(?:<h[34][^>]*>([^<]+)<\/h[34]>\s*)?<p[^>]*>([^<]+)<\/p>/gi;
  let m;
  while ((m = stepCardRegex.exec(html)) !== null) {
    const name = m[2]?.trim() || `Шаг ${m[1].trim()}`;
    steps.push({ name, text: m[3].trim() });
  }
  if (steps.length >= 3) {
    const titleMatch = html.match(/<h[12][^>]*>([^<]*)<\/h[12]>/i);
    return { "@context": "https://schema.org", "@type": "HowTo", name: titleMatch?.[1]?.trim() || "How-To Guide", step: steps.map((s, i) => ({ "@type": "HowToStep", position: String(i + 1), name: s.name, text: s.text })) };
  }
  return null;
}

export function detectItemListFromHtml(html) {
  const items = [];
  const factRegex = /<div[^>]*class="[^"]*fact-number[^"]*"[^>]*>([^<]+)<\/div>\s*<div[^>]*class="[^"]*fact-text[^"]*"[^>]*>([^<]+)<\/div>/gi;
  let m;
  while ((m = factRegex.exec(html)) !== null) {
    items.push({ name: `${m[1].trim()} — ${m[2].trim()}` });
  }
  if (items.length >= 3) {
    return { "@context": "https://schema.org", "@type": "ItemList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name })) };
  }
  return null;
}

export function detectQAPageFromHtml(html) {
  const featuredRegex = /<div[^>]*class="[^"]*(featured-snippet|block-answer)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  let m;
  while ((m = featuredRegex.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (text.length > 80) {
      const before = html.substring(0, m.index);
      const qMatch = before.match(/<h[234][^>]*>([^<]+\?[^<]*)<\/h[234]>/i);
      return { "@context": "https://schema.org", "@type": "QAPage", mainEntity: { "@type": "Question", name: qMatch?.[1]?.trim() || "Что это?", acceptedAnswer: { "@type": "Answer", text: text.slice(0, 500) } } };
    }
  }
  return null;
}

export function detectReviewFromHtml(html) {
  const reviews = [];
  const starRegex = /(★{1,5})/g; let m;
  while ((m = starRegex.exec(html)) !== null) {
    const rating = m[1].length;
    const after = html.substring(m.index + m[0].length, m.index + m[0].length + 400);
    const nm = after.match(/([А-ЯA-Z][а-яa-z]+\s+[А-ЯA-Z][а-яa-z]+)/);
    const tm = after.match(/[^.!?]{20,150}[.!?]/);
    if (nm && tm) reviews.push({ a: nm[1], r: rating, t: tm[0].trim(), d: new Date().toISOString().slice(0,10) });
  }
  if (reviews.length >= 1) {
    const avg = (reviews.reduce((s,r)=>s+r.r,0)/reviews.length).toFixed(1);
    return { "@context":"https://schema.org","@type":"AggregateRating", ratingValue: avg, bestRating:"5", worstRating:"1", ratingCount: String(reviews.length), reviewCount: String(reviews.length), review: reviews.map(r=>({ "@type":"Review", author:{ "@type":"Person", name: r.a }, reviewRating:{ "@type":"Rating", ratingValue: String(r.r) }, reviewBody: r.t, datePublished: r.d })) };
  }
  return null;
}

export function detectDefinedTermFromHtml(html) {
  const results = []; const re = /<h3[^>]*>([^<]{5,60})<\/h3>\s*<p[^>]*>([^<]{30,300})<\/p>/gi; let m, c=0;
  while ((m=re.exec(html))!==null&&c<5) {
    const t=m[1].trim(), d=m[2].replace(/<[^>]+>/g,"").trim();
    if (t&&d&&!/^[0-9.\s]+$/.test(t)){ results.push({"@context":"https://schema.org","@type":"DefinedTerm",name:t,description:d}); c++; }
  }
  return results;
}

export function detectImageObjectFromHtml(html) {
  const results = []; const re = /<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"[^>]*>/gi; let m, c=0;
  while ((m=re.exec(html))!==null&&c<3) {
    const s=m[1], a=m[2]||"Изображение";
    if (s&&a.length>5&&s.startsWith("http")) { results.push({"@context":"https://schema.org","@type":"ImageObject",name:a.slice(0,80),url:s,description:a.slice(0,120),contentUrl:s,encodingFormat:"image/png"}); c++; }
  }
  return results;
}

export function detectStatisticalFromHtml(html) {
  const clean = html.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(); const results = [];
  const re = /(\d+(?:[.,]\d+)?)\s*%(?:\s+([^.]{10,150}?(?:\([^)]*\d{4}[^)]*\)|по данным\s+[^.]+)))/gi; let m, c=0;
  while ((m=re.exec(clean))!==null&&c<3) {
    const v=Number.parseFloat(m[1].replace(",",".")), t=m[2].trim().replace(/\s+/g," ");
    if (v>0&&v<=100&&t.length>10&&t.length<200) { results.push({"@context":"https://schema.org","@type":"StatisticalVariable",name:t.slice(0,80),value:{"@type":"QuantitativeValue",value:v,unitText:"percent"},citation:{"@type":"Citation",text:t.slice(0,120)}}); c++; }
  }
  return results;
}

export function detectPersonFromHtml(html, siteName = "PixInLink") {
  const m = html.match(/(?:Автор|author)[:\s]*<[^>]*>([^<]+)<\/[^>]*>/i) || html.match(/(?:Автор|author)[:\s]*([А-ЯA-Z][а-яa-z]+\s+[А-ЯA-Z][а-яa-z]+)/);
  if (!m) return null;
  return {"@context":"https://schema.org","@type":"Person",name:m[1].trim(),affiliation:{"@type":"Organization",name:siteName}};
}

export function detectCaseStudyFromHtml(html, siteName = "PixInLink") {
  if (!/(кейс|case\s*study|внедрен|миграц)/i.test(html)) return null;
  const cm = html.match(/(?:клиент|заказчик|компани[яи]|customer|client)[:\s]*"?([А-ЯA-Z][^"<,\n]{3,50})/i);
  if (!cm) return null;
  const pm = html.match(/(?:проблем[аы]|problem)[:\s]([^.<\n]{15,150})/i);
  const rm = html.match(/(?:результат|result|итог|экономия|сократили|увеличили)[:\s]*([^.<\n]{10,150})/i);
  return {"@context":"https://schema.org","@type":"CaseStudy",headline:"Case Study",about:{"@type":"Organization",name:cm[1].trim()},problem:pm?.[1]?.trim()||"Optimization needed",solution:"Solution implemented",result:rm?.[1]?.trim()||"Positive outcome"};
}

export function detectTableFromHtml(html) {
  const tables = html.match(/<table[^>]*>[\s\S]*?<\/table>/gi); if (!tables?.length) return [];
  return tables.map(t => { const h=[]; const hr=/<th[^>]*>([^<]+)<\/th>/gi; let m; while ((m=hr.exec(t))!==null) h.push(m[1].trim());
    return h.length>=2 ? {"@context":"https://schema.org","@type":"Table",name:"Сравнение: "+h.slice(1,4).join(" vs ")} : null; }).filter(Boolean);
}

export function detectVideoFromHtml(html) {
  const results = []; const re = /<(?:iframe[^>]+src="(https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|vimeo\.com)[^"]*)"|<video[^>]*src="([^"]*)")[^>]*>/gi; let m;
  while ((m=re.exec(html))!==null) { const u=m[1]||m[2]; if (u) results.push({"@context":"https://schema.org","@type":"VideoObject",name:"Video",description:"Video on page",contentUrl:u,uploadDate:new Date().toISOString().slice(0,10)}); }
  return results;
}

export function detectPlanActionFromHtml(html) {
  const phases = []; const re = /(?:Phase\s+|Этап\s+|Q[1-4]\s*[-–]\s*Q[1-4]\s*)(\d{4})?[:\s]*([^<]{10,80})/gi; let m;
  while ((m=re.exec(html))!==null) { if (m[2]?.trim().length>5) phases.push({phase:m[2].trim(),period:m[1]||"2025-2026",actions:m[2].trim(),results:"Результат запланирован"}); }
  if (phases.length>=2) return {"@context":"https://schema.org","@type":"PlanAction",name:"Roadmap",step:phases.map((p,i)=>({"@type":"OrganizeAction",position:i+1,name:p.phase,startTime:p.period,description:p.actions,result:p.results}))};
  return null;
}

export function detectWebAppFromHtml(html) {
  if (!/(калькулятор|calculator|вычислит|расчёт|конфигуратор)/i.test(html)) return null;
  const nm = html.match(/<h[12][^>]*>([^<]*(?:калькулятор|calculator)[^<]*)<\/h[12]>/i);
  return {"@context":"https://schema.org","@type":"WebApplication",name:nm?.[1]?.trim()||"Калькулятор",applicationCategory:"UtilityApplication",offers:{"@type":"Offer",price:"0",priceCurrency:"RUB"},operatingSystem:"Web"};
}

export function detectCitationFromHtml(html) {
  const sources = []; const re = /\[([^\]]{5,80})\]/g; let m, c=0;
  while ((m=re.exec(html))!==null&&c<5) { const t=m[1].replace(/<[^>]+>/g,"").trim(); if (/\d{4}/.test(t)&&t.length>10) { sources.push({text:t}); c++; } }
  if (sources.length<2) { const dr=/(?:согласно|по данным|according to|based on)\s+([^.<]{10,80})/gi; while ((m=dr.exec(html))!==null) sources.push({text:m[1].trim()}); }
  if (sources.length>=2) return {"@context":"https://schema.org","@type":"ScholarlyArticle",citation:sources.map(s=>({"@type":"Citation",text:s.text}))};
  return null;
}

export function detectMethodologyFromHtml(html, siteName = "PixInLink") {
  if (!/(методолог|methodology|как мы |how we |источник|первичный опыт)/i.test(html)) return null;
  const mm = html.match(/(?:методология|methodology|как мы (?:это |проверя|созда|исследу))[:\s]+([^.<]{30,300})/i);
  if (!mm) return null;
  return {"@context":"https://schema.org","@type":"ScholarlyArticle",name:siteName,methodology:mm[1].replace(/<[^>]+>/g,"").trim(),inLanguage:"ru"};
}

export function detectAllSchemasFromHtml(html, siteName = "PixInLink") {
  const schemas = [];
  const faq = detectFaqFromHtml(html); if (faq) schemas.push(faq);
  const howto = detectHowToFromHtml(html); if (howto) schemas.push(howto);
  const itemlist = detectItemListFromHtml(html); if (itemlist) schemas.push(itemlist);
  const qapage = detectQAPageFromHtml(html); if (qapage) schemas.push(qapage);
  const review = detectReviewFromHtml(html); if (review) schemas.push(review);
  const definedterm = detectDefinedTermFromHtml(html); if (definedterm.length) schemas.push(...definedterm);
  const imageobject = detectImageObjectFromHtml(html); if (imageobject.length) schemas.push(...imageobject);
  const statistical = detectStatisticalFromHtml(html); if (statistical.length) schemas.push(...statistical);
  const person = detectPersonFromHtml(html, siteName); if (person) schemas.push(person);
  const casestudy = detectCaseStudyFromHtml(html, siteName); if (casestudy) schemas.push(casestudy);
  const table = detectTableFromHtml(html); if (table.length) schemas.push(...table);
  const video = detectVideoFromHtml(html); if (video.length) schemas.push(...video);
  const planaction = detectPlanActionFromHtml(html); if (planaction) schemas.push(planaction);
  const webapp = detectWebAppFromHtml(html); if (webapp) schemas.push(webapp);
  const citation = detectCitationFromHtml(html); if (citation) schemas.push(citation);
  const methodology = detectMethodologyFromHtml(html, siteName); if (methodology) schemas.push(methodology);
  return schemas;
}
