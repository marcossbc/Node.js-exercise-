const express = require("express");
const router = express.Router();
const { createBook, getBooksOne, getBooksAll, updateBook, deleteBook } = require("../controllers/bookController");

router.post("/", createBook);
router.get("/:id", getBooksOne)
router.get("/", getBooksAll)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

module.exports = router;
