import { gql } from '@apollo/client';

const ADD_COUNTRY = gql`
  mutation AddCountry(
    $name: String!
    $description: String!
    $clientId: ID!
  ) {
    addCountry(
      name: $name
      description: $description
      clientId: $clientId
    ) {
      id
      name
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_COUNTRY = gql`
  mutation DeleteCountry($id: ID!) {
    deleteCountry(id: $id) {
      id
    }
  }
`;

const UPDATE_COUNTRY = gql`
  mutation UpdateCountry(
    $id: ID!
    $name: String!
    $description: String!
  ) {
    updateCountry(
      id: $id
      name: $name
      description: $description
    ) {
      id
      name
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { ADD_COUNTRY, DELETE_COUNTRY, UPDATE_COUNTRY };
