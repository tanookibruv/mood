const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    mood: [String]
    note: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }
`;

module.exports = typeDefs;
