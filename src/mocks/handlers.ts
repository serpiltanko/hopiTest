// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { getBaseUrl } from "./util";

export const handlers = [
  http.get(`${getBaseUrl()}/users`, () => {
    const users = [
      {
        id: 1,
        name: "John Smith",
        email: "johnsmith@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
      },
    ];

    return HttpResponse.json(users, { status: 200 });
  }),
];
