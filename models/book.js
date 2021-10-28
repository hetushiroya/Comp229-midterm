/*name : Hetu Shiroya
  Student id: 301204148
  Date: 10/28/2021 
  Mid Term*/ 
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        name: String,
        author: String,
        description: String,
        price: Number,
        genre:String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);