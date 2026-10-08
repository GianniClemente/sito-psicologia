export const prerender = true;

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dottclemente.it/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
  <url>
    <loc>https://dottclemente.it/ansia/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
  <url>
    <loc>https://dottclemente.it/ansia/sintomi/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
  <url>
    <loc>https://dottclemente.it/ansia/sintomi-fisici/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
  <url>
    <loc>https://dottclemente.it/ansia/ansia-sociale/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
  <url>
    <loc>https://dottclemente.it/ansia/ansia-generalizzata/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
  <url>
    <loc>https://dottclemente.it/ansia/ansia-da-prestazione/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
  <url>
    <loc>https://dottclemente.it/ansia/attacchi-di-panico/</loc>
    <lastmod>2026-10-08</lastmod>
  </url>
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
