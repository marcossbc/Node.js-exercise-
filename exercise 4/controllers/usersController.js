
// import  user  from "../modules/users.js";
// import express from "express";
export const getUsers = async (req,res) => {

const users = await user.find();
    res.json(users)
    
}
// exports.getUsersOne = (req,res) => {
//     const userId = parseInt(req.params.id);
//     const user = users.find(u => u.id === userId);
//     if(!user) return res.status(404).send("user not found");
//     res.json(user);
// }

// exports.createUser = async (req,res) => {
//     const newUser = new user(req.body);
//     const saved = await newUser.save()

//     res.status(201).json(saved);

// }

// exports.updateUser = async (req, res) => {
//     const userId = req.params.id;

//  try{
//   const updatedUser = await user.findByIdAndUpdate(userId , req.body, {new:true}) 
//   if(!updatedUser){
//  return res.status(404).send("user not found") 

//   }
//   res.json(updatedUser)
//     }catch(err){
//         res.status(500).send(err.message)
//     }
// }

// exports.deleteUser = async (req,res) => {
//     const userId = req.params.id;
//     try{

//         const deletedUser = await user.findByIdAndDelete( userId,req.body ,{new:true})

//         if(!deletedUser) {
//             return res.status(404).send("user not found")
//         }
//         res.json(deletedUser)

//     }catch(err) {
//      res.status(500).send("server err")
//     }
// }

// exports.getUsers = (req,res) => {
//     const {id} = req.params;
//     const user= users.findById(id)
//     if(!user) return res.status(404).send("user not found");
//     res.json(user);
// }
// exports.getUserse = async (req, res) => {
//   const id = req.params.id;

  
//     const user = await User.findById(id);

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     res.json(user);

 
//     res.status(500).send("Server error");

// };



//EXERCISE 2 

export const createBooks = async (req,res) => {
    const NewBook = new Book(req.body)
    const savedBook = await NewBook.save()
    res.status(201).json(savedBook)
 
}

// register user
