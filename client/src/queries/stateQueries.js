import { gql } from '@apollo/client';

const GET_STATES = gql`
  query getStates {
    states {
      id
      name
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const GET_STATE = gql`
  query getState($id: ID!) {
    state(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_STATES, GET_STATE };
