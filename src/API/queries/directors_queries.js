import {gql} from "apollo-boost";

export const GET_DIRECTORS = gql`
    query getDirectors {
      directors{
        id
        name
        age
        movies {
          name
          genre
          rate
        }
      }
    }
`;

export const GET_DIRECTOR = gql`
    query getDirector($id: ID) {
      director(id: $ID) {
        id
        name
        age
        movies {
          name
          genre
          rate
        }
      }
    }
`;
export const GET_DIRECTOR_MOVIES = gql`
    query getDirector($id: ID) {
      director(id: $ID) {
        id
        name
        age
        movies {
          name
          genre
          rate
        }
      }
    }
`;