import { defineStore } from 'pinia';
import { FieldTypes  } from '~/types/signup';
import type { SignupFormErrors } from '~/types/signup';

const useSignupFormStore = defineStore('signupFormStore', () => {
  const { validateField } = useValidations();

  const email = ref<string>('');

  const password = ref<string>('');

  const newsConsent = ref<boolean>(false);

  const errors = ref<SignupFormErrors>({});

  const missingInfo = computed<boolean>(() => !email.value || !password.value);

  const hasErrors = computed<boolean>(() => !!Object.keys(errors.value).length);

  const validateFields = (emailField: string, passwordField: string): void => {
    errors.value = {};

    errors.value = {
      ...validateField(emailField, FieldTypes.EMAIL),
      ...validateField(passwordField, FieldTypes.PASSWORD),
    };

    if (!hasErrors.value) {
      email.value = emailField;

      password.value = passwordField;
    }
  };

  return {
    email,
    errors,
    hasErrors,
    missingInfo,
    newsConsent,
    password,
    validateFields,
  };
});

export default useSignupFormStore;
