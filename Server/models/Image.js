const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const imgSchema = new Schema({
  name: String,
  desc: String,
  picture: {
    data: Buffer,
    contentType: {
      type: String,
      default: 'image/png'
    }
  }
})
const Image = model('image', imgSchema)
module.exports = Image