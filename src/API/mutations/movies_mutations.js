import {gql} from "apollo-boost";

export const ADD_MOVIE = gql`
    mutation addMovie($name: String, $genre: String, $watched: Boolean, $rate: Int, $directorId: ID) {
        addMovie(name: $name, genre: $genre, watched: $watched, rate: $rate, directorId: $directorId) {
            id
        }
    }
`;

export const DELETE_MOVIE = gql `
    mutation deleteMovie($id: ID) {
        deleteMovie(id: $id) {
            id
        }
    }
`;

export const UPDATE_MOVIE = gql `
    mutation updateMovie($id: ID, $name: String, $genre: String, $watched: Boolean, $rate: Int) {
        updateMovie(id: $id,name: $name, genre: $genre, watched: $watched, rate: $rate) {
            name
            genre
            watched
            rate
        }
    }
`;
