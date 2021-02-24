const mongoose = require('mongoose');
const constantInfo = require('./constant');


module.exports = function(){
mongoose.connect(constantInfo.DB_Details.hostName, constantInfo.DB_Details.options).catch(error => console.error(error));
}