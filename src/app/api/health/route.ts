import { contentSignal, siteUrl } from "@/lib/agentDiscovery";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "kartik-agarwal-portfolio-api",
      version: "1.0.0",
      documentation: `${siteUrl}/docs/api`,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store",
        "Content-Signal": contentSignal,
      },
    },
  );
}

export function HEAD() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
      "Content-Signal": contentSignal,
    },
  });
}
