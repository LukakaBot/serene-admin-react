/** [账号密码登录] - 请求参数 */
export interface AccountUserTokenParams {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
};

/** 用户信息 */
export interface UserInfo {
  /** 用户ID */
  userId: string;
  /** 用户名 */
  username: string;
  /** 令牌 */
  token: string;
};