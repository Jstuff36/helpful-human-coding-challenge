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
            const { width, height } = this.props.size;
            return( 
                <div className="list-view-container">
                    <ul className="colors-sub-container">
                        {this.state.colors.slice(0, 20).map((color, idx) => (
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