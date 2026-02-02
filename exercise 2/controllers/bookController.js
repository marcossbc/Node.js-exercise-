const Book = require("../modules/book");

exports.createBook = async (req, res) => {
    const NewBook = new Book(req.body);
    const savedBook = await NewBook.save()


    res.status(201).json(savedBook)
}
exports.getBooksOne= async (req,res) => {
    const bookId = req.params.id;

    try{
        const book = await Book.findById(bookId)
        if(!book) return res.status(404).send("book not found");
        res.json(book);
    }catch(err){
        res.status(500).send("server error")

    }
}
exports.getBooksAll = async (req,res) => {
    const bookId = req.params.id;

    try{
        const book = await Book.find(bookId)
        res.json(book);
    }catch(err){
        res.status(500).send("server error")
   

    }
}
exports.updateBook = async (req,res) => {
    const BookId = req.params.id;
    try{
        const updatedBook = await Book.findByIdAndUpdate(BookId, req.body, {new:true})
        res.json(updatedBook)
    }catch(err){
        res.status(500).send("server error")
    }
}
exports.deleteBook = async (req,res) => {
    const bookId = req.params.id;
    try{
        const deletedBook = await Book.findByIdAndDelete(bookId)
        
        if(!deletedBook) {
            return res.status(404).send("book not found")
        }else{
            res.send("book deleted")
        }
        res.json(deletedBook)
    }catch(err) {
        res.status(500).send("server error")
    }
}