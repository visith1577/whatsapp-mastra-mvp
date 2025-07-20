import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { chatAgent } from "../agents/index";

export const chatStep = createStep({
  id: "chatResponseStep",
  inputSchema: z.object({
    userQuery: z.string(),
  }),
  outputSchema: z.string(),
  execute: async ({ inputData }) => {
    const userQuery = inputData?.userQuery;

    const res = await chatAgent.generate(userQuery, {
      output: z.string(),
    });

    return res.object;
  },
});