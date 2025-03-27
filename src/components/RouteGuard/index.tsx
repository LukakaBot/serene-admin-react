import { Navigate } from "react-router";
import { useRouter } from "@/hook";
interface RouteGuardProps {
  children: React.ReactNode;
}

function RouteGuard({ children }: RouteGuardProps) {
  const token = window.$bucket?.get("token");
  const { currentRoute } = useRouter();

  if (!token && currentRoute.pathname !== "/login") {
    return <Navigate to="/login" state={{ from: currentRoute }} replace />;
  }

  if (token && currentRoute.pathname === "/login") {
    return <Navigate to="/system/user" replace />;
  }

  return <>{children}</>;
}

export default RouteGuard;
