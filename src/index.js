
const mongoose = require('mongoose');
const port = 3000
const app = require('./app');
const marioModel = require("./models/marioChar");
const data = require("./data");

mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
});

const refreshAll = async () => {
    await marioModel.deleteMany({})
    // console.log(connection)
    await marioModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()

app.listen(port, () => console.log(`App listening on port ${port}!`));