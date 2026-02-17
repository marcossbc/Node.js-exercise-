import express from "express";
import { protactedRoute } from "../middlewares/auth.js";
import { uploadImage } from "../controllers/uploadControll.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router()


router.post("/image", protactedRoute, upload.single("file"), uploadImage)

// console.log("upload route is working", upload.single("file"))

export default router;