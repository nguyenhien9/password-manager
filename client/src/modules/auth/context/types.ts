/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterFormData } from "../schemas/registerSchema";
// ----------------------------------------------------------------------

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  isAuthenticated: boolean;
  user: AuthUserType;
};

export type JWTContextType = {
  method: string;
  isAuthenticated: boolean;
  user: AuthUserType;
  register: (data: RegisterFormData) => Promise<void>;
  // logout: () => void;
};
