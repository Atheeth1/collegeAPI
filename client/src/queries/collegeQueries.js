import { gql } from '@apollo/client';

const GET_COLLEGES = gql`
  query getColleges {
    colleges {
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
    }
  }
`;

const GET_COLLEGE = gql`
  query getCollege($id: ID!) {
    college(id: $id) {
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

export { GET_COLLEGES, GET_COLLEGE };
