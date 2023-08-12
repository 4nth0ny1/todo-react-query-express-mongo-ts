import * as z from "zod";

export const apiRequestValidator = z.object({content: z.string(), done: z.boolean()})

export type ApiRequest = z.infer<typeof apiRequestValidator>;

export const TodoValidation = z.object({
  id: z.number(),
  content: z.string().nonempty().min(3, { message: "Minimum 3 characters." }),
  done: z.boolean().optional()
});