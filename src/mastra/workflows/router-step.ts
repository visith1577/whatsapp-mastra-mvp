import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { routerAgent, routerSchema } from "../agents/index";

export const routeStep = createStep({
  id: "routeToStep",
  inputSchema: z.object({
    userQuery: z.string(),
  }),
  outputSchema: routerSchema,
  execute: async ({ inputData }) => {
    const userQuery = inputData?.userQuery;

    const res = await routerAgent.generate(userQuery, {
      output: routerSchema,
    });

    return res.object;
  },
});