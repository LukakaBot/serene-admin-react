import type { RouteObject } from "react-router";
import type { MenuProps } from "antd";

type ElementType = "layout" | "page";

export interface BaseRouteObject
  extends Omit<RouteObject, "element" | "children"> {
  element?: string;
  type?: ElementType;
  requiresAuth?: boolean;
  children?: BaseRouteObject[];
}

export type MenuItem = Required<MenuProps>["items"][number];

export type MenuList = MenuItem[];
