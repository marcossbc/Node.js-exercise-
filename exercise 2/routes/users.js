const express = require("express");
const routes = express.Router()
const {gUsers,  } = require("../controllers/usersController")



routes.get("/" ,gUsers)
// routes.get("/:id", getUsersOne)
// routes.post("/", createUser)
// routes.put("/:id", updateUser)
// routes.delete("/:id", deleteUser)
// routes.get("/:id", getUserse)



module.exports = routes