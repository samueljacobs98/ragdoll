import { RagRequestData } from "../core/types";

/*
 * Retrieve can gather information from:
 * - REST APIs
 * - Databases
 * - Files (via extraction)
 */
const retrieve = async (requestData: RagRequestData) => {
  // ... retrieve
};

const read = async (information) => {
  // ... read
};

const generate = async (relevantInformation) => {
  // ... generate
};

const serve = async (requestData: RagRequestData) => {
  const information = await retrieve(requestData);
  const relevantInformation = await read(information);
  const result = await generate(relevantInformation);
};

export { serve };
