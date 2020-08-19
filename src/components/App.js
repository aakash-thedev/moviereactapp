import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies, renderOnlyFavouriteMovies } from '../actions/action';

class App extends React.Component{

  componentDidMount = () => {
    // console.log(this.props.store);

    this.props.store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
      console.log('Now State becomes', this.props.store.getState());
    })

    this.props.store.dispatch(addMovies(data));

  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    // if movie is found
    if (index !== -1){
      return true;
    }
    return false;
  }

  allMovies = () => {
    this.props.store.dispatch( addMovies(data) );
  }

  onlyFavouriteMovies = () => {

    const { movies } = this.props.store.getState();

    if (movies.favourites.isFavListEmpty === true){
      return;
    }
    else{
      this.props.store.dispatch( renderOnlyFavouriteMovies(movies.favourites) )
    }

  }

  render(){

    const { movies, search } = this.props.store.getState(); // { movies: {}, search: {} }

    return (
      <div className = "App">
        <Navbar dispatch = {this.props.store.dispatch} search = {search} />
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
                dispatch = { this.props.store.dispatch }
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

export default App;
