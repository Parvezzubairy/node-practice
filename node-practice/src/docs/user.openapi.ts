import { registry } from "./registry";
import {
  CreateUserSchema,
  UserSchema,
  SearchUsersSchema,
  GetUserByIdSchema
} from "../schemas/user.schema";
import { bearerSecurity } from "./security";

registry.registerPath({
  method: "get",
  path: "/api/users",

  tags: ["Users"],
  security: bearerSecurity,

  responses: {
    200: {
      description: "List of users",

      content: {
        "application/json": {
          schema: UserSchema.array(),
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/api/users",

  tags: ["Users"],
  security: bearerSecurity,

  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateUserSchema,
        },
      },
    },
  },

  responses: {
    201: {
      description: "User created",
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/users/search",

  tags: ["Users"],
  security: bearerSecurity,
  request: {
    query: SearchUsersSchema,
  },

  responses: {
    200: {
      description: "List of users",

      content: {
        "application/json": {
          schema: UserSchema.array(),
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/users/{userId}",

  tags: ["Users"],
  security: bearerSecurity,
  request: {
    params: GetUserByIdSchema,
  },

  responses: {
    200: {
      description: "List of users",

      content: {
        "application/json": {
          schema: UserSchema.array(),
        },
      },
    },
  },
});