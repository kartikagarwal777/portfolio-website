import { contentSignal, siteUrl } from "@/lib/agentDiscovery";

const robotsText = `User-agent: *
Allow: /
Content-Signal: ${contentSignal}

Host: ${siteUrl}
Sitemap: ${siteUrl}/sitemap.xml
`;

export function GET() {
  return new Response(robotsText, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export function HEAD() {
  return new Response(null, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
