import type { AuthResponse, AuthSession } from "~/types/auth";
import type { SignupFields } from "~/types/signup";

const useAuthentication = () => {
  const signupCall = async (body: SignupFields): Promise<AuthSession> => {
    const response = await $fetch('/api/auth/signup', {
      method: 'POST',
      body,
    });

    return response;
  };

  const signoutCall = async (): Promise<AuthResponse> => {
    const response = await $fetch('/api/auth/signout', {
      method: 'POST',
    });

    return response;
  };

  return {
    signoutCall,
    signupCall,
  };
};

export default useAuthentication;
