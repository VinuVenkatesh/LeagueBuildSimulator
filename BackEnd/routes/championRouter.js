const championController = require('../controllers/championController');
const express = require('express');

const championRouter = express.Router();

championRouter.get("/champions", championController.getAllChampions);

module.exports = championRouter;
