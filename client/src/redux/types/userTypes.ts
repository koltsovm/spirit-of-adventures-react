import { AnyAction } from "@reduxjs/toolkit";
import { User } from "../reducers/userReducer";

export enum Types {
  SET_USER = 'SET_USER',
  UNSET_USER = 'UNSET_USER',
}

export interface SetUserAction extends AnyAction {
  type: Types.SET_USER;
  payload: User;
}

export interface UnsetUserAction extends AnyAction {
  type: Types.UNSET_USER;
  payload: User;
}

export type UserActions = SetUserAction | UnsetUserAction;
