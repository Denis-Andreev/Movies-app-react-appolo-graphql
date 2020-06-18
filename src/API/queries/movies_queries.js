import {gql} from "apollo-boost";

export const GET_MOVIES = gql`
    query getMovies {
      movies {
        id
        genre
        watched
        name
        rate
        director {
          id
          name
          age
        }
        id
      }
    }
`;

export const GET_MOVIE = gql`
    query getMovie($id: ID) {
      movie(id: $id) {
        id
        genre
        watched
        name
        rate
        director {
          id
          name
          age
        }
      }
    }
`;
