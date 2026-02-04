// const mongoose = require("mongoose");
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    
})

// module.exports = mongoose.model("User", userSchema);
export  const user = mongoose.model("User", userSchema);

