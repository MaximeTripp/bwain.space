import connection from "./database.js";

async function createUser(username, password){
  const [results] = await connection.execute(`INSERT INTO users(username, password) values(?,?);`,[username, password]);
  return results;
}

async function getUser(username){
  const [results] = await connection.execute(`SELECT * FROM users WHERE BINARY username = ?;`,[username]);
  return results;
}

async function getUsers(){
  const [results] = await connection.execute(`SELECT * FROM users;`);
  return results;
}

async function deleteUser(username, password){
  const [results] = await connection.execute(`DELETE FROM users WHERE username = ? AND password = ?;`, [username, password]);
  return results;
}

export {createUser, getUser, deleteUser};