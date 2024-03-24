import officeParser from "officeparser";
import { FileParseError } from "../core/models/errors";

const parseFileBuffer = async (buffer: Buffer): Promise<string> => {
  try {
    const parsedFile = await officeParser.parseOfficeAsync(buffer);
    return parsedFile;
  } catch (error) {
    throw new FileParseError(`Failed to parse file [${error}]`);
  }
};

export { parseFileBuffer };
