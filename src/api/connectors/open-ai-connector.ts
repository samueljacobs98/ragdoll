import OpenAI from "openai";
import { EmbeddingSimilarityError, OpenAIError } from "../core/models/errors";
import { OpenAIMessage, OpenAIParams } from "../core/types";
import { config } from "../config";

const openai = new OpenAI({ apiKey: config.openai.apiKey });

const completionsModel = "gpt-3.5-turbo";
const embeddingModel = "text-embedding-3-small";

const generateResponse = async (
  system: string,
  prompt: string,
  messages: OpenAIMessage[] = []
) => {
  const params: OpenAIParams = {
    model: completionsModel,
    messages: [
      {
        role: "system",
        content: system,
      },
      ...messages,
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  try {
    const response = await openai.chat.completions.create(params);
    const { content } = response.choices[0].message;

    if (!content) {
      throw new Error("Failed to generate response");
    }

    return content;
  } catch (error) {
    throw new OpenAIError(`Error generating response (${error})`);
  }
};

const generateEmbedding = async (prompt: string) => {
  const embedding = await openai.embeddings.create({
    model: embeddingModel,
    input: prompt,
    encoding_format: "float",
  });

  return embedding.data[0].embedding;
};

const cosineSimilarity = (embedding1: number[], embedding2: number[]) => {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (let i = 0; i < embedding1.length; i++) {
    dotProduct += embedding1[i] * embedding2[i];
    norm1 += embedding1[i] ** 2;
    norm2 += embedding2[i] ** 2;
  }

  norm1 = Math.sqrt(norm1);
  norm2 = Math.sqrt(norm2);

  return dotProduct / (norm1 * norm2);
};

const getSimilarity = (embedding1: number[], embedding2: number[]) => {
  if (embedding1.length !== embedding2.length) {
    throw new EmbeddingSimilarityError("Embeddings must have the same length");
  }

  return cosineSimilarity(embedding1, embedding2);
};

export { generateResponse, generateEmbedding, getSimilarity };
