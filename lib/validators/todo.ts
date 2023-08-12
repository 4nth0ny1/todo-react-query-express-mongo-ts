import * as z from "zod";

export const TodoValidation = z.object({
  id: z.number(),
  content: z.string().nonempty().min(3, { message: "Minimum 3 characters." }),
  done: z.boolean().optional()
});