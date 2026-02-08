// // const mongoose = require("mongoose");
// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: {type: String , unique:true}, 
//     password:String,
//      roles:{
//         type: String,
//         enum: ["user", "admin"],
//         default: "user"
//     }
    
// })

// // hashing password before saving

// userSchema.pre("save", async function () {
//   if (!this.isModified("password")) return;

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// // method to compare password
// userSchema.methods.comparePassword = async function(inputPassword){
//     return await bcrypt.compare(inputPassword, this.password);
// }

// // module.exports = mongoose.model("User", userSchema);
// export  const user = mongoose.model("User", userSchema);
// export default user;

