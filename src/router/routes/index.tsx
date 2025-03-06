import type { IndexRouteObject, NonIndexRouteObject } from "react-router";

export type BaseRouteObject = Omit<
  IndexRouteObject | NonIndexRouteObject,
  "element" | "children"
> & {
  element?: string;
  type?: "page" | "layout";
  children?: BaseRouteObject[];
};

const staticRoutes: BaseRouteObject[] = [
  {
    path: "login",
    type: "page",
    element: "/login",
  },
  {
    path: "dashboard",
    type: "layout",
    element: "/BaseLayout",
    children: [{ path: "home", type: "page", element: "/dashboard/home" }],
  },
  {
    path: "system",
    type: "layout",
    element: "/BaseLayout",
    children: [{ path: "user", type: "page", element: "/system/user" }],
  },
];

export { staticRoutes };
