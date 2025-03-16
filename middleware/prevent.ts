export default defineNuxtRouteMiddleware(async (to) => {
  const restrictedPaths = ['/success'];

  const data = await $fetch('/api/auth/session', {
    credentials: 'include',
  });

  if (process.client && restrictedPaths.includes(to.path) && !data.isAuthenticated) {
    return navigateTo('/');
  }
});