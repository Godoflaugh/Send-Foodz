const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var fs = require('fs')
require('dotenv').config()
//Image processing
var multer = require('multer')
const { join } = require('path')
require('dotenv/config')
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(__dirname, 'uploads'))
  },
  filename: (req, file, cb) => {
    cb(null, file.name + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });
var Image = require('./models/Image')
var Recipe = require('./models/Recipe')

app.get('/', (req, res) => {
  Recipe.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    }
    else {
      // res.render('imagesPage', { items: items });
      res.json(items)
    }
  });
});

app.get('/recipes', (req, res) => {
  Recipe.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    }
    else {
      // res.render('imagesPage', { items: items });
      res.json(items)
    }
  });
});

app.post('/upload', upload.single('picture'), (req, res, next) => {
  console.log(req.body)
  var recipe = {
    recipeName: req.body.recipeName,
    ingredients: req.body.ingredients,
    cookingTime: req.body.cookingTime,
    instructions: req.body.instructions,
    equipment: req.body.equipment,
    picture: {
      data: fs.readFileSync(join(__dirname, 'uploads', req.file.filename)),
      contentType: 'image/png'
    }
  }


  Recipe.create(recipe, (err, item) => {
    if (err) {
      console.log(err);
    }
    else {
      item.save();
      res.sendStatus(200);
    }
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start()
  server.applyMiddleware({ app })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
}

startApolloServer(typeDefs, resolvers)