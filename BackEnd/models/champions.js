const mongoose = require('mongoose');
const championsSchema = new mongoose.Schema({
    type: String,
    format: String,
    version: String,
    data: Object
})
const championModel = mongoose.model('Champion List', championsSchema,'ChampionList');
module.exports = championModel;