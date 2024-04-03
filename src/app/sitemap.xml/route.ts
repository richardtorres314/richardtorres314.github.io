// Workaround for Next.js issue: https://github.com/vercel/next.js/issues/59136
function getSitemap() {
  const map = [
    {
      url: "https://richardtorres.co",
      lastModified: new Date()
    },
    {
      url: "https://richardtorres.co/blog",
      lastModified: new Date()
    },
    {
      url: "https://richardtorres.co/contributions",
      lastModified: new Date()
    },
    {
      url: "https://richardtorres.co/freebies",
      lastModified: new Date()
    }
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${map
      .map(
        (item) => `
            <url>
              <loc>${item.url}</loc>
              <lastmod>${item.lastModified.toISOString()}</lastmod>
            </url>
          `,
      )
      .join('')}
    </urlset>
  `;
}

export async function GET() {
  return new Response(getSitemap(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
