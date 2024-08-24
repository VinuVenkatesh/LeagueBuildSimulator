const mongoose = require('mongoose');
const itemsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    active: Boolean,
    from: Array,
    to: Array,
    price: Number,
    priceTotal: Number
})
const itemsModel = mongoose.model('Item List', itemsSchema, 'ItemList');
module.exports = itemsModel;