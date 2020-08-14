import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

class App extends React.Component{

  componentDidMount = () => {
    // console.log(this.props.store);

    this.props.store.subscribe(() => {
      console.log('Updated');
    })

    this.props.store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
    console.log('Now State becomes', this.props.store.getState())
  }

  render(){

    const movies = this.props.store.getState();

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
