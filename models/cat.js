const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    breed: { 
        type: String, 
        required: true 
    },
    age: Number,
    meow: String,
    isCute: Boolean,
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
