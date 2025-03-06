import type { BaseRouteObject } from "@/router/interface";

const staticRoutes: BaseRouteObject[] = [
  {
    path: "login",
    type: "page",
    element: "/login",
    requiresAuth: false,
  },
  {
    path: "dashboard",
    type: "layout",
    element: "/BaseLayout",
    children: [
      {
        path: "home",
        type: "page",
        element: "/dashboard/home",
      },
    ],
  },
  {
    path: "system",
    type: "layout",
    element: "/BaseLayout",
    children: [
      {
        path: "user",
        type: "page",
        element: "/system/user",
      },
    ],
  },
];

export { staticRoutes };
