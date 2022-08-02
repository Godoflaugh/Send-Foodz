const { Schema, model } = require("mongoose")
const dateFormat = require('../utils/dateFormat')

const recipeSchema = new Schema(
  {

    recipeName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    username: {
      type: String,

      //* This needs to relate to a user that exists.
      ref: "user"
    },
    ingredients: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    instructions: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    picture: {
      data: Buffer,
      contentType: {
        type: String,
        default: 'img/png'
      }
    },
    comments: [
      {
        commentBody: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        }
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
)



const Recipe = model('recipe', recipeSchema)
module.exports = Recipe