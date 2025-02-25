import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccountUserTokenParams, UserInfo } from "@/api/system/user/types";
import { fetchAccountUserToken } from '@/api/system/user/index';

interface UserStore {
  userInfo: UserInfo | null;
  getAccountUserToken: (params: AccountUserTokenParams) => Promise<void>;
  logout: () => void;
}

const userStore = create<UserStore>()(persist(
  (set) => ({
    userInfo: null,
    getAccountUserToken: async (params: AccountUserTokenParams) => {
      const userInfo = await fetchAccountUserToken(params);
      window.$bucket?.set('token', userInfo.token);
      set({ userInfo });
    },
    logout: () => {
      window.$bucket?.remove('token');
      set({ userInfo: null });
    }
  }),
  {
    name: 'user-store',
  }
));

export default userStore;