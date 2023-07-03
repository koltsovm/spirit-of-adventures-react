import { AnyAction } from "@reduxjs/toolkit";
import { AppTypes } from "../types/appTypes";

export type AuthType = 'login' | 'signIn' | null;

export type IAppState = {
  isAuthenticated: boolean;
  isLoginError: boolean;
  language: string | null;
  isAuthModal: boolean;
  authType: AuthType;
}

export const initialAppState: IAppState = {
  isAuthenticated: false,
  isLoginError: false,
  language: null,
  isAuthModal: false,
  authType: null,
};

const AppReducer = (state: IAppState = initialAppState, action: AnyAction): IAppState => {
  switch (action.type) {
    case AppTypes.SET_IS_AUTHENTIFICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    case AppTypes.SET_IS_LOGIN_ERROR:
      return {
        ...state,
        isLoginError: action.payload,
      };

    case AppTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    case AppTypes.SET_IS_LOGIN_MODAL:
      return {
        ...state,
        isAuthModal: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
