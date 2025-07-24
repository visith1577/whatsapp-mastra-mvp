import { createStep } from "@mastra/core/workflows";
import { z } from "zod";
import { bookingAgent, bookingReqSchema } from "../agents/index";

export const bookingReqStep = createStep({
  id: "bookingReqStep",
  inputSchema: z.object({
    userQuery: z.string(),
  }),
  outputSchema: bookingReqSchema,
  execute: async ({ inputData }) => {
    const userQuery = inputData?.userQuery;

    const prompt = `
      Determine if the user's intent is to proceed with booking or if clarification is needed.

      Booking Path:
      - If the user has provided at least one of the following: doctor name, hospital name, or appointment date/time, proceed with booking.

      Clarification Path:
      - If none of doctor name, hospital name, or appointment date/time are provided, ask the user to provide at least one of them.
      - If the user's history mentions any doctor or hospital name, ask the user if the appointment should proceed with the mentioned details.

      Current user query: ${userQuery}
    `

    const res = await bookingAgent.generate(prompt, {
      output: bookingReqSchema,
    });

    return res.object;
  },
});