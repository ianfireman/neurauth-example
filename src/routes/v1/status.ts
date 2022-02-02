import { Router } from "express";
import { index } from "../../controllers/status";

const router = Router();
router.use("/", index);

export default router;
