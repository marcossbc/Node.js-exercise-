
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;
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
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "1984 Years", author: "George Orwell" }
]
app.post("/books/", (req, res) => {
  const newBook = {
    id:books.length+1,
    title:req.body.title,
    author:req.body.author
  }
  books.push(newBook)
  res.status(201).json(newBook)

})
//Get all 
app.get("/books", (req, res) => {
  res.json(books);
});

//SOO AKHRI BOOKS ID LIKE BOOKS/1
app.get("/books/:id", (req,res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId)
  if(!book)  return(res.status(404).send("book not found"))
  res.json(book)
})
//UPDATE KUSAMEH DATA BOOKS
app.put("/books/:id", (req,res) => {
  const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId)
  if(!book)  return(res.status(404).send("book not found"))
  book.title = req.body.title;
  res.json(book)
})

//Delete books

app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.send('Book deleted');
});

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
