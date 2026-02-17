import express from "express";
import { authorize } from "../middlewares/authorize.js";
import { protactedRoute } from "../middlewares/auth.js";
const router = express.Router()


router.get("/", protactedRoute, authorize("admin"), (req, res) => {
    res.json({message :`welcome to admin panel ${req.user.name}`})
})

export default router;