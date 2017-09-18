import React from 'react';
import ReactDOM from 'react-dom';

class MultiColors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const colors = this.props.colors;
        return(
            <ul className="colors-sub-container">
                {colors.slice(0, this.props.numWindows).map((color, idx) => (
                    <li
                        key={idx}>
                        <div
                            className="indv-color"
                            style={{ background: color.value }}>
                        </div>
                        <div>
                            {color.value}
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default MultiColors;