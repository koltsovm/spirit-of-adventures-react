import { AnyAction } from "@reduxjs/toolkit";

export enum AppTypes {
  SET_IS_AUTHENTIFICATED = 'SET_IS_AUTHENTIFICATED',
  SET_IS_LOGIN_ERROR = 'SET_IS_LOGIN_ERROR',
  SET_LANGUAGE = 'SET_LANGUAGE',
}

export interface ISetIsAuthenticated extends AnyAction {
  type: AppTypes.SET_IS_AUTHENTIFICATED,
  payload: boolean,
}

export interface ISetIsLoginError extends AnyAction {
  type: AppTypes.SET_IS_LOGIN_ERROR,
  payload: boolean,
}

export interface ISetLanguage extends AnyAction {
  type: AppTypes.SET_LANGUAGE,
  payload: string | null,
}

export type AppActions =
  ISetIsAuthenticated |
  ISetIsLoginError |
  ISetLanguage;
