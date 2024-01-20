const express = require('express')
const Booksdata = require('../model/Books');

const router = express.Router();

//route for save a book data 
router.post('/addBook', async (req, res) => {
    try {
        if (!req.body.Title || !req.body.Author || !req.body.PublishedYear) {
            return res.status(400).json({
                message: "Send all required Imformation !!"
            })
        }
        const newBook = {
            Title: req.body.Title,
            Author: req.body.Author,
            PublishedYear: req.body.PublishedYear,
        };

        const booksdata = await Booksdata.create(newBook);

        return res.status(200).json({
            message: "Book saved succesfully!!"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
});

//route for find all books

router.get('/', async (req, res) => {

    try {
        const books = await Booksdata.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })

    }
})


//router for find books element by id 

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Booksdata.findById(id);

        return res.status(200).json(book)
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
})



//router for update books elements

router.put('/:id', async (req, res) => {
    try {

        if (!req.body.Title || !req.body.Author || !req.body.PublishedYear) {
            return res.status(400).json({
                message: "Send all required information!! "
            })
        }
        const { id } = req.params;

        const result = await Booksdata.findByIdAndUpdate(id, req.body);

        if (!result) {
            res.status(400).json({
                message: "Books not found "
            });
        }
        return res.status(200).json({
            message: " Books updates Succesfully!!"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

})


//router for delete books information

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Booksdata.findByIdAndDelete(id);

        if (!result) {
            res.status(401).json({
                message: " book not found!!"
            })
        };
        return res.status(200).json({
            message: "Book deleted succesfully!!"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


})



module.exports = router;