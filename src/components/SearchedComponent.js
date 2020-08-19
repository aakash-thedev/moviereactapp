import React from 'react';

const SearchedComponents = (props) =>{

    const { result, handleAddToMovies } = props;

    return (
        <div className = "search-results">
            <div className = "search-result">
                <img src = {result.Poster} alt = "search-poster"></img>

                <div className = "movie-info">
                    <span> {result.Title} </span>
                    <button onClick = {() => handleAddToMovies(result)}> Add To Movies </button>
                </div>
            </div>
        </div>
    )
}

export default SearchedComponents;