
const app = express();
import  express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
// import { limiter } from "./middlewares/rateLimiter.js";
import { swaggerSpec } from "./utils/swagger.js";
import swaggerUi from "swagger-ui-express";

import userRoutes from "./routes/users.js";
import PostsRoutes from "./routes/posts.js";
import booksRoutes from "./routes/books.js";
import AuthRoutes from "./routes/auth.js";
import DashbourdRoutes from "./routes/admin.js";
import uploadRoutes from "./routes/upload.js";
import TaskRoutes from "./routes/Task.js";

import  dotenv from "dotenv";
import {logger} from "./middlewares/logger.js";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import { notFound } from "./middlewares/notFound.js";
import { handle } from "./middlewares/handle.js";

app.use(logger);
app.use(express.json());


app.use(cors({
  origin:["http://localhost:3000", "http://localhost:5173"]
}));

app.use(helmet());



// app.use(limiter);
if(process.env.NODE_ENV === "development"){

  app.use(morgan("dev"));
}
console.log(process.env);

const port = process.env.PORT || 3000;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const users =[
  { id: 1, name: "burhaan" },
  { id: 2, name: "abdi" },
  { id: 3, name: "Mckay" }
]

// middle warre routeska
app.use("/users", userRoutes);
app.use("/posts" ,PostsRoutes)
app.use("/books", booksRoutes);
app.use("/auth",  AuthRoutes);
app.use("/admin", DashbourdRoutes);
app.use("/upload", uploadRoutes);
app.use("/Tasks", TaskRoutes);
app.get("/", (req,res) => {
  res.json(users);
})

/// last route
app.use(notFound);
app.use(handle)

//CONNECTING MONGOOSE AND MONGODB
mongoose.connect( process.env.NODE_ENV === "development" ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PRO)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});













// const users = [
//   { id: 1, name: "burhaan" },
//   { id: 2, name: "abdi" },
//   { id: 3, name: "Mckay" }
// ];

// // POST request (create user)
// app.post("/user", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name
//   };

//   users.push(newUser);
//   res.status(201).json(newUser);
// });
// app.get("/users/", (req, res) => {
//   res.json(users);

// })
//SAMEEH DATA CUSUB OO ARRAY AH
// const books = [
//   { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { id: 3, title: "1984 Years", author: "George Orwell" }
// ]
// app.post("/books/", (req, res) => {
//   const newBook = {
//     id:books.length+1,
//     title:req.body.title,
//     author:req.body.author
//   }
//   books.push(newBook)
//   res.status(201).json(newBook)

// })
// //Get all 
// app.get("/books", (req, res) => {
//   res.json(books);
// });

// //SOO AKHRI BOOKS ID LIKE BOOKS/1
// app.get("/books/:id", (req,res) => {
//   const bookId = parseInt(req.params.id);
//   const book = books.find(b => b.id === bookId)
//   if(!book)  return(res.status(404).send("book not found"))
//   res.json(book)
// })

// //UPDATE KUSAMEH DATA BOOKS
// app.put("/books/:id", (req,res) => {
//   const bookId = parseInt(req.params.id);
//     const book = books.find(b => b.id === bookId)
//   if(!book)  return(res.status(404).send("book not found"))
//   book.title = req.body.title;
//   res.json(book)
// })

// //Delete books

// app.delete('/books/:id', (req, res) => {
//   books = books.filter(b => b.id != req.params.id);
//   res.send('Book deleted');
// });

// app.get("/users/:id", (req,res) => {
//   const userId = parseInt(req.params.id);
//   const user = users.find(u => u.id === userId);
//   if(!user) return res.status(404).send("user not found");
//   res.json(user);
// })

// DELETE request
// app.delete("/users/:id", (req, res) => {
//   const userId = parseInt(req.params.id);

//   const userIndex = users.findIndex(u => u.id === userId);
//   if (userIndex === -1) return res.status(404).send("user not found");

//   users.splice(userIndex, 1);
//   res.send(`deleted user with id ${userId}`);
// });


// update request
// app.put("/users/:id", (req, res) => {
//   const userId = parseInt(req.params.id);

//   const user = users.find(u => u.id === userId);
//   if (!user) return res.status(404).send("user not found");

//   user.name = req.body.name;
//   res.json(user);
// });


