const mongoose = require('mongoose');

//  Your code goes here
const marioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    }
})

let mariochar = mongoose.model("mariochar", marioSchema);

module.exports = mariochar;