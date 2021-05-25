const mongoose = require('mongoose')
const { Schema } = mongoose
const urlSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  url_short: {
    type: String,
    required: true
  }
}, { bufferCommands: false })

module.exports = mongoose.model('urlData', urlSchema)