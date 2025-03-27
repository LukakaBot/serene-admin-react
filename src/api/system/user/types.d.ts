/** [账号密码登录] - 请求参数 */
export interface AccountUserTokenParams {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

/** 账号密码登录 - 响应参数 */
export interface AccountLoginResponse {
  /** 用户ID */
  userId: string;
  /** 用户名 */
  username: string;
  /** 令牌 */
  token: string;
}

/** 用户信息 */
export type UserInfo = {
  /** 用户ID */
  userId: string;
  /** 用户名 */
  userName: string;
  /** 头像 */
  avatar: string;
  /** 手机号码 */
  phone: string;
  /** 角色 */
  roles: string[];
  /** 角色名 */
  roleName: string;
  /** 菜单 */
  menus: RouteRecordRaw[];
  /** token */
  token: string;
  /** 组织ID */
  organizeId: string;
  /** 组织名 */
  organizeName: string;
};

/** 用户分页列表 - 请求参数 */
export interface UserPageListParams {
  /** 页码 */
  pageNum: number;
  /** 每页条数 */
  pageSize: number;
  /** 总条数 */
  total?: number;
}

/** 用户分页列表 - 响应参数 */
export interface UserPageItem {
  id: number;
  beginTime: string;
  endTime: string;
  address: string;
  name: string;
  avatar: string;
  date: string;
  time: string;
  no: number;
  status: boolean;
}
