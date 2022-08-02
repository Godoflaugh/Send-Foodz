import { gql } from '@apollo/client'

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
    }
  }
`

export const QUERY_RECIPES = gql`
  query getRecipes {
    recipes {
      _id
      recipeName
      username
      ingredients
      cookingTime
      instructions
      equipment
      picture
      comments{
        commentBody
      }
    }
  }
`

