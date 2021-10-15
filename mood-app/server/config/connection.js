const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.mongooseuri || 'mongodb://localhost/techmatchup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
