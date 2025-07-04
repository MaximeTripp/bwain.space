import { testAuth } from '../controllers/testController.js';
import { Router } from "express";

const router = Router();
router.get('/', testAuth);

export default router;

