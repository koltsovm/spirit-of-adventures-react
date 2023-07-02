import { AnyAction } from "@reduxjs/toolkit";

export enum AppTypes {
  SET_IS_AUTHENTIFICATED = 'SET_IS_AUTHENTIFICATED',
  SET_IS_LOGIN_ERROR = 'SET_IS_LOGIN_ERROR',
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_IS_LOGIN_MODAL = 'SET_IS_LOGIN_MODAL',
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

export interface ISetIsLoginModal extends AnyAction {
  type: AppTypes.SET_IS_LOGIN_MODAL,
  payload: boolean,
}

export type AppActions =
  ISetIsAuthenticated |
  ISetIsLoginError |
  ISetLanguage |
  ISetIsLoginModal;
