import { Memory } from "@mastra/memory";
import { ToolCallFilter, TokenLimiter } from "@mastra/memory/processors";

export const shortTermMemory = new Memory({
  processors: [
    new ToolCallFilter(),
    // Always place TokenLimiter last
    new TokenLimiter(127000),
  ],
  options: {
    threads: {
      generateTitle: true,
    },
    lastMessages: 10,
    workingMemory: {
      enabled: true,
      scope: "thread",
    //   template: "Recent chat: {{lastMessages}}",
    },
  },
});
