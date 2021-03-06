import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_FAVOURITES, REMOVE_FAVOURITES, SET_SHOW_FAVOURITES, ADD_MOVIE, ADD_SEARCH_TO_STORE } from '../actions/action';
import * as firebase from 'firebase';
import 'firebase/firestore';

const initialMovieState = {
    movies: [],
    favourites: [],
    showFavourites: false,
    isMovieFavourite: false
}

export function movies (state = initialMovieState, action) {

    if (action.type === ADD_MOVIES){
        return {
            ...state, // old state
            movies: action.movies // updated value of movie in old state
        }
    }

    else if (action.type === ADD_FAVOURITES){

        firebase
        .firestore()
        .collection('favourites')
        .add(action.movie)

        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
    }

    else if (action.type === REMOVE_FAVOURITES){
        const index = state.favourites.indexOf(action.movie);
        state.favourites.splice(index, 1);
        return {
            ...state,
            favourites: [...state.favourites]
        }
    }

    else if (action.type === SET_SHOW_FAVOURITES){

        return {
            ...state,
            showFavourites: action.showFavourites
        }
    }

    else if (action.type === ADD_MOVIE){
        
        firebase
        .firestore()
        .collection('movies')
        .add(action.movie)

        return {
            ...state,
            movies: [action.movie, ...state.movies]
        }
    }

    return state;
}

// creating search reducer

const initialSearchState = {
    result : {},
    showSearchResult: false
}

export function search(state = initialSearchState, action){

    if (action.type === ADD_SEARCH_TO_STORE){
        return {
            ...state,
            result: action.movie,
            showSearchResult: true
        }
    }

    else if (action.type === ADD_MOVIE){
        

        return {
            ...state,
            showSearchResult: false
        }
    }

    return state;
}

// creating root state ( inside which our movies and search reducers will do their job)

// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// }

// export default function rootReducer(state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

// or we can use combineReducers function provided by redux 

export default combineReducers({
    movies: movies,
    search: search
})