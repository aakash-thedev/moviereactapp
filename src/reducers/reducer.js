import { ADD_MOVIES, ADD_FAVOURITES } from '../actions/action';

const initialMovieState = {
    movies: [],
    favourites: []
}

function movies (state = initialMovieState, action) {
    if (action.type === ADD_MOVIES){
        return {
            ...state, // old state
            movies: action.movies // updated value of movie in old state
        }
    }

    else if (action.type === ADD_FAVOURITES){
        return {
            ...state,
            favourites: []
        }
    }

    return state;
}

export default movies;