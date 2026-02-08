
import express from "express";

import { logine, registers } from "../controllers/AuthControlles.js";
import { protactedRoute } from "../middlewares/auth.js";
const router = express.Router()


router.post("/", registers)
router.post("/login", logine)
router.get("/", protactedRoute, (req,res)=> {
    res.json(req,user)

} )

export default router;
