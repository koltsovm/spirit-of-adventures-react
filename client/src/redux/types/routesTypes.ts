import { AnyAction } from "@reduxjs/toolkit";

export enum RoutesTypes {
  SET_ROUTES_LIST = 'SET_ROUTES_LIST',
  SET_EDITABLE_ROUTE = 'SET_EDITABLE_ROUTE',
  SET_USER_ROUTES = 'SET_USER_ROUTES',
  SET_LIKED_ROUTES = 'SET_LIKED_ROUTES',
  ADD_NEW_ROUTE = 'ADD_NEW_ROUTE',
}

export type Point = {
  title: string,
  description: string,
}

export type Route = {
  title: string,
  points: Point[]
}

export interface ISetRoutesList extends AnyAction {
  type: RoutesTypes.SET_ROUTES_LIST,
  payload: Route[],
}

export interface ISetEditableRoute extends AnyAction {
  type: RoutesTypes.SET_EDITABLE_ROUTE,
  payload: Route,
}

export interface ISetUserRoutes extends AnyAction {
  type: RoutesTypes.SET_USER_ROUTES,
  payload: Route[],
}

export interface ISetLikedRoute extends AnyAction {
  type: RoutesTypes.SET_LIKED_ROUTES,
  payload: Route,
}

export interface IAddNewRoute extends AnyAction {
  type: RoutesTypes.ADD_NEW_ROUTE,
  payload: Route,
}

export type RoutesActions =
  ISetRoutesList |
  ISetEditableRoute |
  ISetUserRoutes |
  ISetLikedRoute |
  IAddNewRoute;
