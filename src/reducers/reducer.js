
const initialMovieState = {
    movies: [],
    favourites: []
}

function movies (state = initialMovieState, action) {
    if (action.type === 'ADD_MOVIES'){
        return{
            ...state,
            movies: action.movies
        }
    }

    return state;
}

export default movies;