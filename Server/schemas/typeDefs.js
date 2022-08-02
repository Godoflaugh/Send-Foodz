const { gql } = require('apollo-server-express')

const typeDefs = gql`


type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Image {
    data: String
    contentType: String
}

type Recipe {
  _id: ID
  recipeName: String
  username: String
  ingredients: String
  cookingTime: Int
  instructions: String
  equipment: String
  picture: Image
  comments: [comments]!

}

type comments {
  _id: ID
  commentBody: String!
  createAt: String!
  username: String!
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]!
  user (userId: ID!): User
  recipes: [Recipe]!
  recipe (recipeID: ID!): Recipe

}

type Mutation {
  
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  updateUser(username: String!): User
  createRecipe(recipeName: String!, username: String!, ingredients: String!, cookingTime: String!, instructions: String!, equipment: String!, img: String): Recipe
  addComment(commentBody: String!, username: String!): comments
  removeComment(commentId: ID!): comments
}

`
module.exports = typeDefs

// createUser(username: String!, email: String!): User