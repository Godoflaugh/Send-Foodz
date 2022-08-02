import { gql } from '@apollo/client';

export const ADD_RECIPE = gql`
 mutation addRecipe($recipeName: String!, username: String!, ingredients: String!, cookingTime: Int!, instructions: String!, equipment: String! ) {
   addRecipe(recipeName: $recipeName, username: $username, ingredients: $ingredients, cookingTime: $cookingTime, instructions: $instructions, equipment: $equipment) {
    _id
    recipeName
    username
    ingredients
    cookingTime
    instructions
    equipment
    
    }
   }
 `

