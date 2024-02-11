import { Request, Response, NextFunction } from "express";

export default (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error.message);
  console.log(error.stack);
  
  return res.status(500).json({
    success: false,
    message: error.message
  })
};