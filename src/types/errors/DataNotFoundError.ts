import { AppError } from "./AppError";

export class DataNotFoundError extends AppError {
  constructor(message?: string) {
    // Providing default message and overriding status code.
    super(message || "Data not found", 404);
  }
};
