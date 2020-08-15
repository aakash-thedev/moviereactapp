import React from 'react';
import { addFavourites } from '../actions/action';

class MovieCard extends React.Component{

    addToFavourites = () => {
        const { movieData } = this.props;

        this.props.dispatch(addFavourites(movieData))
    }

    render(){

        const { movieData } = this.props;

        return(
            <div className = "movie-card">
                <div className = "left">
                    <img src = { movieData.Poster } alt = "movie-poster"></img>
                </div>
                <div className = "right">
                    <div className = "title"> {movieData.Title} </div>
                    <div className = "plot"> {movieData.Plot} </div>
                    <div className = "footer">
                        <div className = "rating"> {movieData.imdbRating} </div>
                        <button className = "favourite-btn" onClick = {this.addToFavourites}>Favourite</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;