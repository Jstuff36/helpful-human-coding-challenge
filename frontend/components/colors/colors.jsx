import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';

class Colors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar/>
            </div>
        );
    }
}

export default Colors;