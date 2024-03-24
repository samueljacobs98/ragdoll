import { z } from "zod";
import { ragRequestDataSchema } from "../../../controllers/validators/schemas";

export type RagRequestData = z.infer<typeof ragRequestDataSchema>;
