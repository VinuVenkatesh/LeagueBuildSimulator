const mongoose = require('mongoose');
const items = require('../models/items');

async function getAllItems(req, res){
    const data = await items.find();
    res.send(data);
}

module.exports = {
    getAllItems
}