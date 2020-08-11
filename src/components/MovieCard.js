import React from 'react';

class MovieCard extends React.Component{
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
                        <button className = "favourite-btn">Favourite</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;