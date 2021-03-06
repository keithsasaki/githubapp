import React, {useState, useEffect} from 'react';
import SearchBarButton from '../../components/SearchBarButton';
import SearchText from '../../components/SearchText';
import {useParams} from 'react-router-dom';
import UserInformations from '../../components/UserInformations';
import UserProject from '../../components/UserProject';
import api from '../../services/api';
import UserNotFound from '../../components/UserNotFound';

import './styles.css';
function SearchResult() {
    const { userName } = useParams();

    const [user, setUser] = useState({});
    const [repositories, setRepositories] = useState([]);
    const [userNotFound, setUserNotFound] = useState(false);
    const [starsSum, setStarsSum] = useState(0);
   
    useEffect(() => {
        const onButtonClickHandler = (userName) => {
            getUserInformations(userName);
            getReposInformations(userName);
        }

        onButtonClickHandler(userName);
    }, [userName]);


    async function getUserInformations(userName){
        try{
            const response = await api.get(`users/${userName}`);
            setUser(response.data);
            setUserNotFound(false);
        } catch(error){
            if(error.response.status === 404){
                console.log("User not found");
            }else{
                console.log("Error trying to search user")
            }
            setUserNotFound(true);
            setRepositories([]);
            setUser({});
        }
    }

    async function getReposInformations(userName){
        const response = await api.get(`users/${userName}/repos`);
        setRepositories(response.data);
    }

    const UserData = () =>{
        if(!userNotFound){
            if(repositories.length > 0){
                setStarsSum(repositories.reduce((first, next) => first + parseInt(next.stargazers_count),0))
            }
            return <UserInformations user= {user} starsSum={starsSum}/>
        }
        else{
            return <UserNotFound />
        }
    }

    return (
        <React.Fragment>
            <div id="page-search-result">
                <div id="search-text-container">
                    <SearchText />
                </div>
                <div id="search-bar-button-container">
                    <SearchBarButton />
                </div>
            </div>
            <div id="result">
                <UserData />

                {repositories.length > 0 && <div id="user-projects">
                    { repositories.sort((a,b) => {
                        if(a.stargazers_count > b.stargazers_count) return -1
                        else if(a.stargazers_count < b.stargazers_count) return 1
                        return 0
                    }).map((repo) => {
                        return <UserProject repo={repo} key={repo.name}/>
                    })}
                </div>
                }
            </div>
        </React.Fragment>
    );
    

}

export default SearchResult;