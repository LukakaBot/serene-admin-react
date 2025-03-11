import type { RouteObject } from "react-router";
import { useRoutes } from "react-router";
import type { BaseRouteObject } from "@/router/interface";
import { lazyImportLayout, lazyImportRoute } from "@/utils/router";
import RouteGuard from "@/components/RouteGuard";

interface AuthRouteProps {
  routes: BaseRouteObject[];
}

function transformRoute(route: BaseRouteObject): RouteObject {
  try {
    const {
      index,
      element,
      children,
      type,
      requiresAuth = true,
      ...rest
    } = route;
    const isIndex = index ?? false;

    const PageElement =
      element &&
      (type === "layout"
        ? lazyImportLayout(element)
        : lazyImportRoute(element));

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
  } catch (error) {
    console.error(error);
    return { ...route, element: null } as RouteObject;
  }
}

function AuthRoute({ routes }: AuthRouteProps) {
  const processRoutes = useMemo(() => routes.map(transformRoute), [routes]);
  return useRoutes(processRoutes);
}

export default AuthRoute;
