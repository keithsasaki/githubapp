import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import SearchBarButton from '../../components/SearchBarButton';
import SearchText from '../../components/SearchText';

import './styles.css';
import UserInformations from '../../components/UserInformations';
import UserProject from '../../components/UserProject';
import Axios from 'axios';

function SearchResult(props) {
    let { userName } = useParams();
    const [user, setUser] = useState({});

    return (
        <React.Fragment>
            <div id="page-search-result">
                <div id="search-text-container">
                    <SearchText />
                </div>
                <div id="search-bar-button-container">
                    <SearchBarButton userName={userName} newSearch={handleClick}/>
                </div>
            </div>
            <div id="result">
                <div id="user-informations">
                    <UserInformations user= {user}/>
                </div>
                <div id="user-projects">
                    <UserProject projectName="Death Star" projectDescription="The most powerful weapon in the universe" />
                    <UserProject projectName="Death Star" projectDescription="The most powerful weapon in the universe" />
                    <UserProject projectName="Death Star" projectDescription="The most powerful weapon in the universe" />
                </div>
            </div>
        </React.Fragment>
    );

    function getUserInformations(newUserName){
        alert('entrou');
        Axios.get(`https://api.github.com/users/${newUserName}`)
            .then(res => {
                setUser(res)
            });
    }

    function handleClick(newUserName){
        console.log(newUserName);
        getUserInformations(newUserName);
    }
}

export default SearchResult;