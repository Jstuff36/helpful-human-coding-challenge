import React from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="side-bar-container">
                <div className="button-container">
                    <button className="random-color-button">
                        Random Color
                    </button>
                </div>
                <ul className="colors-side-bar-container">
                    <li>
                        Red
                    </li>
                    <li>
                        Orange
                    </li>
                    <li>
                        Yellow
                    </li>
                    <li>
                        Green
                    </li>
                    <li>
                        Blue
                    </li>
                    <li>
                        Purple
                    </li>
                    <li>
                        Brown
                    </li>
                    <li>
                        Gray
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBar;