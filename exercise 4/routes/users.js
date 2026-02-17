
import express from "express";
const routes = express.Router()
import {getUsers  } from "../controllers/usersController.js"



routes.get("/" ,getUsers)
// routes.get("/:id", getUsersOne)
// routes.post("/", createUser)
// routes.put("/:id", updateUser)
// routes.delete("/:id", deleteUser)
// routes.get("/:id", getUserse)




// module.exports = routes
export default routes;