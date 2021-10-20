import { gql } from '@apollo/client';

// query set up for user, just need to connect name and note from user input and the mood emoji from a selection chart

export const QUERY_USER = gql`
  query user {
    user {
      _id
      name
      mood
      note
    }
  }
`;