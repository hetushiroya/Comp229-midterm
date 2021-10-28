var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let bookController = require('../controllers/book');

// Router for lists books function
router.get('/list', bookController.bookList);
/*name : Hetu Shiroya
  Student id: 301204148
  Date: 10/28/2021 
  Mid Term*/


// Router for book details function
router.get('/details/:id', bookController.details);

// Routers for edit functions
router.get('/edit/:id', bookController.displayEditPage);
router.post('/edit/:id', bookController.processEditPage);

// Router for Delete function
router.get('/delete/:id', bookController.performDelete);

// Routers for Add functions
router.get('/add', bookController.displayAddPage);
router.post('/add', bookController.processAddPage);


module.exports = router;