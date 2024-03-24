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

export { RagdollError, BadRequestError, InternalServerError };
