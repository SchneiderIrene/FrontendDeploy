

export interface User {
  username?: string,
  id?: string,
  email?: string | undefined,
  password?: string,
  newPassword?: string,
  akzeptCheckBox?: boolean,
  roles?: string
 
}

export interface ErrorField{
  username?: string | null | undefined,
  email?: string | null | undefined
  password?: string | null | undefined
  message?: string | null | undefined
}

export interface AuthSliceState {
  userData: User | null;
  isLogin: boolean;
  status: "default" | "loading" | "success" | "error";
  error: any;
  errorField: ErrorField | null,
  
}