import { Router } from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { loginUser, addUser, removeUser } from "../controllers/userController.js"; 

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../../frontend/views/login.html'));

});

router.post('/createUser', addUser);

router.delete('/removeUser', removeUser);

router.post('/', loginUser);

export default router;