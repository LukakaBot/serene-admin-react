import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AccountUserTokenParams, UserInfo } from "@/api/system/user/types";
import { fetchAccountUserToken, fetchUserInfo } from "@/api/system/user/index";
import useRouteStore from "./route";

interface UserState {
  userInfo: UserInfo | null;
}

interface UserAction {
  getAccountUserToken: (params: AccountUserTokenParams) => Promise<void>;
  getUserInfo: () => Promise<void>;
  logout: () => void;
}

type UserStore = UserState & UserAction;

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userInfo: null,
      getAccountUserToken: async (params: AccountUserTokenParams) => {
        const { token } = await fetchAccountUserToken(params);
        window.$bucket?.set("token", token);
      },
      getUserInfo: async () => {
        const userInfo = await fetchUserInfo();
        set(() => ({ userInfo }));
        const { setRoutes } = useRouteStore.getState();
        setRoutes(userInfo.menus);
      },
      logout: () => {
        window.$bucket?.remove("token");
        set(() => ({ userInfo: null }));
      },
    }),
    {
      name: "user-store",
    },
  ),
);

export default useUserStore;
