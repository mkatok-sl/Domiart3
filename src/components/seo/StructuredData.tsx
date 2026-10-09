import { AUTHOR, FAQ_DATA, FEATURED, HERO, SITE } from "@/data/content";
import { plainText } from "@/lib/format-text";

/** JSON-LD for Article, BreadcrumbList and FAQPage rich results. */
export function StructuredData() {
  const pageUrl = typeof window !== "undefined" ? window.location.href.split("#")[0] : "";
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: HERO.h1,
        description: plainText(HERO.lede),
        inLanguage: "uk-UA",
        datePublished: SITE.published,
        dateModified: SITE.updated,
        author: { "@type": "Person", name: AUTHOR.name, jobTitle: AUTHOR.role },
        publisher: { "@type": "Organization", name: SITE.name },
        mainEntityOfPage: pageUrl,
        about: { "@type": "Organization", name: FEATURED.name, url: `https://${FEATURED.domain}/` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Головна", item: pageUrl },
          { "@type": "ListItem", position: 2, name: "Огляди казино" },
          { "@type": "ListItem", position: 3, name: FEATURED.name },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_DATA.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON is escaped so that "</script>" inside copy can never break out.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
