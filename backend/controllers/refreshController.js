import connection from "./database.js";

async function createToken(userId, token){
  const [results] = await connection.execute(`INSERT INTO user_tokens(userid, password) values(?,?);`,[userId, token]);
  return results;
}

async function replaceToken(userId, token){
  const [results] = await connection.execute(`UPDATE user_tokens SET refresh_token=? WHERE userid=?;`,[token, userId]);
  return results;
}

async function getToken(userId){
  const [results] = await connection.execute(`SELECT * FROM user_tokens WHERE BINARY userid = ?;`,[userId]);
  return results;
}