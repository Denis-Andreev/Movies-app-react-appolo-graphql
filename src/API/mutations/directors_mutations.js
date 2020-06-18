import {gql} from 'apollo-boost'

export const ADD_DIRECTOR = gql`
    mutation addDirector($name: String, $age: Int) {
        addDirector(name: $name, age: $age) {
            id
        }
    }
`;

export const DELETE_DIRECTOR = gql `
    mutation deleteDirector($id: ID) {
        deleteDirector(id: $id) {
            id
        }
    }
`;

export const UPDATE_DIRECTOR = gql `
    mutation updateDirector($id: ID, $name: String, $age: Int) {
        updateDirector(id: $id, name: $name, age: $age) {
            name
            age
        }
    }
`;