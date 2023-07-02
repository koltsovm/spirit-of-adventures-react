import { AppActions, AppTypes } from "../types/appTypes";

export function setIsAuthentificated(b: boolean): AppActions {
  return {
    type: AppTypes.SET_IS_AUTHENTIFICATED,
    payload: b,
  }
}

export function setIsLoginError(b: boolean): AppActions {
  return {
    type: AppTypes.SET_IS_LOGIN_ERROR,
    payload: b,
  }
}

export function setLanguage(language: string | null): AppActions {
  return {
    type: AppTypes.SET_LANGUAGE,
    payload: language,
  }
}

export function setIsLoginModal(b: boolean): AppActions {
  return {
    type: AppTypes.SET_IS_LOGIN_MODAL,
    payload: b,
  }
}
