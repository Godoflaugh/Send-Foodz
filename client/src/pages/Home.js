import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@apollo/client'
import UserPage from '../components/UserPage'
import RecipePage from '../components/RecipePage'

import { QUERY_RECIPES } from '../utils/queries'
import { QUERY_USERS } from '../utils/queries'
import background from '../components/Images/bkrf.jpg'

const Home = () => {

  const { loading: userLoading, data: userData } = useQuery(QUERY_USERS)
  const users = userData?.users || []
  console.log(users)

  // const { loading, data } = useQuery(QUERY_RECIPES)
  // const recipes = data?.recipes || []
  // console.log(recipes)

  // const [pictureData, setData] = useState([])

  //The /express route from the server.js is then referred to here as the get route to access the data base. The recipeData variable the data that will need to be passed to the specifc page that will utilize the data and rendering it.
  const [recipeData, setRecipeData] = useState([])
  useEffect(() => {
    axios
      .get("/recipes")
      .then((res) => {
        console.log(res)
        setRecipeData(res.data)
      })
      .catch((err) => console.log(err, "There is an error"))

  }, [])

  // TODO This screen is for the main page that will have the accordian style cards from MUI that will scale responsively to the content inside. Each card will dispaly the image of the recipe as well as the recipe name and user name. Once the card is clicked on then It will take it too a new page that will expand the image and show the full instructions for the recipe.

  return (
    <main>

      <div className="container" style={{ backgroundImage: `url(${background})`, color: 'Black', fontWeight: 'bold', paddingTop: '25px', backgroundSize: 'cover' }}>
        <h1 style={{ textAlign: "center" }}></h1>


        <RecipePage
          recipes={recipeData}
          title="Recipe Page"
        />
      </div>
    </main >
  )
}

export default Home