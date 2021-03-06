const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Database connection
const mongoDB = 'mongodb+srv://admin:admin@qsdb-6nihr.mongodb.net/project?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Defining and creating schema
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:String,
    author:String,
    year:String,
    cover:String,
    status:String
})

const BookModel = mongoose.model('book', bookSchema);

// Get book data from db
app.get('/api/books', (req, res) => {

    BookModel.find((error, data) =>{
        res.json({books:data});
    })
})

// Get book by id
app.get('/api/books/:id', (req, res)=>{
    BookModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

// Delete book by id
app.delete('/api/books/:id', (req, res)=>{
    BookModel.deleteOne({_id:req.params.id},
        (error, data)=> {
            res.json(data);
        })
})

// Post a new book
app.post('/api/books', (req,res)=>{
    BookModel.create({
        title:req.body.title, 
        author:req.body.author,
        year:req.body.year,
        cover:req.body.cover,
        status:req.body.status
    });

    res.json('post recieved!');
})

// Update book data
app.put('/api/books/:id',(req,res)=>{
    BookModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

// Getting a book by id
app.get('/api/books/:id', (req,res)=>{
    BookModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))