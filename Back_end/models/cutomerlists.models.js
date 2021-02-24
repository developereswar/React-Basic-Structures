const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerListsSchema = new Schema({
            name: { type: String, required: true, index: { unique: true } },
            email: { type: String, required: true, index: { unique: true } },
            mobile: { type: String, required: true, index: { unique: true } },
            status: { type: Number },
            pruchaseDetails: {type: Array}
        });

module.exports = mongoose.model('customerlists', customerListsSchema);;