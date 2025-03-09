import { describe, test, expect } from 'vitest';
import { ErrorTypes, FieldTypes } from "~/types/signup";

const { validateField } = useValidations();

describe('useValidations', () => {
  test('Should return REQUIRED error when field is empty', () => {
    const emailErrors = validateField('', FieldTypes.EMAIL);

    const passwordErrors = validateField('', FieldTypes.PASSWORD);

    expect(emailErrors).toEqual({ [FieldTypes.EMAIL]: ErrorTypes.REQUIRED });

    expect(passwordErrors).toEqual({ [FieldTypes.PASSWORD]: ErrorTypes.REQUIRED });
  });

  test('Should return INVALID error for an incorrect email format', () => {
    const emailErrors = validateField('invalid-email', FieldTypes.EMAIL);

    expect(emailErrors).toEqual({ [FieldTypes.EMAIL]: ErrorTypes.INVALID });
  });

  test('Should return INVALID error for an email longer than 320 characters', () => {
    const longEmail = 'a'.repeat(321) + '@example.com';

    const emailErrors = validateField(longEmail, FieldTypes.EMAIL);

    expect(emailErrors).toEqual({ [FieldTypes.EMAIL]: ErrorTypes.INVALID });
  });

  test('Should return INVALID error for a password shorter than 8 characters', () => {
    const passwordErrors = validateField('short', FieldTypes.PASSWORD);

    expect(passwordErrors).toEqual({ [FieldTypes.PASSWORD]: ErrorTypes.INVALID });
  });

  test('Should return INVALID error for a password longer than 32 characters', () => {
    const longPassword = 'a'.repeat(33);

    const passwordErrors = validateField(longPassword, FieldTypes.PASSWORD);

    expect(passwordErrors).toEqual({ [FieldTypes.PASSWORD]: ErrorTypes.INVALID });
  });

  test('Should return an empty error object when valid email and password are provided', () => {
    const emailErrors = validateField('test@example.com', FieldTypes.EMAIL);

    const passwordErrors = validateField('ValidPassword123', FieldTypes.PASSWORD);
    
    expect(emailErrors).toEqual({});

    expect(passwordErrors).toEqual({});
  });
});