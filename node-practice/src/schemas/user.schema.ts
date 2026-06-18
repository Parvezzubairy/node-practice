import { email, z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string()
});

export const CreateUserSchema = z.object({

    name: z.string().openapi({
        example:"parvez"
    }),
    email: z.email().openapi({
        example:'parvez@gmail.com'
    }),
    password: z.string()
    
}).openapi('CreateUser')

export const SearchUsersSchema = z.object({
    name:z.string().optional(),
    email: z.string().optional()
}).openapi('SearchUsers')

export const GetUserByIdSchema = z.object({
    userId:z.number().min(1)
})

export type CreateUserDto =
  z.infer<typeof CreateUserSchema>;
export type SearchUserDto =
  z.infer<typeof SearchUsersSchema>;

  export type GetUserByIdSchemaDto =
  z.infer<typeof GetUserByIdSchema>;
