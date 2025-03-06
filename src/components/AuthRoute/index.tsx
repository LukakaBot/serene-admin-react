import type { RouteObject } from "react-router";

interface AuthRouteProps {
  routes: RouteObject[];
  children: React.ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  return children;
}

export default AuthRoute;
