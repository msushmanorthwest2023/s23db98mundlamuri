var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Search Results for Shoes' });
=======
  res.render('index', { title: 'Express' });
>>>>>>> 42f1c615d4c9e5cd94cef46d77927312780c5aa7
});

module.exports = router;
