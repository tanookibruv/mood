const { Schema, model } = require('mongoose');

const matchupSchema = new Schema({
  user1: {
    type: String,
    required: true,
  },
  user2: {
    type: String,
    required: true,
  },
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
