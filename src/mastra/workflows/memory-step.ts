import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { memoryAgent, memorySchema } from "../agents/index";

export const routeStep = createStep({
  id: "routeToStep",
  inputSchema: z.object({
    userQuery: z.string(),
  }),
  outputSchema: memorySchema,
  execute: async ({ inputData }) => {
    const userQuery = inputData?.userQuery;

    const res = await memoryAgent.generate(userQuery, {
      output: memorySchema,
    });

    return res.object;
  },
});