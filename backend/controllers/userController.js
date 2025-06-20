import { getUser, createUser, deleteUser } from "../models/userModel.js"
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;


export async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        const user = await getUser(username); 

        if (!user || user.length === 0) {
            return res.status(404).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user[0].password); 

        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        res.send(user[0]); 
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send('Internal Server Error');
    }
}

export async function addUser(req, res) {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await createUser(username, hashedPassword); 

        if (user === 1062) { 
            return res.status(409).send("User already exists");
        }

        res.send(user);
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).send('Internal Server Error');
    }
}

export async function removeUser(req, res){

    try {

        const username = req.body.username;
        const password = req.body.password;

        const user = await deleteUser(username, password);

        res.send(user);

    } catch (error) {

        console.log(error);

    }

}