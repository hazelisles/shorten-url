const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/short-url'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => handleError(error))

const db = mongoose.connection

db.on('error', () => console.log('MongoDB Error!'))

db.once('open', () => console.log('MongoDB Connected!'))

module.exports = db