"use client";

import { useEffect } from "react";
import { getChatbotReply } from "@/lib/kartikChatbot";

type WebMCPTool = {
  name: string;
  title?: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  annotations?: {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute: (input: Record<string, unknown>) => Promise<unknown>;
};

type WebMCPModelContext = {
  registerTool: (
    tool: WebMCPTool,
    options?: { signal?: AbortSignal; exposedTo?: string[] },
  ) => Promise<void>;
};

declare global {
  interface Document {
    modelContext?: WebMCPModelContext;
  }
}

const publicProfile = {
  name: "Kartik Agarwal",
  role: "Alpha Quant Researcher",
  summary:
    "Cross-asset quant researcher and former engineering lead focused on systematic investing, macro signals, machine learning, portfolio construction, and production research systems.",
  location: "Raleigh, North Carolina, United States",
  email: "kartikagarwal777@gmail.com",
  website: "https://kartik-agarwal.com/",
  resume: "https://kartik-agarwal.com/Kartik_Agarwal.pdf",
  linkedin: "https://www.linkedin.com/in/kartik-agarwal/",
  substack: "https://kartikag.substack.com",
};

const WebMCPTools = () => {
  useEffect(() => {
    const modelContext = document.modelContext;

    if (!modelContext) {
      return;
    }

    const controller = new AbortController();

    const tools: WebMCPTool[] = [
      {
        name: "ask-kartik-portfolio",
        title: "Ask Kartik's Portfolio",
        description:
          "Answer a question from Kartik Agarwal's curated public professional profile, resume, LinkedIn, website, and Substack knowledge base.",
        inputSchema: {
          type: "object",
          additionalProperties: false,
          required: ["question"],
          properties: {
            question: {
              type: "string",
              minLength: 1,
              maxLength: 500,
              description:
                "A question about Kartik's professional background, quant research, engineering work, skills, education, projects, writing, or contact details.",
            },
          },
        },
        annotations: {
          readOnlyHint: true,
          untrustedContentHint: false,
        },
        execute: async (input) => {
          const question = typeof input.question === "string" ? input.question.trim() : "";

          if (!question || question.length > 500) {
            return {
              error: "Provide a question between 1 and 500 characters.",
            };
          }

          return getChatbotReply(question);
        },
      },
      {
        name: "get-kartik-public-profile",
        title: "Get Kartik's Public Profile",
        description:
          "Return Kartik Agarwal's verified public portfolio summary and authoritative contact and profile links.",
        inputSchema: {
          type: "object",
          additionalProperties: false,
          properties: {},
        },
        annotations: {
          readOnlyHint: true,
          untrustedContentHint: false,
        },
        execute: async () => publicProfile,
      },
    ];

    void Promise.allSettled(
      tools.map((tool) =>
        modelContext.registerTool(tool, {
          signal: controller.signal,
        }),
      ),
    );

    return () => controller.abort();
  }, []);

  return null;
};

export default WebMCPTools;
