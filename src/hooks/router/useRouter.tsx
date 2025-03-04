import { useNavigate, useLocation } from "react-router";
import { useMemo } from "react";

function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const router = useMemo(
    () => ({
      currentRoute: location,
      back: () => navigate(-1),
      forward: () => navigate(1),
      go: (delta: number) => navigate(delta),
      reload: () => window.location.reload(),
      replace: (to: string) => navigate(to, { replace: true }),
      push: (to: string) => navigate(to),
    }),
    [location, navigate],
  );

  return router;
}

export default useRouter;
