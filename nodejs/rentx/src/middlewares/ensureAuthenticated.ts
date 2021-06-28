import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing!");
  }

  const [, token] = authHeader.split(" "); // pois o jwt vem no formato ex:(Bearer jdf72923jfhnsd7129f)

  try {
    const { sub: user_id } = verify(
      token,
      "36v90xkwbv7409wkvnbxle65gh5892nv60"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) throw new Error("User does not exists!");

    next();
  } catch {
    throw new Error("Invalid token!");
  }
}
