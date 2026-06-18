import { LoginResponseSchema, LoginSchema } from '../schemas/auth.schema';
import { registry } from './registry';


registry.registerPath({
  method: "post",
  path: "/login",

  tags: ["Login"],
  request: {
    body:{
        content:{
            "application/json":{
                schema: LoginSchema
            }
        }
    }

  },

  responses: {
    200: {
      description: "Login successful",

      content: {
        "application/json": {
          schema: LoginResponseSchema,
        },
      },
    },
  },
});