export enum ErrorTypes {
  INVALID = 'invalid',
  REQUIRED = 'required',
}

export enum FieldTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
}

export interface SignupFormErrors {
  email?: ErrorTypes;
  password?: ErrorTypes
};

export interface SignupFields {
  consent: boolean;
  email: string;
  password: string;
}