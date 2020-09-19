import React from 'react';
import searchIcon from "../../assets/icons/search-icon.svg";
import './styles.css';

function SearchBarButton() {
    return(
        <div id="container">
            <input type="text" className="search-input"></input>
            <button>
                <img src={searchIcon} alt="buscar"></img>
            </button>
        </div>   
    )
}

export default SearchBarButton;