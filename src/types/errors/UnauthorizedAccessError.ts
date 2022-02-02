import { AppError } from "./AppError";

export class UnauthorizedAccessError extends AppError {
  constructor(message?: string) {
    // Providing default message and overriding status code.
    super(message || "Unauthorized Access", 401);
  }
};
