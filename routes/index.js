/*name : Hetu Shiroya
  Student id: 301204148
  Date: 10/28/2021 
  Mid Term*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
