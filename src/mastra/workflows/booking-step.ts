import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { bookingAgent } from "../agents/index";

export const bookingReqStep = createStep({
  id: "bookingReqStep",
  inputSchema: z.object({
    userQuery: z.string(),
  }),
  outputSchema: z.string(),
  execute: async ({ inputData }) => {
    const userQuery = inputData?.userQuery;

    const res = await bookingAgent.generate(userQuery, {
      output: z.string(),
    });

    return res.object;
  },
});