import { z } from "zod";

const bodySchema = z.object({
  query: z.string(),
});

export { bodySchema };
