  
import { Request, Response } from "express";
import { respond } from "../helpers/response";

export async function index(req: Request, res: Response) {
  respond(res, {
    status: "healthy"
  });
}
