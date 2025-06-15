import { Router } from "express";
import { applyToJobs } from "../controllers/applyJobs.controller.js";
import protectedRoute from "../Middleware/protectedRoute.js";

const router = Router();

router.post("/sendSearchDetails", applyToJobs);

export default router;