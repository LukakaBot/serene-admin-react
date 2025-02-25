import request from '@/utils/service';
import type { AccountUserTokenParams, UserInfo } from './types';

export function fetchAccountUserToken(data: AccountUserTokenParams): Promise<UserInfo> {
  return request.Post('/user/account/token', data);
}