import { Router } from "express";
import { loginUser, addUser, removeUser } from "../controllers/authController.js"; 

const router = Router();

router.post('/register', addUser);
router.delete('/removeUser', removeUser);
router.post('/', loginUser);

export default router;