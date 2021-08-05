import { UnsetUserAction } from './../types/index';
import { ThunkAction } from 'redux-thunk';
import { UserState } from '../init';
import { SetUserAction, Types } from '../types';

export const login =
  (
    username: string,
    email: string,
    firstname: string,
    password: string
  ): ThunkAction<void, UserState, unknown, SetUserAction> =>
  async (dispatch) => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        firstname,
        password,
      }),
    });

    if (response.status === 200) {
      const result = await response.json();

      const {
        routes,
        createdRoutes,
        lastname,
        firstname,
        phone,
        about,
        avatar,
        id,
        email,
        username,
        token,
      } = result;

      localStorage.setItem('token', token);

      dispatch({
        type: Types.SET_USER,
        payload: {
          routes,
          createdRoutes,
          lastname,
          firstname,
          phone,
          about,
          avatar,
          id,
          email,
          username,
        },
      });
    }
  };

export const signUp =
  (
    firstName: string,
    lastname: string,
    username: string,
    email: string,
    city: string,
    password: string
  ): ThunkAction<void, UserState, unknown, SetUserAction> =>
  async (dispatch) => {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastname,
        username,
        email,
        city,
        password,
      }),
    });

    if (response.status === 200) {
      const result = await response.json();

      const {
        routes,
        createdRoutes,
        lastname,
        firstname,
        phone,
        about,
        avatar,
        id,
        email,
        username,
        token,
      } = result;

      localStorage.setItem('token', token);

      dispatch({
        type: Types.SET_USER,
        payload: {
          routes,
          createdRoutes,
          lastname,
          firstname,
          phone,
          about,
          avatar,
          id,
          email,
          username,
        },
      });
    }
  };

export const logout =
  (): ThunkAction<void, UserState, unknown, UnsetUserAction> =>
  async (dispatch) => {
    const response = await fetch('/logout');

    if (response.status === 200) {
      dispatch({
        type: Types.UNSET_USER,
        payload: { id: '', email: '', username: '' },
      });
    }
  };
