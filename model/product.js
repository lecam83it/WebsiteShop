var mongoose = require('mongoose');

var productSchema = mongoose.Schema({ "name": String, "cost": Number, "uri": String });

module.exports = mongoose.model('product', productSchema);