import { RagdollError } from "./RagdollError";

/**
 * InternalServerError
 * @description
 * This error is thrown when an internal server error occurs.
 * @extends RagdollError
 */
class InternalServerError extends RagdollError {
  constructor(message: string) {
    super("Internal Server Error", message, 500);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * BadRequestError
 * @description
 * This error is thrown when a bad request error occurs.
 * @extends RagdollError
 */
class BadRequestError extends RagdollError {
  constructor(message: string) {
    super("Bad Request Error", message, 400);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

/**
 * OpenAIError
 * @description
 * This error is thrown when an OpenAI error occurs.
 * @extends RagdollError
 */
class OpenAIError extends RagdollError {
  constructor(message: string) {
    super("OpenAI Error", message, 400);
    Object.setPrototypeOf(this, OpenAIError.prototype);
  }
}

/**
 * FileParseError
 * @description
 * This error is thrown when an FileParse error occurs.
 * @extends RagdollError
 */
class FileParseError extends RagdollError {
  constructor(message: string) {
    super("FileParse Error", message, 500);
    Object.setPrototypeOf(this, FileParseError.prototype);
  }
}

/**
 * EmbeddingSimilarityError
 * @description
 * This error is thrown when an FileParse error occurs.
 * @extends RagdollError
 */
class EmbeddingSimilarityError extends RagdollError {
  constructor(message: string) {
    super("EmbeddingSimilarity Error", message, 500);
    Object.setPrototypeOf(this, EmbeddingSimilarityError.prototype);
  }
}

export {
  RagdollError,
  BadRequestError,
  InternalServerError,
  OpenAIError,
  FileParseError,
  EmbeddingSimilarityError,
};
