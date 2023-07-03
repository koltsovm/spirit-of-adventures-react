import { Store, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AppReducer from "./reducers/appReducer";
import { UserReducer } from "./reducers/userReducer";
import { RoutesReducer } from "./reducers/routesReducer";

const middlewares: any = [thunk];

const store: Store = configureStore({
  reducer: {
    app: AppReducer,
    user: UserReducer,
    routes: RoutesReducer,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>

export default store;
