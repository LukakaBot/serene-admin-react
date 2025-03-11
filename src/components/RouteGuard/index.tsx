import { Navigate } from "react-router";
import { useRouter } from "@/hooks/index";
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
    return <Navigate to="/dashboard/home" replace />;
  }

  return <>{children}</>;
}

export default RouteGuard;
