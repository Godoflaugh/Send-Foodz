const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/foodzDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB...Database: foodzDB!')
  })
  .catch((err) => {
    conosle.log(err)
  })

module.exports = mongoose.connection;
