import { groq } from "@ai-sdk/groq";
import { Agent } from "@mastra/core/agent";


export const petAgent = new Agent({
  name: "Pet Details Agent",
  model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
  instructions: `
    Your the pet expert on mybawbaw. You have access to the pet records for a provided user. the authenticated users details will be provided to you.
    You can retrieve information on the pets of the owner, their petbook records providing info on vet visits, prior medications and prescriptions.
    You have the ability to retrieve that information and provide the user to answer their query provided that necessary info are available.
`,
});
