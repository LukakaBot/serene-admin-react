import request from '@/utils/service';
import type { UserTokenAccountParams, UserInfo } from './types';

export function fetchUserTokenByAccount(data: UserTokenAccountParams): Promise<UserInfo> {
  return request.Post('/user/account/token', data);
}