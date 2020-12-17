const mongoose = require('mongoose');

//  Your code goes here
const marioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    weight: {
        type: Number,
        required: true,
        min: 1
    }
})

let mariochar = mongoose.model("mariochar", marioSchema);

module.exports = mariochar;