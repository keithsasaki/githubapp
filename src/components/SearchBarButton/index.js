import React, {useState} from 'react';
import searchIcon from "../../assets/icons/search.svg";
import './styles.css';
import { withRouter } from 'react-router-dom';

function SearchBarButton(props) {
    const [userName, setUserName] = useState(""); 

    function handleChange(event){
        setUserName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();

        if(userName !== ""){
            props.history.push(`result/${userName}`);
        }
    }

    return(
        <div id="container">
            <input type="text" className="search-input" onChange={handleChange}></input>
            <button onClick={handleSubmit}>
                <img src={searchIcon} alt="buscar"></img>
            </button>
        </div>   
    )
}

export default withRouter(SearchBarButton);