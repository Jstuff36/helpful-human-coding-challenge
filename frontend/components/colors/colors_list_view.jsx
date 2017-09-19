import React from 'react';
import ReactDOM from 'react-dom';
import sizeMe from 'react-sizeme';

import MultiColors from './display_multi_colors';

class ColorsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: null
        };

        this.getDims = this.getDims.bind(this);
        this.calcNumWindows = this.calcNumWindows.bind(this);
        this.calcPageNumbers = this.calcPageNumbers.bind(this);
    }

    componentDidMount() {
        this.props.allColors();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.colors !== nextProps.colors) {
            if (nextProps.colorsFiltered && nextProps.colorsFiltered.length > 0) {
                this.setState({
                    colors: nextProps.colorsFiltered
                });
            } else {
                this.setState( {
                   colors: nextProps.colors 
                });
            }
        } 
        // .then( res => {
        //     console.log(res);
        // });
    }

    getDims() {
            let sideBarWidth = document.querySelector('.side-bar-container').clientWidth;
            let navBarHeight = document.querySelector('.navbar-container').clientHeight;
            let width = window.innerWidth - sideBarWidth;
            let height = window.innerHeight - navBarHeight;
            return([width, height]);
    }

    calcNumWindows(width, height) {
        return Math.floor(width / 225) * Math.floor(height / 194);
    }

    calcPageNumbers(colors, numWindows) {
        let numNumbers = [];
        for (let i = 1; i < Math.ceil(colors.length / numWindows); i++) {
            numNumbers.push(i);
        }
        return numNumbers;
    }

    render() {
        if (!this.state.colors) {
            return null;
        } else {
            let colors = this.state.colors;
            let [width, height] = this.getDims();
            let numWindows = this.calcNumWindows(width, height);
            let numNumbers = this.calcPageNumbers(colors, numWindows);
            return( 
                <div className="list-view-container">
                    <MultiColors
                        colors={colors}
                        numWindows={numWindows}
                    />
                    <ul className="numbers-container">
                        {numNumbers.map((number, idx) => (
                            <li key={idx}>
                                {number}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

const sizeMeConfig = {
    monitorWidth: true,
    monitorHeight: true
};
const sizeMeHOC = sizeMe(sizeMeConfig);
export default sizeMeHOC(ColorsListView);