import request from "@/utils/service";
import type { ResponsePageData } from "@/utils/service/types";
import type {
  AccountUserTokenParams,
  AccountLoginResponse,
  UserInfo,
  UserPageListParams,
  UserPageItem,
} from "./types";

export function fetchAccountUserToken(
  data: AccountUserTokenParams,
): Promise<AccountLoginResponse> {
  return request.Post("/user/account/token", data);
}

/** 获取用户信息 */
export function fetchUserInfo(): Promise<UserInfo> {
  return request.Get("/user/info");
}

/** 获取用户分页列表 */
export function fetchUserPageList(
  data: UserPageListParams,
): Promise<ResponsePageData<UserPageItem[]>> {
  return request.Post("/user/page", data);
}
