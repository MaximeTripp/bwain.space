import { getUser, createUser } from "../models/userModel.js"

// Maybe make these try-catches better in the future if needed!

export async function loginUser(req, res){

    try {

        const username = req.body.username;
        const password = req.body.password;

        const user = await getUser(username, password);

        res.send(user);

    } catch (error){
        
        console.log("Error!");

    }
}

export async function addUser(req, res) {
    
    try {

        const username = req.body.username;
        const password = req.body.password;

        const user = await createUser(username, password);

        if(user === 1062){
            console.log("USER ALREADY EXISTS!!!");
        }

        res.send(user);

    } catch (error){
        
        console.log("Error!");

    }



}

export async function removeUser(req, res){

    try {

        const username = req.body.username;
        const password = req.body.password;

        const user = await deleteUser(username, password);

        res.send(user);

    } catch (error) {

        console.log("Error!");

    }

}