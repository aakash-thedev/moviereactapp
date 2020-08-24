import React from 'react';
import SearchedComponents from './SearchedComponent';
import { addMovieToList, handleMovieSearch } from '../actions/action';
import { connect } from 'react-redux';

class Navbar extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            searchText: ''
        }
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch( addMovieToList(movie) );
        return;
    }

    handleChange = (event) => {

        this.setState({
            searchText: event.target.value
        })
    }

    handleSearch = () => {
        const { searchText } = this.state;

        this.props.dispatch( handleMovieSearch(searchText) );
        return;
    }

    render(){

        const { result, showSearchResult } = this.props.search;
        
        return(
            <div className = "nav">
                <div className = "search-container">
                    <input onChange = {this.handleChange}/>
                    <button id = "search-btn" onClick = {this.handleSearch}>Search Button</button>

                {
                    showSearchResult ?
                        <SearchedComponents
                            result = {result}
                            handleAddToMovies = {this.handleAddToMovies}
                        />
                    :
                        <div></div>
                }

                </div>
            </div>
        )
    }
}

function callback (state){
    return {
        search: state.search
    }
}

const ConnectedNavBarComponent = connect(callback)(Navbar);

export default ConnectedNavBarComponent;