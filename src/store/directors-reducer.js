const SET_DIRECTORS = 'SET_DIRECTORS';
const ADD_DIRECTOR = 'ADD_DIRECTOR';
const UPDATE_DIRECTOR = 'UPDATE_DIRECTOR';
export const setDirectorAC = (directors) => ({type: SET_DIRECTORS, directors});
export const addDirectorAC = (director) => ({type: ADD_DIRECTOR, director});
export const updateDirectorAC = (id, directorInfo) => ({type: UPDATE_DIRECTOR, id, directorInfo})
const initialState = {
    directors: [],
}

export const directorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIRECTORS: {
            return {
                ...state,
                directors: action.directors
            }
        }
        case ADD_DIRECTOR: {
            return {
                ...state,
                directors: [...state.directors, action.director],
            }
        }
        case UPDATE_DIRECTOR: {
            return {
                ...state,
                directors: state.directors.map(director => {
                    if (director.id === action.id) {
                        director = action.directorInfo;
                    }
                    return director;
                }),
            }
        }
        default: {
            return state;
        }
    }
}