export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';

export function addMovies(movieArray){
    return {
        type: ADD_MOVIES,
        movies: movieArray
    }
}
export function addFavourites(movie){
    return {
        type: ADD_FAVOURITES
    }
}