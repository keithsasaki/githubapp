import React, {useState} from 'react';
import searchIcon from "../../assets/icons/search.svg";
import {withRouter} from 'react-router-dom';

import './styles.css';


function SearchBarButton(props) {
    const [userName, setUserName] = useState(""); 

    return(
        <div id="container">
            <input type="text" className="search-input" onChange={handleChange} value={userName}></input>
            <button onClick={handleSubmit}>
                <img src={searchIcon} alt="buscar"></img>
            </button>
        </div>   
    )

    function handleChange(event){
        setUserName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();

        if(userName !== ""){
            props.history.push(`/result/${userName}`);
        }
    }
}

export default withRouter(SearchBarButton);