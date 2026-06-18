import z, { email } from 'zod';
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string().min(3)
}).openapi('LoginSchema');

export const LoginResponseSchema = z.object({
  token: z.string()
});

export type LoginSchemaDto = 
    z.infer<typeof LoginSchema>;
