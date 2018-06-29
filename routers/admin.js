var express = require('express');
var multer = require('multer');

var router = express.Router();

var productModel = require('../model/product');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    }
})

var upload = multer({ storage: storage});

//GET admin page
router.get('/create', function (req, res) {
    res.render('admin');
});
router.post('/create', upload.single("imgOfProduct") , function (req, res, next) {
    var product = {
        "name": req.body.nameOfProduct,
        "cost": req.body.costOfProduct,
        "uri" : req.file.path
    };
    productModel.insertMany(product, function (req, result) {
        res.redirect('/admin/');
    });
});

//GET manager page
router.get('/', function (req, res) {
    productModel.find({}, function (req, result) {
        res.render('manager', {data : result});
    });
});


module.exports = router;