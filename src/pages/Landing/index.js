import React from 'react';
import './styles.css';
import SearchText from '../../components/SearchText';
import SearchBarButton from '../../components/SearchBarButton';

function Landing() {
    return (
        <div>
            <SearchText />

            <SearchBarButton />     
        </div>
    )
}

export default Landing;