import { z } from "zod";
import { filesSchema } from "./files-schema";
import { bodySchema } from "./body-schema";

const ragRequestDataSchema = z.object({
  files: filesSchema,
  body: bodySchema,
});

export { ragRequestDataSchema };
