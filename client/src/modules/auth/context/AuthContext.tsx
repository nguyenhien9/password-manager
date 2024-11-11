import React, {
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from "react";
import {
  ActionMapType,
  AuthStateType,
  AuthUserType,
  JWTContextType,
} from "./types";
import axios from "../../../utils/axios";
import { RegisterFormData } from "../schemas/registerSchema";

// Enum for action types
enum Types {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

// Define payload types for each action
type Payload = {
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType; // Sửa lại kiểu user cho đúng
  };
  [Types.LOGOUT]: undefined;
};

// Action type derived from Payload
type ActionTypes = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// Initial state
const initialState: AuthStateType = {
  isAuthenticated: false,
  user: null,
};

// Reducer to handle actions
const reducer = (state: AuthStateType, action: ActionTypes) => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case Types.REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case Types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

// Create context for authentication
export const AuthContext = createContext<JWTContextType | null>(null);

type AuthProviderProp = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Register function
  const register = useCallback(async (data: RegisterFormData) => {
    const response = await axios.post("/auth/register", data);
    const { user } = response.data;
    dispatch({ type: Types.REGISTER, payload: { user } });
  }, []);

  // Memoize value for context provider
  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: "jwt",
      isAuthenticated: state.isAuthenticated,
      register,
    }),
    [state, register]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
