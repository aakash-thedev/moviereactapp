import React from 'react';
import { data } from '../data';
import { addMovieToList, handleMovieSearch } from '../actions/action';

class Navbar extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            showSearchResult : false,
            searchText: ''
        }
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch( addMovieToList(movie) );
    }

    handleChange = (event) => {
        console.log(event.target.value);

        let { showSearchResult } = this.state;

        if (event.target.value === ""){
            showSearchResult = false;
        }
        else{
            showSearchResult = true;
        }

        this.setState({
            showSearchResult: showSearchResult,
            searchText: event.target.value
        })
    }

    handleSearch = () => {
        const { searchText } = this.state;

        this.props.dispatch( handleMovieSearch(searchText) );
    }

    render(){
        return(
            <div className = "nav">
                <div className = "search-container">
                    <input onChange = {this.handleChange}/>
                    <button id = "search-btn" onClick = {this.handleSearch}>Search Button</button>

                {
                    this.state.showSearchResult ?
                        <div className = "search-results">
                            <div className = "search-result">
                                <img src = {data[0].Poster} alt = "search-poster"></img>

                                <div className = "movie-info">
                                    <span> {data[0].Title} </span>
                                    <button > Add To Movies </button>
                                </div>
                            </div>
                        </div>

                    :
                        <div></div>
                }

                </div>
            </div>
        )
    }
}

export default Navbar;