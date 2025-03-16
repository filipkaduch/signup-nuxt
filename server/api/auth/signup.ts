import type { AuthSession } from "~/types/auth";

export default defineEventHandler(async (event): Promise<AuthSession> => {
  const body = await readBody(event);

  const { consent, email, password } = body;

  const newUser = { id: '1', email, consent };

  const sessionToken = Buffer.from(`${password}:${Date.now()}`).toString('base64');

  setCookie(event, 'auth_session', sessionToken, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60,
  });

  return {
    success: true,
    user: newUser,
  };
});