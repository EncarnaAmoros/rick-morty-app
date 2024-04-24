import { setupServer } from "msw/node";
import { handlers } from "./httpHandlers";

export const server = setupServer(...handlers);
