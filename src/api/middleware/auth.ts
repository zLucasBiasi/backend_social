import jwt from "jsonwebtoken";

import { NextFunction, Response } from "express";

const secret_key = process.env.SECRET_KEY!;

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    const verify: any = jwt.verify(token, secret_key);
    req.user = verify.data.id;
    next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};
