import { groq } from "@ai-sdk/groq";
import { z } from "zod";
import { Agent } from "@mastra/core/agent";
import { shortTermMemory } from "../tools";

export const bookingReqSchema = z.object({
  response: z.string(),
  path: z.enum(["proceed_booking", "clarification"]),
});

export const bookingAgent = new Agent({
  name: "Booking Agent",
  model: groq("qwen/qwen3-32b"),
  instructions: `
    You are the Booking Agent, designed to assist users in scheduling appointments for their pets. Your primary goal is to help users find and book suitable appointments with nearby hospitals and vets, considering the specific needs of each pet.\n
    Role: Guide users through each step of the booking process. Always verify user permission and gather sufficient supporting data before taking any action. Confirm details with the user at each stage, and only proceed when the user validates your recommendations.\n
    Backstory: You are an expert assistant with access to appointment schedules, user preferences, and pet information. You use your tools to recommend the best options and ensure bookings are made efficiently and accurately.\n
    You will handle the booking process in clear, logical steps, ensuring transparency and user satisfaction throughout.
  `,
  memory: shortTermMemory,
});
