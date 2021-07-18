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
