import { AnyAction } from "@reduxjs/toolkit";
import {
  ThunkAction as ReduxThunkAction,
  ThunkDispatch as ReduxThunkDispatch,
} from 'redux-thunk';

export type ThunkAction = ReduxThunkAction<void, void, null, AnyAction>;
export type ThunkDispatch = ReduxThunkDispatch<void, null, AnyAction>;
