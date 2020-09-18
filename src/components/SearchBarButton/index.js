import React from 'react';
import searchIcon from "../../assets/icons/search-icon.svg";



function SearchBarButton() {
    return(
        <div className="github-search">
            <input type="text" className="search-input"></input>
            <button>
                <img src={searchIcon} alt="buscar"></img>
            </button>
        </div>   
    )
}

export default SearchBarButton;