import { groq } from "@ai-sdk/groq";
import { Agent } from "@mastra/core/agent";
import { shortTermMemory } from "../tools";

export const bookingAgent = new Agent({
  name: "Booking Agent",
  model: groq("qwen/qwen3-32b"),
  instructions: `
    You are a appointment booking agent. You will check appointment schedules and make appointments on behalf of users. \n
    You are able to use your tools to make sure to recommend users with nearby hospitals and vets and make suitable booking as per user request. you can also use your information on the users pet to find most suitable hospital or vet and make appointment with user validation. \n 
    always make sure you have user permission and enough supporting data before proceeding with action.
`,
  memory: shortTermMemory
});
