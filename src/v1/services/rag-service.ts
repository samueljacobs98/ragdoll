import { tokenizer } from "../../api/utils";
import { fileParser } from "../../api/services";
import { RagSource } from "../../api/core/types";
import { openAIConnector } from "../../api/connectors";
import { RagRequestData } from "../core/types";
import { RagPromptBuilder } from "../prompt-builders";

/*
 * Retrieve responsibilities:
 * - Gather information from various sources
 * - Prepare information for the read step
 *
 * Data sources
 * - Files (via extraction)
 * - REST APIs [TODO]
 * - Databases [TODO]
 */
const retrieve = async (requestData: RagRequestData) => {
  const fileContents = await Promise.all(
    requestData.files.map(async (file) => ({
      source: file.originalname,
      contents: await fileParser.parseFileBuffer(file.buffer),
    }))
  );
  const fileInformation: RagSource[] = await Promise.all(
    fileContents.map(async ({ source, contents }) => {
      const tokenCount = tokenizer.countTokens(contents);
      const embedding = await openAIConnector.generateEmbedding(contents);
      return {
        source,
        contents,
        tokenCount,
        embedding,
      };
    })
  );

  return fileInformation;
};

/*
 * Read responsibilities:
 * - Analyze information
 * - Extract information relevant to query
 */
const read = async (query: string, information: RagSource[]) => {
  const queryEmbedding = await openAIConnector.generateEmbedding(query);

  const processedInformation = information
    .map((info) => ({
      ...info,
      similarity: openAIConnector.getSimilarity(queryEmbedding, info.embedding),
    }))
    .sort((a, b) => b.similarity - a.similarity);

  return processedInformation;
};

/*
 * Generate responsibilities:
 * - Responsible for building the prompt from the query and relevant information
 * - Responsible for obtaining a response from the AI model using the prompt
 */
const generate = async (query: string, information: RagSource[]) => {
  const promptBuilder = new RagPromptBuilder(query, information);

  const { system, user } = promptBuilder.build();

  const response = await openAIConnector.generateResponse(system, user);

  return response;
};

const serve = async (requestData: RagRequestData) => {
  const information = await retrieve(requestData);
  const relevantInformation = await read(requestData.body.query, information);
  const response = await generate(requestData.body.query, relevantInformation);

  return response;
};

export { serve };
