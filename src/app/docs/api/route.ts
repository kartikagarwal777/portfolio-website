import {
  contentSignal,
  discoveryLinkHeader,
  siteUrl,
} from "@/lib/agentDiscovery";

const apiDocumentation = `# Kartik Agarwal Portfolio API

The Portfolio API provides read-only access to Kartik Agarwal's curated public professional profile. It uses the same knowledge base as the portfolio chatbot and does not require authentication.

## Ask a question

\`\`\`http
GET ${siteUrl}/api/portfolio?question=What%20is%20Kartik%20best%20at%3F
Accept: application/json
\`\`\`

You can also send JSON:

\`\`\`http
POST ${siteUrl}/api/portfolio
Content-Type: application/json

{"question":"Summarize Kartik's quant experience"}
\`\`\`

Questions must be 500 characters or fewer. Responses contain a headline, supporting points, source links, and suggested follow-up questions.

## Discovery

- OpenAPI 3.1 description: ${siteUrl}/openapi.json
- RFC 9727 API catalog: ${siteUrl}/.well-known/api-catalog
- Health endpoint: ${siteUrl}/api/health

## Usage policy

- The API is public and read-only.
- No authentication or registration is required.
- Use the returned source links when verifying or citing profile information.
- Do not infer private facts, a current employer, or credentials that are not present in the curated response.
`;

function documentationResponse(body = true) {
  return new Response(body ? apiDocumentation : null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Language": "en-US",
      "Content-Signal": contentSignal,
      "Content-Type": "text/markdown; charset=utf-8",
      Link: discoveryLinkHeader,
    },
  });
}

export function GET() {
  return documentationResponse();
}

export function HEAD() {
  return documentationResponse(false);
}
