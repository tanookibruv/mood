import { gql } from '@apollo/client';

// add mutations to receive and post data that was once user input for name and note for the day including the image for a mood.
export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_MOOD = gql`
    mutation addMood($profileId: ID!, $mood: [String]) {
        addMood(profile: $profileId, mood: $mood) {
            _id
            name
            mood
        }
    }
`;

export const ADD_NOTE = gql`
    mutation addNote($profileId: ID!, $note: String!) {
        addNote(profileId: $profileId, note: $note) {
            _id
            name
            note
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`;