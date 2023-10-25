import { NextFunction, Request, Response } from "express";
import { DomainError } from "../@shared/domainError";

export const ErrorHandleMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof DomainError) {
    return res.status(error.status).json({
      error: {
        name: error.name,
        message: error.message,
      },
    });
  }
  return res.status(500).json({
    error: {
      name: "InternalServerError",
      message: "houve um erro interno no servidor",
    },
  });
};
