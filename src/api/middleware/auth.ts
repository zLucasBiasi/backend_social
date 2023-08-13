// const jwt = require("jsonwebtoken");

// import { Request, Response } from "express";

// const config = process.env;

// const verifyToken = (req: Request, res: Response) => {
//   const token = "oi";

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     // req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
// };

// module.exports = verifyToken;
