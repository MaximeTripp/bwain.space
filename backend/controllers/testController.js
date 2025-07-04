import { getUsers} from "../models/userModel.js";

export async function testAuth(req, res) {
    try {
        const users = await getUsers();
        res.send(users);
    } catch (error) {
        res.send(error)
    }
}