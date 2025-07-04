import { getUser, createUser, deleteUser} from "../models/userModel.js";
import {createToken,replaceToken,getTokenByUserId, removeToken, getTokenByTokenId} from "../models/tokenModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 10;

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    const user = await getUser(username);

    if (!user || user.length === 0) {
      return res.status(404).send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }


    const accessToken = jwt.sign({"userid": user[0].userid}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
    const refreshToken = jwt.sign({"userid": user[0].userid}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '5m'});


    const existingToken = await getTokenByUserId(user[0].userid);

    if(!existingToken || existingToken.length === 0){
        console.log(`creating new token ${refreshToken}`)
        await createToken(user[0].userid,refreshToken);
    } else {
        console.log(`Replacing ${existingToken[0].refresh_token} with ${refreshToken}`)
        await replaceToken(user[0].userid,refreshToken);
    }

    res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 60*1000*5});
    res.json({accessToken});

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function addUser(req, res) {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await createUser(username, hashedPassword);

    res.send(user);
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).send("Conflict");
    }
    console.error("Register Error:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function logoutUser(req, res) {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
      return res.sendStatus(204);
    }
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    const foundUser = await getTokenByTokenId(refreshToken);
    if (!foundUser || foundUser.length === 0) {
      res.clearCookie('jwt', {httpOnly:true});
      return res.sendStatus(204);
    }
    const deleted = await removeToken(refreshToken);
    res.clearCookie('jwt', {httpOnly:true});
    if(!deleted){
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error");
  }
}



export async function removeUser(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await deleteUser(username, password);

    res.send(user);
  } catch (error) {
    console.log(error);
  }
}