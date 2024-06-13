export enum FIELD_NAMES  {
  USERNAME = "username",
  EMAIL =  "email",
  PASSWORD = "password",
  CHECKBOX = "checkbox",
  AGE_CHECKBOX = "ageCheckbox",
};

export type RegisterFormValues = {
  [FIELD_NAMES.USERNAME]: string;
  [FIELD_NAMES.EMAIL]: string;
  [FIELD_NAMES.PASSWORD]: string;
  [FIELD_NAMES.CHECKBOX]: boolean;
  [FIELD_NAMES.AGE_CHECKBOX]: boolean;
};