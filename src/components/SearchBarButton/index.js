import React, {useState} from 'react';
import searchIcon from "../../assets/icons/search.svg";
import {withRouter} from 'react-router-dom';

import './styles.css';


function SearchBarButton(props) {
    const [userName, setUserName] = useState(""); 

    const onChangeHandler = event => {
        setUserName(event.target.value);
    };

    const onSubmitHandler = event => {
        event.preventDefault();

        if(userName !== ""){
            props.history.push(`/result/${userName}`);
            props.onButtonClick();
        }
    }

    return(
        <div id="container">
            <input type="text" className="search-input" onChange={onChangeHandler} value={userName}></input>
            <button type="submit" onClick={onSubmitHandler}>
                <img src={searchIcon} alt="buscar"></img>
            </button>
        </div>   
    )

}

export default withRouter(SearchBarButton);