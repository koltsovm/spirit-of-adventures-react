import { AnyAction } from '@reduxjs/toolkit';
import { Types } from '../types/userTypes';

export interface User {
  routes?: string[];
  createdRoutes?: string[];
  lastname?: string;
  firstname?: string;
  phone?: string;
  about?: string;
  avatar?: string;
  id: string;
  email: string;
  username: string;
}

export interface UserState {
  user: User;
  isAuth: boolean;
}

export const initialUserState = {
  user: {
    routes: [],
    createdRoutes: [],
    lastname: '',
    firstname: '',
    phone: '',
    about: '',
    avatar: '',
    id: '',
    email: '',
    username: '',
  },
  favourites: [],
  isAuth: false,
}

export const UserReducer = (
  state: UserState = initialUserState,
  action: AnyAction
): UserState => {
  switch (action.type) {
    case Types.SET_USER:
      return { ...state, user: action.payload, isAuth: true };

    default:
      return state;
  }
};
