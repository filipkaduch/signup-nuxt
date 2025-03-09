import useSignupFormStore from "~/stores/SignupFormStore";

export default defineNuxtRouteMiddleware((to) => {
  const restrictedPaths = ['/success'];

  const signupFormStore = useSignupFormStore();

  const { missingInfo } = signupFormStore;

  if (restrictedPaths.includes(to.path) && missingInfo) {
    return navigateTo('/');
  }
});