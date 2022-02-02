import { AppError } from "./AppError";

export class WrongRequestPatternError extends AppError {
  constructor(message?: string) {
    /// Providing default message and overriding status code.
    super("Your request does not follow the correct pattern for this call", 403);
  }
};
