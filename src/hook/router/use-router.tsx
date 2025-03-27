import { useNavigate, useLocation } from "react-router";

function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  return useMemo(
    () => ({
      currentRoute: location,
      back: () => navigate(-1),
      forward: () => navigate(1),
      go: (delta: number) => navigate(delta),
      replace: (to: string) =>
        navigate(to, { replace: true, state: { from: location } }),
      push: (to: string) => navigate(to, { state: { from: location } }),
    }),
    [navigate, location],
  );
}

export default useRouter;
