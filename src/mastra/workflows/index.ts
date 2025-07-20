import { createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";
import { routeStep } from "./router-step";


export const mbbWorkflow = createWorkflow({
  id: "mybawbaw-workflow",
  inputSchema: z.object({
    userQuery: z.string(),
  }),
  outputSchema: z.object({
    output: z.string(),
  }),
}).then(routeStep)

//   .branch([
//     [async ({ inputData: { value } }) => (value === "chat"), chatStep],
//     [async ({ inputData: { value } }) => (value === "booking"), bookingStep]
//   ])
//   .commit();
