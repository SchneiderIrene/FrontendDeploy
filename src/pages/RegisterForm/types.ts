export enum FIELD_NAMES  {
  USERNAME = "username",
  EMAIL =  "email",
  PASSWORD = "password",
  CHECKBOX = "checkbox",
  AGE_CHECKBOX = "ageCheckbox",
};

export type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
  checkbox: boolean;
  ageCheckbox: boolean;
};