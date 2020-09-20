import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SearchResult from './pages/SearchResult';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/result/:userName" component={SearchResult} />
        </BrowserRouter>
    );
}

export default Routes;