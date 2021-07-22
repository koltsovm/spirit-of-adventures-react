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
    const response = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({
          username,
          email,
          firstname,
          password,
        }),
      },
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
