import { gql } from '@apollo/client';

const ADD_COLLEGE = gql`
  mutation AddCollege(
    $title:String!
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $stateId: ID!
    $clientId: ID!
  ) {
    addCollege(
      title: $title
      name: $name
      description: $description
      state:$state
      status: $status
      clientId: $clientId
    ) {
      id
      title
      name
      description
      state{
        id
        name
        description
      }
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

const DELETE_COLLEGE = gql`
  mutation DeleteCollege($id: ID!) {
    deleteCollege(id: $id) {
      id
    }
  }
`;

const UPDATE_COLLEGE = gql`
  mutation UpdateCollege(
    $id: ID!
    $title: String!
    $name: String!
    $description: String!
    $state:String!
    $status: ProjectStatusUpdate!
  ) {
    updateCollege(
      id: $id
      title: $title
      name: $name
      description: $description
      state:$state
      status: $status
    ) {
      id
      name
      description
      state{
        id
        name
        description
      }
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

export { ADD_COLLEGE, DELETE_COLLEGE, UPDATE_COLLEGE };
