import { faker } from "@faker-js/faker";
import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { resultSuccess } from "./utils/request";

const menus = [
  {
    path: "/system",
    name: "系统管理",
    redirect: "/system/user",
    meta: { icon: "lucide:settings" },
    children: [
      {
        path: "/system/user",
        name: "用户管理",
        component: "/system/user",
        meta: { icon: "lucide:user-round" },
      },
      {
        path: "/system/role",
        name: "角色管理",
        component: "/system/role",
        meta: { icon: "lucide:users-round" },
      },
    ],
  },
];

export default defineFakeRoute([
  {
    url: "/api/user/account/token",
    method: "POST",
    response: () => {
      return resultSuccess({
        userId: faker.string.uuid(),
        username: faker.person.fullName(),
        token: faker.string.uuid(),
      });
    },
  },
  {
    url: "/api/user/info",
    method: "GET",
    response: () => {
      return resultSuccess({
        userId: faker.string.uuid(),
        username: faker.person.fullName(),
        realName: faker.person.fullName(),
        avatar: faker.image.avatar(),
        desc: faker.person.bio(),
        password: faker.internet.password(),
        token: faker.string.uuid(),
        roles: ["admin"],
        menus,
      });
    },
  },
]);
