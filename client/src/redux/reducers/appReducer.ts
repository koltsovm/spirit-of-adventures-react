import { AnyAction } from "@reduxjs/toolkit";
import { AppTypes } from "../types/appTypes";

export interface IAppState {
  isAuthenticated: boolean;
  isLoginError: boolean;
  language: string | null;
}

export const initialAppState: IAppState = {
  isAuthenticated: false,
  isLoginError: false,
  language: null
};

const AppReducer = (state: IAppState = initialAppState, action: AnyAction) => {
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
      }
    default:
      return state;
  }
};

export default AppReducer;
