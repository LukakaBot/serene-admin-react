import React from "react";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router";
import type { BaseRouteObject } from "@/router/interface";
import { lazyImportLayout, lazyImportRoute } from "@/utils/router";
import RouteGuard from "@/components/RouteGuard";

interface AuthRouteProps {
  routes: BaseRouteObject[];
  children?: React.ReactNode;
}

function transformRoute(route: BaseRouteObject): RouteObject {
  const {
    index,
    element,
    children,
    type,
    requiresAuth = true,
    ...rest
  } = route;
  const isIndex = index ?? false;

  const PageElement = element
    ? type === "layout"
      ? lazyImportLayout(element)
      : lazyImportRoute(element)
    : undefined;

  const renderedElement = PageElement && <PageElement />;
  const guardedElement =
    renderedElement && requiresAuth ? (
      <RouteGuard>{renderedElement}</RouteGuard>
    ) : (
      renderedElement
    );

  if (isIndex) {
    return {
      ...rest,
      index: true,
      element: guardedElement,
    };
  }

  return {
    ...rest,
    index: false,
    element: guardedElement,
    children: children?.length ? children.map(transformRoute) : undefined,
  };
}

function AuthRoute(props: AuthRouteProps) {
  const { routes } = props;
  const processRoutes = useMemo(() => routes.map(transformRoute), [routes]);
  const Routes = useRoutes(processRoutes);

  return Routes;
}

export default AuthRoute;
