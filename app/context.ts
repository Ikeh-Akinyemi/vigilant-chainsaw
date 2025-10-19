import { createContext } from "react-router";
import type { User } from "~/auth";

export const userContext = createContext<User | null>(null);