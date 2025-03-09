import { emailRegex } from "~/consts/regex";
import { ErrorTypes, FieldTypes } from "~/types/signup";
import type { SignupFormErrors } from "~/types/signup";

const useValidations = () => {
  const validateField = (field: string, type: Exclude<FieldTypes, FieldTypes.TEXT>): SignupFormErrors => {
    const errors: SignupFormErrors = {};


    if (!field.trim()) {
      errors[type] = ErrorTypes.REQUIRED;

      return errors;
    }
  
    const validationRules = {
      [FieldTypes.EMAIL]: () => emailRegex.test(field) && field.length <= 320,
      [FieldTypes.PASSWORD]: () => field.length >= 8 && field.length <= 32,
    };
  
    if (!validationRules[type]()) {
      errors[type] = ErrorTypes.INVALID;
    }

    return errors;
  };

  return {
    validateField,
  };
};

export default useValidations;
