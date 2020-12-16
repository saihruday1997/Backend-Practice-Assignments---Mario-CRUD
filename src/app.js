const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario", (req, res) => {
    marioModel.find().then((mario) => res.send(mario));
});

app.get("/mario/:id", (req, res) => {
    let id = req.params.id;

    marioModel.findById(id)
        .then((mario) => res.send(mario))
        .catch(err => res.status(400).send({message: err.message}));
});

app.post("/mario", (req, res) => {
    let mario = new marioModel(req.body);

    mario.save()
        .then(mario => res.status(201).send(mario))
        .catch(() => res.status(400).send({message: 'either name or weight is missing'}));
});

app.patch("/mario/:id", (req, res) => {
    let id = req.params.id;

    let mario = req.body;

    marioModel.findByIdAndUpdate(id, mario)
        .then(mario => res.send(mario))
        .catch((err) => res.status(400).send({message: err.message}));
});

app.delete("/mario/:id", (req, res) => {
    let id = req.params.id;

    marioModel.findByIdAndDelete(id)
        .then(() => res.status(200).send({message: 'character deleted'}))
        .catch((err) => res.status(400).send({message: err.message}));

});

module.exports = app;