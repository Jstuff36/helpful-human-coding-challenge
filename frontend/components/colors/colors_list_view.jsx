import React from 'react';
import ReactDOM from 'react-dom';
import sizeMe from 'react-sizeme';

class ColorsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: null
        };
    }

    componentDidMount() {
        this.props.allColors();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.colors !== nextProps.colors) {
            this.setState( {
               colors: nextProps.colors 
            });
        } 
        // .then( res => {
        //     console.log(res);
        // });
    }

    render() {
        if (!this.state.colors) {
            return null;
        } else {
            let { width } = this.props.size;
            let height = this.props.size.height - 20;
            console.log(height);
            let colors = this.state.colors;
            let numWindows;
            if (width < 800) {
                numWindows = Math.floor(width / 250) * Math.floor(height / 250);
            } else {
                numWindows = Math.floor(width / 225) * Math.floor(height / 225);
            }
            let numNumbers = [];
            for (let i = 1; i < Math.ceil(colors.length / numWindows); i++ ) {
                numNumbers.push(i);
            }
            return( 
                <div className="list-view-container">
                    <ul className="colors-sub-container">
                        {colors.slice(0, numWindows).map((color, idx) => (
                            <li
                                key={idx}>
                                <div 
                                    className="indv-color"
                                    style={{background: color.value}}>
                                </div>
                                <div>
                                    {color.value }
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <ul className="numbers-container">
                            {numNumbers.map((number, idx) => (
                                <li key={idx}>
                                    {number}
                                </li>
                            ))}
                        </ul>
                    </div>
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