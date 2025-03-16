import type { SessionResponse } from "~/types/auth";

export default defineEventHandler((event): SessionResponse => {
  const cookies = parseCookies(event);

  const sessionToken = cookies.auth_session;

  if (!sessionToken) {
    return { isAuthenticated: false };
  }

  const isValid = sessionToken.length > 10;

  return { isAuthenticated: isValid };
});