import React from 'react';
import SearchBarButton from '../../components/SearchBarButton';
import SearchText from '../../components/SearchText';

import './styles.css';
import UserInformations from '../../components/UserInformations';
import UserProject from '../../components/UserProject';

function SearchResult() {
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
                <div id="user-informations">
                    <UserInformations />
                </div>
                <div id="user-projects">
                    <UserProject projectName="Death Star" projectDescription="The most powerful weapon in the universe" />
                    <UserProject projectName="Death Star" projectDescription="The most powerful weapon in the universe" />
                    <UserProject projectName="Death Star" projectDescription="The most powerful weapon in the universe" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchResult;