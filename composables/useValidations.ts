import { emailRegex } from "~/consts/regex";
import { ErrorTypes, FieldTypes } from "~/types/signup";
import type { SignupFormErrors } from "~/types/signup";

const useValidations = () => {
  const isEmailValid = (field: string) => emailRegex.test(field) && field.length <= 320;
  
  const isPasswordValid = (field: string) => field.length >= 8 && field.length <= 32;

  const validateField = (field: string, type: Exclude<FieldTypes, FieldTypes.TEXT>): SignupFormErrors => {
    if (!field.trim()) {
      return { [type]: ErrorTypes.REQUIRED };
    }

    let isValid = false;

    switch (type) {
      case FieldTypes.EMAIL:
        isValid = isEmailValid(field);
        break;
      case FieldTypes.PASSWORD:
        isValid = isPasswordValid(field);
        break;
    }

    return isValid ? {} : { [type]: ErrorTypes.INVALID };
  };

  return {
    validateField,
  };
};

export default useValidations;
