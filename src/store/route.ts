import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MenuList } from "@/types/route";

interface RouteState {
  routes: MenuList;
}

interface RouteAction {
  setRoutes: (routes: MenuList) => void;
}

type RouteStore = RouteState & RouteAction;

const useRouteStore = create<RouteStore>()(
  persist(
    (set) => ({
      routes: [],
      setRoutes: (routes: MenuList) => set({ routes }),
    }),
    {
      name: "route-store",
    },
  ),
);

export default useRouteStore;
