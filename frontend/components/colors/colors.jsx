import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import SideBar from './sidebar';

class Colors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar/>
                <SideBar/>
            </div>
        );
    }
}

export default Colors;