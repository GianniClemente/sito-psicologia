export const prerender = true;

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://dottclemente.it/sitemap.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  );
}
