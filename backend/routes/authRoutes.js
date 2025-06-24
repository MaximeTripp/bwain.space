import { Router } from "express";
import { loginUser, addUser, removeUser, logoutUser } from "../controllers/authController.js"; 

const router = Router();

router.get('/logout', logoutUser);
router.post('/register', addUser);
router.delete('/removeUser', removeUser);
router.post('/', loginUser);

export default router;