const mongoose = require('mongoose');
const champions = require('../models/champions');

async function getAllChampions(req, res){
    const data = await champions.find();
    res.send(data[0].data);
}

module.exports = {
    getAllChampions
}