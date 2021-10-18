const db = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

//need to modify to receive user input to store user name, mood, and note

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});
