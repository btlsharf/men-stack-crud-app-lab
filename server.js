const express = require("express");
const PORT = 3000; // should be in env
const morgan = require('morgan');
const app = express();
const mogoose = require('mongoose');

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});


