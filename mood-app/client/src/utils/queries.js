import { gql } from '@apollo/client';

// query set up for user, just need to connect name and note from user input and the mood emoji from a selection chart

export const QUERY_USER = gql`
  query allUsers {
    users {
      _id
		  name
      mood
      note
  }
}
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($profileId: ID!) {
    user(userId: $userId) {
      _id
      name
      mood
      note
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      mood
      note
    }
  }
`;