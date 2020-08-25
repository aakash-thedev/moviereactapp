// apikey=9d25581d

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const ONLY_FAVOURITES = 'ONLY_FAVOURITES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_SEARCH_TO_STORE = 'ADD_SEARCH_TO_STORE';
// export const ALL_MOVIES = "ALL_MOVIES";

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

export function addMovieToList(movieData){
    return {
        type: ADD_MOVIE,
        movie: movieData
    }
}

export function handleMovieSearch(searchText){
    const url = `http://www.omdbapi.com/?apikey=9d25581d&t=${searchText}`;
    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            dispatch( addSearchResultToStore(movie) );
        })
    }
}

export function addSearchResultToStore(movie){
    return {
        type: ADD_SEARCH_TO_STORE,
        movie
    }
}