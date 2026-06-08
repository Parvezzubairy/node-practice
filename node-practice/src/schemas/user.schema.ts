import { email, z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

export const CreateUserSchema = z.object({

    name: z.string().openapi({
        example:"parvez"
    }),
    email: z.email().openapi({
        example:'parvez@gmail.com'
    })
}).openapi('CreateUser')

export const SearchUsersSchema = z.object({
    name:z.string().optional(),
    email: z.string().optional()
}).openapi('SearchUsers')

export type CreateUserDto =
  z.infer<typeof CreateUserSchema>;
export type SearchUserDto =
  z.infer<typeof SearchUsersSchema>;
