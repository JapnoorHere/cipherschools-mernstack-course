const InputValidationException = require("../exceptions/inputValidationException");
const Book = require("../models/Book");

const addBook = async(req,res) =>{
    try {
        const book = new Book({...req.body});
        await book.save();
        return res.status(201).send(book);
    } catch (error) {
        console.error(error);
        return res.status(error instanceof InputValidationException ? 400 : 500)
        .send({message: error.message});
    }
};


const getAllBooks = async (req,res) =>{
    try{
        const booklist = await Book.find();
        res.status(200).send(booklist);
    } catch(error){
            console.error(error);
            return res.status(500)
            .send({message: error.message});
    }
}

module.exports ={addBook, getAllBooks};