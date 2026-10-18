// Mantiene compatibile /sitemap.xml, già registrata in Google Search Console.
// L'integrazione ufficiale @astrojs/sitemap crea automaticamente
// sitemap-index.xml e sitemap-0.xml durante ogni build Astro.
export const prerender = true;

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://dottclemente.it/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
