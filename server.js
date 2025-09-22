const express = require("express");
const PORT = 3000; // should be in env
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const Cat = require("./models/cat");

//Middleware
app.use(express.urlencoded({ extended: false }));

//DB connection
dotenv.config(); // Loads the environment variables from .env file
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});

//GET new (create new 1)
app.get('/cats/new', (req, res) => {
  res.render('cats/new.ejs');
})

//POST create (create new 2) 
app.post('/cats', async (req,res) => {
    if (req.body.isCute === ' on'){
      req.body.isCute = true;
    } else {
      req.body.isCute = false;
    }
    await Cat.create(req.body);
    res.redirect('/cats/new')
})

//GET index
app.get('/cats', async (req, res) => {
  const allCats = await Cat.find();
  res.render('cats/index.ejs', {cats: allCats} );
});

//GET show one
app.get('/cats/:catId', async (req, res) => {
  const foundCat = await Cat.findById(req.params.catId);
  res.render('cats/show.ejs', { cat: foundCat});
});

//Get Edit
