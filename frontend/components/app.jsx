import React from 'react';
import ColorsContainer from './colors/colors_container';
import {
    Route
} from 'react-router-dom';

const App = () => (
    <div>
        <Route exact path="/" component={ColorsContainer} />
    </div>
);

export default App;