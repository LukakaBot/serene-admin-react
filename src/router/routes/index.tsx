import type { BaseRouteObject } from "@/types/route";

const staticRoutes: BaseRouteObject[] = [
  {
    path: "login",
    type: "page",
    element: "/login",
    // requiresAuth: false,
  },
  {
    path: "dashboard",
    type: "layout",
    element: "/AppLayout",
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
    element: "/AppLayout",
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
