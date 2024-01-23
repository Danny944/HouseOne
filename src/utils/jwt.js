import dotenv from "dotenv";

dotenv.config();

import jwt from "jsonwebtoken";

export function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}
