import connection from "./database.js";

async function createToken(userId, token){
  const [results] = await connection.execute(`INSERT INTO user_tokens(userid, refresh_token) values(?,?);`,[userId, token]);
  return results;
}

async function replaceToken(userId, token){
  const [results] = await connection.execute(`UPDATE user_tokens SET refresh_token=? WHERE userid=?;`,[token, userId]);
  return results;
}

async function getTokenByUserId(userId){
  const [results] = await connection.execute(`SELECT * FROM user_tokens WHERE userid = ?;`,[userId]);
  return results;
}

async function getTokenByTokenId(token){
  const [results] = await connection.execute(`SELECT * FROM user_tokens WHERE refresh_token = ?;`,[token]);
  return results;
}

async function removeToken(token){
  const [results] = await connection.execute(`DELETE FROM user_tokens WHERE refresh_token = ?;`, [token]);
  return results;
}



export {createToken,replaceToken,getTokenByTokenId,getTokenByUserId, removeToken};