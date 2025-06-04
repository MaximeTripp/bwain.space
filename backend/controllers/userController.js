import { getUser, createUser } from "../models/userModel.js"

export async function loginUser(req, res){
    
    // TO-DO
    // Refactor so that the try catch is handled in the controller, not the model!
    try {

        const username = req.body.username;
        const password = req.body.password;

        const user = await getUser(username, password);

        res.send(user);

    } catch (error){
        
        console.log();

    }
}

export async function addUser(req, res) {
    
    // TO-DO
    // Refactor so that the try catch is handled in the controller, not the model!
    try {

        const username = req.body.username;
        const password = req.body.password;

        const user = await createUser(username, password);

        if(user === 1062){
            console.log("USER ALREADY EXISTS!!!");
        }

        res.send(user);

    } catch {

        //TO-DO

    }



}

export async function removeUser(req, res){
    // TO-DO
    // Refactor so that the try catch is handled in the controller, not the model!
    try {

        const username = req.body.username;
        const password = req.body.password;

        const user = await deleteUser(username, password);

        res.send(user);

    } catch {

        //TO-DO

    }

}