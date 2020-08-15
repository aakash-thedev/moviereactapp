import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, ONLY_FAVOURITES } from '../actions/action';

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
            favourites: [action.movie, ...state.favourites]
        }
    }

    else if (action.type === REMOVE_FAVOURITES){
        const index = state.favourites.indexOf(action.movie);
        delete state.favourites[index]
        return {
            ...state,
            favourites: [...state.favourites]
        }
    }

    else if (action.type === ONLY_FAVOURITES){

        return {
            ...state,
            movies: action.movies
        }
    }

    return state;
}

export default movies;