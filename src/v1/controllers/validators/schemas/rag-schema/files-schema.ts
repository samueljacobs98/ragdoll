import { z } from "zod";
import { config } from "../../../../../api/config";

const filesSchema = z
  .array(
    z.object({
      originalname: z.string(),
      mimetype: z
        .string()
        .refine((val) => config.app.supportedFileTypes.includes(val), {
          message: "Unsupported file type",
        }),
      buffer: z.instanceof(Buffer),
    })
  )
  .refine((val) => val.length <= config.app.maxFilesCount, {
    message: `Maximum file count exceeded. Max files count is ${config.app.maxFilesCount}`,
  });

export { filesSchema };
