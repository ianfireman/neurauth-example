import { Request, Response, NextFunction } from "express";
import { AppError } from "../types/errors/AppError";
import { DataNotFoundError } from "../types/errors/DataNotFoundError";

export function notFound (req: Request, res: Response, next: NextFunction) {
  const err = new DataNotFoundError();
  next(err);
}

export function defaultError (err: AppError, req: Request, res: Response, next: NextFunction) {
  let stackTrace = {};
  if (process.env.NODE_ENV == "development") {
    stackTrace = err;
  }

  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message,
    error: err.keys || stackTrace
  });
}
