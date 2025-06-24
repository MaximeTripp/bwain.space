import { Router } from "express";
import { handleRefresh } from "../controllers/refreshController.js";


const router = Router();

router.get('/', handleRefresh);


export default router;