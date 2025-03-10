import { faker } from "@faker-js/faker";
import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { resultSuccess } from "./utils/request";

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
]);
