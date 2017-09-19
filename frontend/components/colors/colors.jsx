import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import SideBar from './sidebar';
import ColorsListView from './colors_list_view';

class Colors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar
                    searchColors={this.props.searchColors}
                    colors={this.props.colors}
                />
                <div className="list-view-main-container">
                    <SideBar
                        searchColors={this.props.searchColors}
                        colors={this.props.colors}/>
                    <ColorsListView
                        allColors={this.props.allColors}
                        colorsFiltered={this.props.colorsFiltered}
                        colors={this.props.colors}/>
                </div>
            </div>
        );
    }
}

export default Colors;