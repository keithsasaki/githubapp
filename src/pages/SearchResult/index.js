import React, {useState} from 'react';
import SearchBarButton from '../../components/SearchBarButton';
import SearchText from '../../components/SearchText';

import './styles.css';
import UserInformations from '../../components/UserInformations';
import UserProject from '../../components/UserProject';
import api from '../../services/api';

function SearchResult() {
    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState([]);

    const handleClick = (newUser) => {
        getUserInformations(newUser);
        getReposInformations(newUser);
    }

    async function getUserInformations(userName){
        const response = await api.get(`users/${userName}`);
        setUser(response.data);
    }

    async function getReposInformations(userName){
        const response = await api.get(`users/${userName}/repos`);
        setRepositories(response.data);
    }

    return (
        <React.Fragment>
            <div id="page-search-result">
                <div id="search-text-container">
                    <SearchText />
                </div>
                <div id="search-bar-button-container">
                    <SearchBarButton onButtonClick = {handleClick.bind(this)}/>
                </div>
            </div>
            <div id="result">
                <div id="user-informations">
                    <UserInformations user= {user}/>
                </div>
                <div id="user-projects">
                    { repositories.map((repo) => {
                                return <UserProject projectName={repo.name} projectDescription={repo.description} />
                    })};
                </div>
            </div>
        </React.Fragment>
    );
    

}

export default SearchResult;