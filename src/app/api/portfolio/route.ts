import { getChatbotReply, getWelcomeReply } from "@/lib/kartikChatbot";
import {
  contentSignal,
  discoveryLinkHeader,
} from "@/lib/agentDiscovery";

const corsHeaders = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=300",
  "Content-Signal": contentSignal,
  Link: discoveryLinkHeader,
};

function errorResponse(detail: string, status: number) {
  return Response.json(
    {
      type: "about:blank",
      title: status === 400 ? "Invalid request" : "Request failed",
      status,
      detail,
    },
    {
      status,
      headers: {
        ...corsHeaders,
        "Cache-Control": "no-store",
        "Content-Type": "application/problem+json",
      },
    },
  );
}

function answerQuestion(question: unknown) {
  if (question === undefined || question === null || question === "") {
    return Response.json(getWelcomeReply(), { headers: corsHeaders });
  }

  if (typeof question !== "string") {
    return errorResponse("The question field must be a string.", 400);
  }

  const normalizedQuestion = question.trim();

  if (!normalizedQuestion) {
    return errorResponse("The question must not be empty.", 400);
  }

  if (normalizedQuestion.length > 500) {
    return errorResponse("The question must be 500 characters or fewer.", 400);
  }

  return Response.json(getChatbotReply(normalizedQuestion), { headers: corsHeaders });
}

export function GET(request: Request) {
  const url = new URL(request.url);
  return answerQuestion(url.searchParams.get("question") ?? undefined);
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return errorResponse("Use Content-Type: application/json.", 400);
  }

  try {
    const body = (await request.json()) as { question?: unknown };
    const response = answerQuestion(body.question);
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    return errorResponse("The request body must contain valid JSON.", 400);
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders,
      "Cache-Control": "public, max-age=86400",
    },
  });
}
