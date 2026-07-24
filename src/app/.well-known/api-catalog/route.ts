import {
  contentSignal,
  discoveryLinkHeader,
  siteUrl,
} from "@/lib/agentDiscovery";

const apiCatalog = {
  linkset: [
    {
      anchor: `${siteUrl}/api/portfolio`,
      "service-desc": [
        {
          href: `${siteUrl}/openapi.json`,
          type: "application/vnd.oai.openapi+json",
        },
      ],
      "service-doc": [
        {
          href: `${siteUrl}/docs/api`,
          type: "text/markdown",
        },
      ],
      status: [
        {
          href: `${siteUrl}/api/health`,
          type: "application/json",
        },
      ],
    },
  ],
};

const catalogHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  "Content-Signal": contentSignal,
  "Content-Type":
    'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"; charset=utf-8',
  Link: discoveryLinkHeader,
};

export function GET() {
  return new Response(JSON.stringify(apiCatalog, null, 2), {
    headers: catalogHeaders,
  });
}

export function HEAD() {
  return new Response(null, {
    headers: catalogHeaders,
  });
}
