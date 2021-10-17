const { User } = require('../models');

//need to add a return to generate USER information once logged in

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
  },
};

module.exports = resolvers;
