import {Router} from "express";
import { registerUser } from "../controllers/auth.controller.js";

const router = Router();

/**
 * @POST /api/auth/register
 * @description user should register first time
 */

router.post("/auth/register", registerUser)


export default router;

