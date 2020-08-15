import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies } from '../actions/action';

class App extends React.Component{

  componentDidMount = () => {
    // console.log(this.props.store);

    this.props.store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    })

    // basically we are dispatching the action by a hard code 
    // what if we want this action hundreds of time
    // simpler way is just go to actions and create a action function and everytime just call that function
    
    // this.props.store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies: data
    // })

    this.props.store.dispatch(addMovies(data));



    console.log('Now State becomes', this.props.store.getState())
  }

  render(){

    const {movies} = this.props.store.getState(); // { movies: [], favourites: [] }

    return (
      <div className = "App">
        <Navbar />
        <div className = "main">

          <div className = "tabs">
            <div className = "tab">Movies</div>
            <div className = "tab">Favourites</div>
          </div>

          <div className = 'list'>
            { 
              movies.map((movie, index) => (
                <MovieCard movieData = {movie}
                key = {`movies ${index}`}
                dispatch = { this.props.store.dispatch }
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
