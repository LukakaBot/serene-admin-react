import type { RouteObject } from "react-router";
import { lazyImportLayout, lazyImportRoute } from "@/utils/router";
import RouteGuard from "@/components/RouteGuard";

const LayoutPage = lazyImportLayout("/BaseLayout");
const LoginPage = lazyImportRoute("/login");
const HomePage = lazyImportRoute("/dashboard/home");
const UserPage = lazyImportRoute("/system/user");

const staticRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "dashboard",
    element: (
      <RouteGuard>
        <LayoutPage />
      </RouteGuard>
    ),
    children: [
      {
        path: "home",
        element: (
          <RouteGuard>
            <HomePage />
          </RouteGuard>
        ),
      },
    ],
  },
  {
    path: "system",
    element: (
      <RouteGuard>
        <LayoutPage />
      </RouteGuard>
    ),
    children: [
      {
        path: "user",
        element: (
          <RouteGuard>
            <UserPage />
          </RouteGuard>
        ),
      },
    ],
  },
];

export { staticRoutes };
