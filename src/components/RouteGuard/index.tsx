import { Navigate } from "react-router";

interface RouteGuardProps {
  children: React.ReactNode;
}

function RouteGuard(props: RouteGuardProps) {
  const { children } = props;
  const token = window.$bucket?.get("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default RouteGuard;
