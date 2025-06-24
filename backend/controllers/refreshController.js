import { getUser, createUser, deleteUser } from "../models/userModel.js";
import {
  createToken,
  replaceToken,
  getTokenByTokenId,
} from "../models/tokenModel.js";
import jwt from "jsonwebtoken";

export async function handleRefresh(req, res) {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
      return res.sendStatus(401);
    }
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    const foundUser = await getTokenByTokenId(refreshToken);
    if (!foundUser || foundUser.length === 0) {
      return res.sendStatus(403);
    }
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || foundUser[0].userid !== decoded.userid) {
            return res.sendStatus(403);
        }
        const accessToken = jwt.sign({"userid": decoded.userid}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
        res.json({accessToken});
      }
    );
  } catch (error) {
    console.error("Refresh Error:", error);
    res.status(500).send("Internal Server Error");
  }
}
