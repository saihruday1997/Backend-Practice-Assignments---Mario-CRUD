const mongoose = require('mongoose')
const marioModel = require('./models/marioChar')
const data = require('./data')

const DATABASE_URL =  "mongodb://localhost/testaroo";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await marioModel.deleteMany({})
    // console.log(connection)
    await marioModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()