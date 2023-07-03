import { AnyAction } from "@reduxjs/toolkit";

export interface IRoutesState {
  routesList: [],
  editableRoute: string,
  userRoutes: [],
  likedRoutes: [],
}

export const initialRoutesState: IRoutesState = {
  routesList: [],
  editableRoute: '',
  userRoutes: [],
  likedRoutes: [],
};

export const RoutesReducer = (state: IRoutesState = initialRoutesState, action: AnyAction): IRoutesState => {
  switch (action.type) {
    default: return state
  }
}
