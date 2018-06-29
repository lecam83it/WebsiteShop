var express = require('express');

var router = express.Router();
var productModel = require('../model/product');

//GET home page
router.get('/', function (req, res) {
    productModel.find({}, function (req , result) {
        res.render('index', {data : result});
    });
})

module.exports = router;