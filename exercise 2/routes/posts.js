const express = require("express");
const { getPosts, PostsOne } = require("../controllers/posts");
const routes = express.Router()

routes.get("/", getPosts)
routes.get("/:id", PostsOne)

module.exports = routes