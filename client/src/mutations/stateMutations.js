import { gql } from "@apollo/client";

const ADD_STATE = gql`
  mutation AddState(
    $name: String!
    $description: String!
    $status: StateStatus!
    $clientId: ID!
    $countryId:ID!
  ) {
    addState(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
      countryId:$countryId
    ) {
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
      country{
        id
        name
      }
    }
  }
`;

const DELETE_STATE = gql`
  mutation DeleteState($id: ID!) {
    deleteState(id: $id) {
      id
    }
  }
`;

const UPDATE_STATE = gql`
  mutation UpdateState(
    $id: ID!
    $name: String!
    $description: String!
    $status: StateStatusUpdate!
  ) {
    updateState(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
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
      country{
        id
        name
      }
    }
  }
`;

export { ADD_STATE, DELETE_STATE, UPDATE_STATE };
