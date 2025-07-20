import { groq } from "@ai-sdk/groq";
import { Agent } from "@mastra/core/agent";
import {
  getRateUpVetsTool,
  getVetsTool,
  mem0MemorizeTool,
  mem0RememberTool,
  shortTermMemory,
} from "@/mastra/tools";

export const chatAgent = new Agent({
  name: "Chat Agent",
  tools: {
    getRateUpVetsTool,
    getVetsTool,
    mem0MemorizeTool,
    mem0RememberTool,
  },
  model: groq("mistral-saba-24b"),
  instructions: `
      You are a helpful assistant.
`,
  memory: shortTermMemory,
});
