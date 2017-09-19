import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import MultiColors from './display_multi_colors';

class ColorsListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: null,
            offset: 0
        };

        this.getDims = this.getDims.bind(this);
        this.calcNumWindows = this.calcNumWindows.bind(this);
        this.calcPageNumbers = this.calcPageNumbers.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({ offset: offset }, () => {
        });
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

        let numbersToDisplay;
        if (numNumbers.length > 5) {
            numbersToDisplay = [1, 2, 3, 4, 5];
        } else {
            numbersToDisplay = numNumbers;
        }
        
        return [numNumbers, numbersToDisplay];
    }

    handlePageClick(number) {
        return (e) => {
            console.log(e.currentTarget.value);
            this.setState({
                currentPage: number
            });
        };
    }

    render() {
        if (!this.state.colors) {
            return null;
        } else {
            let colors = this.state.colors;
            let [width, height] = this.getDims();
            let numWindows = this.calcNumWindows(width, height);
            let [numNumbers, numbersToDisplay] = this.calcPageNumbers(colors, numWindows);
            return( 
                <div className="list-view-container">
                    <MultiColors
                        colors={colors}
                        numWindows={numWindows}
                    />
                    <ReactPaginate previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={<a href="">...</a>}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"numbers-container"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />

                    
                </div>
            );
        }
    }
}

{/* <ul className="numbers-container">
    {numbersToDisplay.map((number, idx) => (
        <li
            onClick={this.handlePageClick(number)}
            key={idx}>
            {number}
        </li>
    ))}
    {numNumbers.length > 5 ?
        <li
            onClick={this.handlePageClick(numNumbers[numNumbers.length - 1])}>
            {"Last"}
        </li>
        :
        <li>
            {""}
        </li>
    }
</ul> */}

export default ColorsListView;