const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
      productName: {type:String},
      productStages: {type: Array}
    });

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;

