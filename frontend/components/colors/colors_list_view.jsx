import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import MultiColors from './display_multi_colors';

class ColorsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: null,
            offset: 0,
            windowNum: 0,
            pageCount: 5,
            width: null,
            height: null
        };

        this.getDims = this.getDims.bind(this);
        this.calcNumWindows = this.calcNumWindows.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.props.allColors();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.colors !== nextProps.colors) {
            if (nextProps.colorsFiltered && nextProps.colorsFiltered.length > 0) {
                let [width, height] = this.getDims(); 
                let numWindows = this.calcNumWindows(width, height);        
                this.setState({
                    windowNum: 0,
                    numWindows: numWindows,
                    colors: nextProps.colorsFiltered
                });
            } else {
                let [width, height] = this.getDims(); 
                let numWindows = this.calcNumWindows(width, height);
                this.setState( {
                    numWindows: numWindows,
                    colors: nextProps.colors 
                });
            }
        }
    }

    updateDimensions() {
        let [width, height] = this.getDims();
        let numWindows = this.calcNumWindows(width, height);        
        this.setState({
            width: width,
            height: height,
            numWindows: numWindows
        });
    }

    getDims() {
        let sideBarWidth = document.querySelector('.side-bar-container').clientWidth;
        let navBarHeight = document.querySelector('.navbar-container').clientHeight;
        let width = window.innerWidth - sideBarWidth;
        let height = window.innerHeight - navBarHeight;
        return([width, height]);
    }

    calcNumWindows(width, height) {
        return Math.floor(width / 225) * Math.floor(height / 215);
    }

    handlePageClick(data) {
        let selected = data.selected;
        this.setState({ windowNum: selected });
    }

    render() {
        if (!this.state.colors) {
            return null;
        } else {
            let colors = this.state.colors;
            let [width, height] = this.getDims(); 
            let { numWindows } = this.state;
            let numPages = Math.ceil(colors.length / numWindows);
            return( 
                <div className="list-view-container">
                    <MultiColors
                        colors={colors}
                        numWindows={this.state.numWindows}
                        windowNum={this.state.windowNum}
                    />
                    <ReactPaginate previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={<a href="">...</a>}
                        breakClassName={"break-me"}
                        pageCount={ numPages }
                        marginPagesDisplayed={1 }
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"numbers-container"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active-page-number"} />
                </div>
            );
        }
    }
}

export default ColorsListView;