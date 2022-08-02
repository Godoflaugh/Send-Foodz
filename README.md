# Project-3

const resolvers = {
  Query: {
    string: async () => {
      return 'hello'
    },
    recipe: async () => {
      return Recipe.find({})
    }
  }

   type Query {
  recipe: [Recipe]
 }
`



MERN
Mongo Express React Node
Mongo Database
Express Server
React Front End
Node on the backend
Apo

GraphQL - More customizable and better way to utilize CRUD
Apollo - Open server port runs the server port between graphQL and Database/client  (TypeDefs and Resolvers)

NPM run develop

NPM start (backend)