
import express from "express";

import { logine, registers } from "../controllers/AuthControlles.js";
import { protactedRoute } from "../middlewares/auth.js";
import { validateZod } from "../middlewares/validateZod.js";
import { CreateUserSchema } from "../schemas/userSchema.js";
const router = express.Router()


router.post("/", validateZod(CreateUserSchema), registers)


/**
 * @swagger
 * /auth/:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered
 */
router.post("/login", logine)

router.get("/", protactedRoute, (req,res)=> {
    res.json(req,user)

} )


export default router;
