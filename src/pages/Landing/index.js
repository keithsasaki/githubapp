import React from 'react';
import SearchText from '../../components/SearchText';
import SearchBarButton from '../../components/SearchBarButton';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="search-text">
                <SearchText />
            </div>
            <SearchBarButton />     
        </div>
    );
}

export default Landing;