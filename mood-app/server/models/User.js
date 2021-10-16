const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = model('User', techSchema);

module.exports = User;
