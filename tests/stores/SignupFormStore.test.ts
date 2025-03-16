import { describe, test, expect } from 'vitest';
import useSignupFormStore from '~/stores/SignupFormStore';
import { ErrorTypes } from '~/types/signup';

const validPassword = 'validPassword1';

const validEmail = 'test@example.com';

describe('SignupFormStore', () => {
  const signupFormStore = useSignupFormStore();

  test('Default values', () => {
    expect(signupFormStore.errors).toEqual({});
  });

  test('Validates an empty email field', () => {
    signupFormStore.validateFields('', validPassword);

    expect(signupFormStore.errors.email).toBe(ErrorTypes.REQUIRED);
  });

  test('Valdiates an invalid email format', () => {
    signupFormStore.validateFields('invalid-email', validPassword);

    expect(signupFormStore.errors.email).toBe(ErrorTypes.INVALID);
  });

  test('Validates a correct email', () => {
    signupFormStore.validateFields(validEmail, validPassword);

    expect(signupFormStore.errors.email).toBeUndefined();
  });

  test('Validates an empty password field', () => {
    signupFormStore.validateFields(validEmail, '');

    expect(signupFormStore.errors.password).toBe(ErrorTypes.REQUIRED);
  });

  test('Validates a password that is too short', () => {
    signupFormStore.validateFields(validEmail, 'short');

    expect(signupFormStore.errors.password).toBe(ErrorTypes.INVALID);
  });

  test('Validates a correct password', () => {
    signupFormStore.validateFields(validEmail, validPassword);

    expect(signupFormStore.errors.password).toBeUndefined();
  });

  test('Sets hasError to true when any error is present', () => {
    signupFormStore.validateFields('', validPassword);

    expect(signupFormStore.hasErrors).toBe(true);
  });
});
