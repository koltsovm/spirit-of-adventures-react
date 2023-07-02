import { Route, RoutesActions, RoutesTypes } from "../types/routesTypes";

export function setRoutesList(list: Route[]): RoutesActions {
  return {
    type: RoutesTypes.SET_ROUTES_LIST,
    payload: list,
  }
}

export function setEditableRoute(route: Route): RoutesActions {
  return {
    type: RoutesTypes.SET_EDITABLE_ROUTE,
    payload: route
  }
}

export function setUserRoutes(routes: Route[]): RoutesActions {
  return {
    type: RoutesTypes.SET_USER_ROUTES,
    payload: routes,
  }
}

export function setLikedRoute(route: Route): RoutesActions {
  return {
    type: RoutesTypes.SET_LIKED_ROUTES,
    payload: route
  }
}

export function addNewRoute(route: Route): RoutesActions {
  return {
    type: RoutesTypes.ADD_NEW_ROUTE,
    payload: route,
  }
}
