import { markdownResponse } from "@/lib/agentDiscovery";

export function GET() {
  return markdownResponse();
}

export function HEAD() {
  return markdownResponse(false);
}
