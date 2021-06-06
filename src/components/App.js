import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions/action';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component{

  componentDidMount = () => {
    firebase
    .firestore()
    .collection('movies')
    .onSnapshot( (snapshot) => {
      const moviesArray = snapshot.docs.map((item) => {
        let data = item.data();
        return data;
      })

      console.log('Movies array', moviesArray);
      this.props.dispatch(addMovies(moviesArray));
    })

    // console.log(this.props.store);
    // this.props.dispatch(addMovies(data));

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


  changeTab = (value) => {
    this.props.dispatch( setShowFavourites(value) )
  }

  render(){

    const { movies, search } = this.props; // { movies: {}, search: {} }
    const { showFavourites } = movies;

    const displayMovies = showFavourites ? movies.favourites : movies.movies

    return (
      <div className = "App">
        <Navbar dispatch = {this.props.dispatch} search = {search} />

        <aside className = "sidebar">
            <div className = "tabs">
                <div className = {`tab ${showFavourites ? '' : 'active-tabs'}`} onClick = {() => this.changeTab(false)}>Home</div>
                <div className = {`tab ${showFavourites ? 'active-tabs' : ''}`} onClick = {() => this.changeTab(true)}>Favourites</div>
            </div>
        </aside>

        <div className = "main">

          <div className = 'list'>
            {
              displayMovies.map((movie, index) => (
                <MovieCard movieData = {movie}
                key = {`movies ${index}`}
                dispatch = { this.props.dispatch }
                isMovieFavourite = { this.isMovieFavourite(movie) }
                />
              ))
            }
          </div>

          {(displayMovies === movies.movies && displayMovies.length === 0) ? <div className = "no-movies"> Fetching Movies ...</div> : null}
          {(displayMovies === movies.favourites && displayMovies.length === 0) ? <div className = "no-movies"> No Movies in Favourites</div> : null}

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
