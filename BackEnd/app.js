const express = require('express');
const app = express();
const port = 3000;
const dBConnection = require('./config/db');
const championRouter = require('./routes/championRouter');
const itemRouter = require('./routes/itemRouter');

dBConnection();
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

app.use(championRouter);
app.use(itemRouter);