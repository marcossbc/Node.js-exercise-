
import express from "express";
import { getPosts, PostsOne }  from "../controllers/posts.js"
const routes = express.Router()

routes.get("/", getPosts)
routes.get("/:id", PostsOne)

export default routes;