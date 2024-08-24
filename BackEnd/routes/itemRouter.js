const itemController = require('../controllers/itemController');
const express = require('express');

const itemRouter = express.Router();

itemRouter.get("/items", itemController.getAllItems);

module.exports = itemRouter;
