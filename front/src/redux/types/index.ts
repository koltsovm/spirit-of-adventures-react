export enum Types {
  SET_USER = 'SET_USER',
  UNSET_USER = 'UNSET_USER',
}

export interface SetUserAction {
  type: Types.SET_USER;
  payload: {
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
  };
}

export interface UnsetUserAction {
  type: Types.UNSET_USER;
  payload: {
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
  };
}

export type Actions = SetUserAction | UnsetUserAction;
