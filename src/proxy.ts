import { NextResponse, type NextRequest } from "next/server";
import {
  contentSignal,
  discoveryLinkHeader,
  markdownResponse,
} from "@/lib/agentDiscovery";

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

export function proxy(request: NextRequest) {
  const isReadRequest = request.method === "GET" || request.method === "HEAD";

  if (isReadRequest && acceptsMarkdown(request.headers.get("accept"))) {
    return markdownResponse(request.method !== "HEAD");
  }

  const response = NextResponse.next();
  response.headers.set("Content-Signal", contentSignal);
  response.headers.set("Link", discoveryLinkHeader);
  response.headers.append("Vary", "Accept");

  return response;
}

export const config = {
  matcher: "/",
};
