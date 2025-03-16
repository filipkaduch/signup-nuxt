import { defineStore } from 'pinia';
import { FieldTypes  } from '~/types/signup';
import type { SignupFormErrors } from '~/types/signup';

const useSignupFormStore = defineStore('signupFormStore', () => {
  const { validateField } = useValidations();

  const newsConsent = ref<boolean>(false);

  const errors = ref<SignupFormErrors>({});

  const hasErrors = computed<boolean>(() => !!Object.keys(errors.value).length);

  const validateFields = (emailField: string, passwordField: string): boolean => {
    errors.value = {
      ...validateField(emailField, FieldTypes.EMAIL),
      ...validateField(passwordField, FieldTypes.PASSWORD),
    };

    return hasErrors.value;
  };

  return {
    errors,
    hasErrors,
    newsConsent,
    validateFields,
  };
});

export default useSignupFormStore;
