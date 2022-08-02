const { Schema, model } = require("mongoose")
const dateFormat = require('../utils/dateFormat')


const commentSchema = new Schema(
  {

    commentBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  }
)

const Comment = model('comment', commentSchema)
module.exports = Comment