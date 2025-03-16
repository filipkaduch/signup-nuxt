import type { AuthResponse } from "~/types/auth";

export default defineEventHandler((event): AuthResponse => {
  setCookie(event, 'auth_session', '', { maxAge: -1, path: '/' });

  return { success: true };
});