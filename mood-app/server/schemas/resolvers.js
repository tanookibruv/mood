const { User } = require('../models');

//need to add a return to generate USER information once logged in
// currently working on add notes and moods for user.

const resolvers = {
  Query: {
    users: async () => {
      console.log('testing')
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
};

module.exports = resolvers;
