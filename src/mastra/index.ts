import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { routerAgent } from "./agents";
import { createLogger, LogLevel } from "@mastra/core/logger";

const LOG_LEVEL = process.env.LOG_LEVEL as LogLevel || "info";
const ENV = process.env.NODE_ENV || "development";

export const mastra = new Mastra({
  agents: { 
    routerAgent
  },
  storage: new LibSQLStore({
    url: ":memory:"
  }),
  logger: createLogger({
    level: LOG_LEVEL,
  }),
  server: {
    // Disable CORS for development
    cors: ENV === "development" ? {
      origin: "*",
      allowMethods: ["*"],
      allowHeaders: ["*"],
    } : undefined,
  },
});