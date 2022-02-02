import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export function respond(res: Response , body: any, status?: number) {
  console.log(status | StatusCodes.OK);
  return res.status(status | StatusCodes.OK).json({
    success: true,
    data: body
  });
}
