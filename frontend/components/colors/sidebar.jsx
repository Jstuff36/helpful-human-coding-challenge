import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import DetailColorModal from './detail_color_modal';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalContent: []
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.pickRandomColor = this.pickRandomColor.bind(this);
    }

    pickRandomColor() {
        let randoColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        this.handleOpenModal(randoColor['value'])(); 
    }

    handleClick(colorClicked) {
        return (e) => {
            e.preventDefault();
            let filteredColors = [];
            this.props.colors.forEach( (color) => {
                if (color['name'].includes(colorClicked.toLowerCase())) {
                    filteredColors.push(color);
                }
            });
            this.props.searchColors(filteredColors);
        };
    }

    handleOpenModal(content) {
        return () => {
            this.setState({
                 showModal: true,
                modalContent: content
            });
        };
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    
    render() {
        const sideColors = { 
            'Red': '#FF0000', 
            'Orange': '#ffa500', 
            'Yellow': '#ffff00', 
            'Green': '#00ff00',
            'Blue': '#0000ff',
            'Purple': '#551a8b', 
            'Brown': '#f4a460', 
            'Gray': '#7f7f7f'
        };
        return(
            <div className="side-bar-container">
                <div className="button-container">
                    <button 
                        onClick={this.pickRandomColor}
                        className="random-color-button">
                        Random Color
                    </button>
                </div>
                <ul className="colors-side-bar-container">
                    {Object.keys(sideColors).map( (color, idx) => (
                        <li
                            key={idx}
                            onClick={this.handleClick(color)}>
                            {color}
                        </li>
                    ))}
                </ul>
                <Modal
                    
                    isOpen={this.state.showModal}
                    className="modal"
                    contentLabel="Color Detail View"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    overlayClassName="overlay">
                    <DetailColorModal
                        modalContent={this.state.modalContent}
                        handleCloseModal={this.handleCloseModal}
                    />
                </Modal>
            </div>
        );
    }
}

export default SideBar;