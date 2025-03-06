import React from "react";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router";
import type { BaseRouteObject } from "@/router/routes";
import { lazyImportLayout, lazyImportRoute } from "@/utils/router";

interface AuthRouteProps {
  routes: BaseRouteObject[];
  children?: React.ReactNode;
}

function AuthRoute(props: AuthRouteProps) {
  const { routes: _routes } = props;

  function transformRoutes(routes: BaseRouteObject[]): RouteObject[] {
    return routes.map(transformRoute);
  }

  function transformRoute(route: BaseRouteObject): RouteObject {
    const isIndex = route?.index ?? false;
    const { children, ...rest } = route;

    const PageElement = route?.element
      ? route.type === "layout"
        ? React.createElement(lazyImportLayout(route.element))
        : React.createElement(lazyImportRoute(route.element))
      : undefined;

    if (route?.element && route.type === "layout") {
      console.log(lazyImportLayout(route.element));
    } else if (route?.element && route.type === "page") {
      console.log(lazyImportRoute(route.element));
    }

    if (isIndex) {
      return {
        ...rest,
        element: PageElement,
        index: true,
      };
    }

    return {
      ...rest,
      index: false,
      element: PageElement,
      children: children ? transformRoutes(children) : undefined,
    };
  }

  const routes = transformRoutes(_routes);

  const Routes = useRoutes(routes);

  return Routes;
}

export default AuthRoute;
