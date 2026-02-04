
// const mongoose = require("mongoose")
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:String,
    author:String,
    PuplishedYear:Number
    
})

// module.exports = mongoose.model("Book", BookSchema);
export default mongoose.model("Book", BookSchema);