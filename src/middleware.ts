import { NextResponse, type NextRequest } from "next/server";
import {
  contentSignal,
  discoveryLinkHeader,
  markdownResponse,
} from "@/lib/agentDiscovery";

const canonicalHost = "kartik-agarwal.com";
const wwwHost = `www.${canonicalHost}`;
const nonIndexablePaths = new Set([
  "/.well-known/api-catalog",
  "/docs/api",
  "/openapi.json",
  "/portfolio.md",
  "/Kartik_Agarwal.pdf",
]);

function acceptsMarkdown(acceptHeader: string | null) {
  if (!acceptHeader) {
    return false;
  }

  return acceptHeader.split(",").some((mediaRange) => {
    const [mediaType, ...parameters] = mediaRange.split(";").map((value) => value.trim().toLowerCase());
    const quality = parameters.find((parameter) => parameter.startsWith("q="));

    return mediaType === "text/markdown" && quality !== "q=0";
  });
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":", 1)[0].toLowerCase();
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",", 1)[0]
    .trim()
    .toLowerCase();
  const isProductionHost = host === canonicalHost || host === wwwHost;

  if (isProductionHost && (host === wwwHost || forwardedProtocol === "http")) {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.protocol = "https:";
    canonicalUrl.hostname = canonicalHost;
    canonicalUrl.port = "";

    return NextResponse.redirect(canonicalUrl, 308);
  }

  const isReadRequest = request.method === "GET" || request.method === "HEAD";

  if (
    request.nextUrl.pathname === "/" &&
    isReadRequest &&
    acceptsMarkdown(request.headers.get("accept"))
  ) {
    return markdownResponse(request.method !== "HEAD");
  }

  const response = NextResponse.next();

  if (request.nextUrl.pathname === "/") {
    response.headers.set("Content-Signal", contentSignal);
    response.headers.set("Link", discoveryLinkHeader);
    response.headers.append("Vary", "Accept");
  }

  if (
    nonIndexablePaths.has(request.nextUrl.pathname) ||
    request.nextUrl.pathname.startsWith("/.well-known/agent-skills/") ||
    request.nextUrl.pathname.startsWith("/api/")
  ) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
