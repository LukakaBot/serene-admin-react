import { faker } from "@faker-js/faker";
import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { resultSuccess, resultPageSuccess } from "./utils/request";
import { doCustomTimes } from "./utils/tools";

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

function getUserPageList(pageSize: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any[] = [];
  doCustomTimes(pageSize, () => {
    result.push({
      id: faker.string.uuid(),
      address: faker.location.city(),
      age: faker.number.int({ min: 18, max: 60 }),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      phone: faker.phone.number(),
      roleName: faker.person.jobTitle(),
      createTime: faker.date.recent(),
      updateTime: faker.date.recent(),
      no: faker.number.int({ min: 100000, max: 10000000 }),
      status: faker.datatype.boolean(),
    });
  });
  return result;
}

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
  {
    url: "/api/user/page",
    method: "POST",
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;

      const list = getUserPageList(50);

      return resultPageSuccess(Number(page), Number(pageSize), list);
    },
  },
]);
