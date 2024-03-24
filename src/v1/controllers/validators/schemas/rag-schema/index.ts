import { z } from "zod";
import { bodySchema } from "./body-schema";

const ragRequestDataSchema = z.object({
  body: bodySchema,
});

export { ragRequestDataSchema };
