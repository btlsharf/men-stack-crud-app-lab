const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
    name: String,
    age: Number,
    meow: String,
    isCute: Boolean,
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
