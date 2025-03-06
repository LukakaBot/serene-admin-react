import type { RouteObject } from "react-router";

type ElementType = "layout" | "page";

export interface BaseRouteObject
  extends Omit<RouteObject, "element" | "children"> {
  element?: string;
  type?: ElementType;
  requiresAuth?: boolean;
  children?: BaseRouteObject[];
}
