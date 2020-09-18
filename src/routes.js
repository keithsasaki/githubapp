import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            {/* <Route path="/result" component={Result} />
            <Route path="/" component={Landing} /> */}
        </BrowserRouter>
    );
}

export default Routes;