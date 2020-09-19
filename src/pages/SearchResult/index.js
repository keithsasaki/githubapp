import React from 'react';
import SearchBarButton from '../../components/SearchBarButton';
import SearchText from '../../components/SearchText';

import './styles.css';
import UserInformations from '../../components/UserInformations';

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

            <div id="user-informations">
                <UserInformations />
            </div>
        </React.Fragment>
    );
}

export default SearchResult;