const { User } = require('../models');

//need to add a return to generate USER information once logged in
// currently working on add notes and moods for user.

const resolvers = {
  Query: {
    users: async () => {
      const user = await User.find();
      console.log(user)
      return user
    },

    user: async (parent, { userId }) => {
      if (context.user) {
      return User.findOne({ _id: userId });
      }
    },
  },
};

module.exports = resolvers;
