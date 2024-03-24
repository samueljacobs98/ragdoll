import { RagdollError } from "./RagdollError";

/**
 * InternalServerError
 * @description
 * This error is thrown when an internal server error occurs.
 * @extends RagdollError
 */
class InternalServerError extends RagdollError {
  constructor(message: string) {
    super("Internal Server Error", message);
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
    super("Bad Request Error", message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

/**
 * OpenAIError
 * @description
 * This error is thrown when an OpenAI error occurs.
 * @extends HughieError
 */
class OpenAIError extends RagdollError {
  constructor(message: string) {
    super("OpenAI Error", message);
    Object.setPrototypeOf(this, OpenAIError.prototype);
  }
}

/**
 * FileParseError
 * @description
 * This error is thrown when an FileParse error occurs.
 * @extends HughieError
 */
class FileParseError extends RagdollError {
  constructor(message: string) {
    super("FileParse Error", message);
    Object.setPrototypeOf(this, FileParseError.prototype);
  }
}

/**
 * EmbeddingSimilarityError
 * @description
 * This error is thrown when an FileParse error occurs.
 * @extends HughieError
 */
class EmbeddingSimilarityError extends RagdollError {
  constructor(message: string) {
    super("EmbeddingSimilarity Error", message);
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
