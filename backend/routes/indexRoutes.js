import { Router } from "express";
import path from "path";
import { fileURLToPath } from 'url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../../backup/frontend/views/index.html'));

});*/

export default router;