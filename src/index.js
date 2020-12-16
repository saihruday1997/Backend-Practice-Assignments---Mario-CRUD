const express = require('express');
const mongoose = require('mongoose');
const port = 3000
const app = require('./app');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));