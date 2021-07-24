import { Actions, Types } from './../types/index';
import { UserState, initialUserState } from './../init/index';
export const userReducer = (
  state: UserState = initialUserState,
  action: Actions
): UserState => {
  switch (action.type) {
    case Types.SET_USER:
      return { ...state, user: action.payload, isAuth: true };

    default:
      return state;
  }
};
