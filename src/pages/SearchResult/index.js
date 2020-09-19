import React from 'react';
import SearchBarButton from '../../components/SearchBarButton';
import SearchText from '../../components/SearchText';

import './styles.css';

function SearchResult() {
    return (
        <div id="page-search-result">
            <div id="search-text-container">
                <SearchText />
            </div>
            <div id="search-bar-button-container">
                <SearchBarButton />
            </div>
        </div>
    );
}

export default SearchResult;