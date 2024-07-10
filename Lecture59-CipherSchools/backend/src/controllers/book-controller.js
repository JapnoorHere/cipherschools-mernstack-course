const InputValidationException = require("../exceptions/inputValidationException");
const Book = require("../models/Book");

const addBook = async(req,res) =>{
    try {
        console.log('Received book data:', req.body);
        const book = new Book({...req.body});
        console.log('Created book object:', book);
        await book.save();
        return res.status(201).send(book);
    } catch (error) {
        console.error('Error adding book:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).send({message: error.message});
        }
        return res.status(500).send({message: 'An unexpected error occurred while adding the book'});
    }
};


const getAllBooks = async (req,res) =>{
    try{
        const booklist = await Book.find(
            {$expr: {$lt : ["$issuedQuantity", "$totalQuantity"]}});
        res.status(200).send(booklist);
    } catch(error){
            console.error(error);
            return res.status(500)
            .send({message: error.message});
    }
}

module.exports ={addBook, getAllBooks};