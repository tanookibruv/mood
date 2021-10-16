const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    mood: String!
    note: String!
  }

  type Matchup {
    _id: ID!
    user1: String!
    user2: String!
  }

  type Query {
    tech: [User]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(user1: String!, user2: String!): Matchup
  }
`;

module.exports = typeDefs;
