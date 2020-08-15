export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const ONLY_FAVOURITES = 'ONLY_FAVOURITES';

export function addMovies(movieArray){
    return {
        type: ADD_MOVIES,
        movies: movieArray
    }
}

export function addFavourites_Action(movieData){
    return {
        type: ADD_FAVOURITES,
        movie: movieData
    }
}

export function removeFavourites_Action(movieData){
    return {
        type: REMOVE_FAVOURITES,
        movie: movieData
    }
}

export function renderOnlyFavouriteMovies(favouriteArray){
    return {
        type: ONLY_FAVOURITES,
        movies: favouriteArray
    }
}