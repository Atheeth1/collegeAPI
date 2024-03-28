import { gql } from "@apollo/client";

const GET_COUNTRYS = gql`
  query getCountrys {
    countrys {
      id
      name
      client {
        id
        name
        email
        phone1
      }
    }
  }
`;



const GET_COUNTRY = gql`
  query getCountry($id: ID!) {
    country(id: $id) {
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

export { GET_COUNTRYS, GET_COUNTRY };
