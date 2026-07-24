import { contentSignal, siteUrl } from "@/lib/agentDiscovery";

const openApiDocument = {
  openapi: "3.1.0",
  info: {
    title: "Kartik Agarwal Portfolio API",
    version: "1.0.0",
    description:
      "Read-only access to Kartik Agarwal's curated public professional profile and portfolio chatbot knowledge base.",
    contact: {
      name: "Kartik Agarwal",
      url: `${siteUrl}/`,
    },
  },
  servers: [{ url: siteUrl }],
  paths: {
    "/api/portfolio": {
      get: {
        operationId: "askPortfolio",
        summary: "Ask a question about Kartik Agarwal's public professional profile",
        parameters: [
          {
            name: "question",
            in: "query",
            required: false,
            description: "A professional-profile question of up to 500 characters. Omit it to receive usage guidance.",
            schema: { type: "string", maxLength: 500 },
          },
        ],
        responses: {
          "200": {
            description: "A curated profile response",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ProfileReply" },
              },
            },
          },
          "400": {
            description: "Invalid question",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/Problem" },
              },
            },
          },
        },
      },
      post: {
        operationId: "askPortfolioWithJson",
        summary: "Ask a profile question using a JSON request body",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["question"],
                additionalProperties: false,
                properties: {
                  question: { type: "string", minLength: 1, maxLength: 500 },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "A curated profile response",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ProfileReply" },
              },
            },
          },
          "400": {
            description: "Invalid request",
            content: {
              "application/problem+json": {
                schema: { $ref: "#/components/schemas/Problem" },
              },
            },
          },
        },
      },
      options: {
        operationId: "portfolioCorsPreflight",
        summary: "CORS preflight",
        responses: {
          "204": { description: "CORS policy response" },
        },
      },
    },
    "/api/health": {
      get: {
        operationId: "getPortfolioApiHealth",
        summary: "Check API availability",
        responses: {
          "200": {
            description: "Service status",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["status", "service", "version"],
                  properties: {
                    status: { type: "string", const: "ok" },
                    service: { type: "string" },
                    version: { type: "string" },
                    documentation: { type: "string", format: "uri" },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      KnowledgeSource: {
        type: "object",
        required: ["id", "label", "href"],
        properties: {
          id: { type: "string", enum: ["resume", "website", "linkedin", "substack"] },
          label: { type: "string" },
          href: { type: "string", format: "uri-reference" },
        },
      },
      ProfileReply: {
        type: "object",
        required: ["headline", "points", "sources", "suggestions"],
        properties: {
          headline: { type: "string" },
          points: { type: "array", items: { type: "string" } },
          sources: {
            type: "array",
            items: { $ref: "#/components/schemas/KnowledgeSource" },
          },
          suggestions: { type: "array", items: { type: "string" } },
          isFallback: { type: "boolean" },
        },
      },
      Problem: {
        type: "object",
        required: ["type", "title", "status", "detail"],
        properties: {
          type: { type: "string", format: "uri-reference" },
          title: { type: "string" },
          status: { type: "integer", minimum: 400, maximum: 599 },
          detail: { type: "string" },
        },
      },
    },
  },
} as const;

function openApiResponse(body = true) {
  return new Response(body ? JSON.stringify(openApiDocument, null, 2) : null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Signal": contentSignal,
      "Content-Type": "application/vnd.oai.openapi+json;version=3.1;charset=utf-8",
    },
  });
}

export function GET() {
  return openApiResponse();
}

export function HEAD() {
  return openApiResponse(false);
}
