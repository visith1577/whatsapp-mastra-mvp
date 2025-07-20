import { groq } from "@ai-sdk/groq";
import { Agent } from "@mastra/core/agent";
import { z } from 'zod';
import { shortTermMemory } from "../tools/index";

export const routerSchema = z.object({
    route: z.enum(["chat", "booking", "schedule"]),
    userQuery: z.string()
})

export const routerAgent = new Agent({
  name: "Router Agent",
  model: groq("qwen/qwen3-32b"),
  instructions: `
    Your task is to route user messages to the appropriate agent. 
    You have the following possible routes.
    - chat: small talk and answers based on history provided. range from greatings to could you summarise our conversation.
    - booking: booking path is followed if user expresses intent to make appointment to vet/hospital
    - schedule: If use wants to check avaialbility or search on a certain Vet/hospital this path is followed. usually prior to making a booking this needs to be checked.
`,
  memory: shortTermMemory
});
