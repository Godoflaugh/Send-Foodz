const db = require("../config/connection")
const { User, Recipe, Comment } = require("../models")

const userData = require('./UserData.json')
const recipeData = require('./RecipeData.json')
const commentData = require('./CommentsData.json')

db.once('open', async () => {
  await User.deleteMany({})
  await Recipe.deleteMany({})
  await Comment.deleteMany({})

  const users = await User.insertMany(userData)
  const recipes = await Recipe.insertMany(recipeData)
  const comments = await Comment.insertMany(commentData)

  console.log('Recipe and Users are seeded! ')
  process.exit(0)
})