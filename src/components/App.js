import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, renderOnlyFavouriteMovies } from '../actions/action';
import { connect } from 'react-redux';


class App extends React.Component{

  componentDidMount = () => {
    // console.log(this.props.store);
    this.props.dispatch(addMovies(data));

  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    // if movie is found
    if (index !== -1){
      return true;
    }
    return false;
  }


  // FUNCTION FOR THE TAB MOVIES 

  allMovies = () => {

    this.props.dispatch(addMovies(data));
  }


  // FUNCTION FOR THE TAB FAVOURITES

  onlyFavouriteMovies = () => {

    const { movies } = this.props;

    if (movies.favourites.isFavListEmpty === true){
      return;
    }
    else{
      this.props.dispatch( renderOnlyFavouriteMovies(movies.favourites) )
    }

  }

  render(){

    const { movies, search } = this.props; // { movies: {}, search: {} }

    return (
      <div className = "App">
        <Navbar dispatch = {this.props.dispatch} search = {search} />
        <div className = "main">

          <div className = "tabs">
            <div className = "tab" onClick = {this.allMovies}>Movies</div>
            <div className = "tab" onClick = {this.onlyFavouriteMovies}>Favourites</div>
          </div>

          <div className = 'list'>
            {
              movies.movies.map((movie, index) => (
                <MovieCard movieData = {movie}
                key = {`movies ${index}`}
                dispatch = { this.props.dispatch }
                isMovieFavourite = { this.isMovieFavourite(movie) }
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

function callback (state){
  return {
    movies: state.movies,
    search: state.search
  }
}

const ConnectedAppComponent = connect(callback)(App);

export default ConnectedAppComponent;
