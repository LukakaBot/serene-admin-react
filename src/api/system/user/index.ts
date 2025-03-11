import request from "@/utils/service";
import type {
  AccountUserTokenParams,
  AccountLoginResponse,
  UserInfo,
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
