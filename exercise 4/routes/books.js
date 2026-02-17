
import express from "express";
const router = express.Router();
import { createBook, getBooksOne, getBooksAll, updateBook, deleteBook } from"../controllers/bookController.js"

router.post("/", createBook);
router.get("/:id", getBooksOne)
router.get("/", getBooksAll)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

export default router;
