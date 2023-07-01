import { Store, applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AppReducer from "./reducers/appReducer";
import { UserReducer } from "./reducers/userReducer";
import { RoutesReducer } from "./reducers/routesReducer";

const middlewares: any = [thunk];

let composeSet = compose(applyMiddleware(...middlewares));

if (process.env.NODE_ENV === 'development') {
  composeSet = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}

const store: Store = configureStore({
  reducer: {
    app: AppReducer,
    user: UserReducer,
    routes: RoutesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>

export default store;