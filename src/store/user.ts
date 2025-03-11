import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  AccountUserTokenParams,
  AccountLoginResponse,
} from "@/api/system/user/types";
import { fetchAccountUserToken } from "@/api/system/user/index";

interface UserState {
  userInfo: AccountLoginResponse | null;
}

interface UserAction {
  getAccountUserToken: (params: AccountUserTokenParams) => Promise<void>;
  logout: () => void;
}

type UserStore = UserState & UserAction;

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userInfo: null,
      getAccountUserToken: async (params: AccountUserTokenParams) => {
        const userInfo = await fetchAccountUserToken(params);
        window.$bucket?.set("token", userInfo.token);
        set({ userInfo });
      },
      logout: () => {
        window.$bucket?.remove("token");
        set({ userInfo: null });
      },
    }),
    {
      name: "user-store",
    },
  ),
);

export default useUserStore;
